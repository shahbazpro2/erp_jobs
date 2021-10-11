/* eslint-disable react-hooks/exhaustive-deps */
import React, { SyntheticEvent, useEffect, useState } from 'react'
import BoxWrapper from '@components/common/boxWrapper/BoxWrapper'
import { useLazyQuery, useMutation } from '@apollo/client'
import EmptyFieldCheck from '@components/functions/emptyFieldCheck'
import HeadingStyle1 from '@components/common/headerStyles/HeadingStyle1'
import { LoginCandidate } from '@graphql/queries/LoginCandidate'
import { CreateProfile } from '@graphql/mutations/user/CreateProfile'
import { initialBasicState } from './initialStates'
import BasicInfoInputs from './PersonalInfoInputs'
import FeedbackApi from '@components/common/feedback/FeedbackAPi'
import graphqlRes from '@components/functions/graphqlRes'
import { useRouter } from 'next/router'
import { url_userProfile } from '@components/functions/pageUrls'
import { jobStatusOptions, profileVisibilityOptions } from '@components/functions/dropDowns'
import getDropdownKey from '@components/functions/getDropdownKey'


const PersonalInformation = () => {
    const [getLoginCandidate, { data }] = useLazyQuery(LoginCandidate)
    const [createCandidate] = useMutation(CreateProfile, { refetchQueries: [LoginCandidate], onError: () => null })
    const router = useRouter()
    const [state, setState] = useState(initialBasicState)

    const [inputError, setInputError] = useState(false)
    const [apiSuccess, setApiSuccess] = useState<string[]>([])
    const [apiError, setApiError] = useState<string[]>([])
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        if (data?.loginCandidate) {
            const { jobTitle, gender, currency, jobStatus, profileVisibility } = data?.loginCandidate

            const jobStatusKey: string = getDropdownKey(jobStatus, jobStatusOptions)
            const profileVisibilityKey: string = getDropdownKey(profileVisibility, profileVisibilityOptions)

            setState({ ...data?.loginCandidate, currency: currency?.toUpperCase(), jobTitle: jobTitle.id, gender: gender?.toUpperCase(), jobStatus: jobStatusKey, profileVisibility: profileVisibilityKey })
        }
    }, [data])

    useEffect(() => {
        getLoginCandidate()
    }, [])



    const onSubmit = async (e: SyntheticEvent) => {
        e.preventDefault()
        setInputError(false)

        if (EmptyFieldCheck({
            ...state
        })) {
            setInputError(true)
            return
        }
        setLoading(true)
        const { error, data } = await graphqlRes(createCandidate({
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
        }, 200);

    }

    return (
        <div className="grid grid-cols-7 justify-center py-16 gray-bg">
            <div className="col-start-3 col-span-3">

                <BoxWrapper >
                    <HeadingStyle1 title="Basic Information" subtitle="Please Complete Your Basic Information in the Form Below" />
                    <div className="mt-8">
                        <BasicInfoInputs state={state} setState={setState} inputError={inputError} onSubmit={onSubmit} loading={loading} />
                    </div>
                </BoxWrapper>
            </div>

            <FeedbackApi apiError={apiError} setApiError={setApiError} apiSuccess={apiSuccess} setApiSuccess={setApiSuccess} />
        </div>
    )
}

export default PersonalInformation
