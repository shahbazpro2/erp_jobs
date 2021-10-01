/* eslint-disable react-hooks/exhaustive-deps */
import React, { Dispatch, SetStateAction, SyntheticEvent, useEffect, useState } from 'react'
import BoxWrapper from '@components/common/boxWrapper/BoxWrapper'
import { useLazyQuery, useMutation } from '@apollo/client'
import EmptyFieldCheck from '@components/functions/emptyFieldCheck'
import HeadingStyle1 from '@components/common/headerStyles/HeadingStyle1'
import { LoginCandidate } from '@graphql/queries/LoginCandidate'
import { CreateProfile } from '@graphql/mutations/user/CreateProfile'
import { initialBasicState } from './initialStates'
import BasicInfoInputs from './BasicInfoInputs'
import FeedbackApi from '@components/common/feedback/FeedbackAPi'
import graphqlRes from '@components/functions/graphqlRes'

interface Props {
    setActive: Dispatch<SetStateAction<string>>
}
const BasicInformation = ({ setActive }: Props) => {
    const [getLoginCandidate, { data }] = useLazyQuery(LoginCandidate)
    const [createCandidate] = useMutation(CreateProfile, { refetchQueries: [LoginCandidate], onError: () => null })

    const [state, setState] = useState(initialBasicState)

    const [inputError, setInputError] = useState(false)
    const [apiSuccess, setApiSuccess] = useState<string[]>([])
    const [apiError, setApiError] = useState<string[]>([])


    useEffect(() => {
        if (data?.loginCandidate) {
            const { jobTitle, gender, phone } = data?.loginCandidate
            setState({ ...state, jobTitle: jobTitle.id, phone, gender: gender.toUpperCase() })
        }
    }, [data])

    useEffect(() => {
        getLoginCandidate()
        console.log('data', data)
    }, [])



    const onSubmit = async (e: SyntheticEvent) => {
        e.preventDefault()
        setInputError(false)
        const { jobTitle,
            dateOfBirth,
            gender,
            nationality,
            residenceCountry,
            city,
            phone,
            address,
            jobStatus,
            profileVisibility,
            yearOfExperience,
            minSalary,
            currency,
            confidential } = state
        if (EmptyFieldCheck({ jobTitle, phone, gender })) {
            setInputError(true)
            return
        }
        console.log('state', state)
        const { error, data } = await graphqlRes(createCandidate({ variables: { jobTitle: Number(state.jobTitle), phone, gender } }))
        if (error) {
            setApiError(data)
            return
        }
        setApiSuccess(['Profile updated successfully'])
        setTimeout(() => {
            setActive('career')
        }, 500);

    }

    return (
        <div className="grid grid-cols-7 justify-center">
            <div className="col-start-3 col-span-3">

                <BoxWrapper >
                    <HeadingStyle1 title="Basic Information" subtitle="Please Complete Your Basic Information in the Form Below" />
                    <div className="mt-8">
                        <BasicInfoInputs state={state} setState={setState} inputError={inputError} onSubmit={onSubmit} />
                    </div>
                </BoxWrapper>
            </div>

            <FeedbackApi apiError={apiError} setApiError={setApiError} apiSuccess={apiSuccess} setApiSuccess={setApiSuccess} />
        </div>
    )
}

export default BasicInformation
