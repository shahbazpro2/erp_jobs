import BoxWrapper from '@components/common/boxWrapper/BoxWrapper'
import React, { SyntheticEvent, useState } from 'react'
import dynamic from 'next/dynamic'
const EditCompanyInputs = dynamic(() => import(
    './EditCompanyInputs'
), { ssr: false })
import { initialEditCompanyStates } from './initialStates'
import { EditCompanyDetailsProps } from './types'
import FeedbackApi from '@components/common/feedback/FeedbackAPi'
import EmptyFieldCheck from '@components/functions/emptyFieldCheck'

const EditCompanyDetails = () => {
    const [state, setState] = useState<EditCompanyDetailsProps>(initialEditCompanyStates)

    const [inputError, setInputError] = useState(false)
    const [apiSuccess, setApiSuccess] = useState<string[]>([])
    const [apiError, setApiError] = useState<string[]>([])
    const [loading, setLoading] = useState(false)


    const onSubmit = async (e: SyntheticEvent) => {
        e.preventDefault()
        setInputError(false)
        console.log('state', state)
        if (EmptyFieldCheck({
            ...state
        })) {
            setInputError(true)
            return
        }
        setLoading(true)
        /*  const { error, data } = await graphqlRes(createCandidate({
             variables: { ...state }
         }))
         if (error) {
             setApiError(data)
             setLoading(false)
             return
         }
         setLoading(false)
         setApiSuccess(['Profile updated successfully'])
         setTimeout(() => {
             router.push(url_userProfile)
         }, 200); */

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