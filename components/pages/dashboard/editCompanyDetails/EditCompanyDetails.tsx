import BoxWrapper from '@components/common/boxWrapper/BoxWrapper'
import React, { SyntheticEvent, useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
const EditCompanyInputs = dynamic(() => import(
    './EditCompanyInputs'
), { ssr: false })
import { initialEditCompanyStates } from './initialStates'
import { EditCompanyDetailsProps } from './types'
import FeedbackApi from '@components/common/feedback/FeedbackAPi'
import EmptyFieldCheck from '@components/functions/emptyFieldCheck'
import { addCompanyInformation, getCompanyInformation } from '@api/employer/companyInformation'
import { createFileFromUrl } from '@components/functions/createFileFromUrl'

const EditCompanyDetails = () => {
    const [state, setState] = useState<EditCompanyDetailsProps>(initialEditCompanyStates)

    const [inputError, setInputError] = useState(false)
    const [apiSuccess, setApiSuccess] = useState<string[]>([])
    const [apiError, setApiError] = useState<string[]>([])
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        (async () => {
            const res = await getCompanyInformation()
            if (!res?.error) {
                if (res?.data[0]) {
                    const stateData = res?.data[0]
                    delete stateData['subscription']
                    delete stateData['uid']
                    const file = await createFileFromUrl(stateData.image, stateData.image.split('/').pop())
                    setState({ ...stateData, image: file })
                }
            }

        })()
    }, [])


    const onSubmit = async (e: SyntheticEvent) => {
        e.preventDefault()
        setInputError(false)
        if (EmptyFieldCheck({
            ...state,
        })) {
            setInputError(true)
            return
        }
        setLoading(true)

        const formData = new FormData()
        Object.entries(state).forEach(([key, value]) => {
            console.log(key, value)
            formData.append(key, value)
        });
        formData.append('subscription', '')

        const res = await addCompanyInformation(formData)
        if (res?.error) {
            setApiError(res?.data)
            setLoading(false)
            return
        }
        setLoading(false)
        setApiSuccess(['Company updated successfully'])

    }

    return (
        <div>
            <BoxWrapper>
                <div className="text-xl font-bold mb-7">
                    Basic Company Information
                </div>
                <EditCompanyInputs
                    state={state}
                    setState={setState}
                    loading={loading}
                    inputError={inputError}
                    onSubmit={onSubmit}
                />
            </BoxWrapper>
            <FeedbackApi apiError={apiError} setApiError={setApiError} apiSuccess={apiSuccess} setApiSuccess={setApiSuccess} />
        </div>
    )
}

export default EditCompanyDetails