/* eslint-disable react-hooks/exhaustive-deps */
import React, { Dispatch, SetStateAction, SyntheticEvent, useEffect, useState } from 'react'
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


const PersonalInformation = () => {
    const [getLoginCandidate, { data }] = useLazyQuery(LoginCandidate)
    const [createCandidate] = useMutation(CreateProfile, { refetchQueries: [LoginCandidate], onError: () => null })
    const router = useRouter()
    const [state, setState] = useState(initialBasicState)

    const [inputError, setInputError] = useState(false)
    const [apiSuccess, setApiSuccess] = useState<string[]>([])
    const [apiError, setApiError] = useState<string[]>([])


    useEffect(() => {
        if (data?.loginCandidate) {
            const { jobTitle, gender, phone, city, address, yearOfExperience, minSalary, currency, dateOfBirth, confidential } = data?.loginCandidate
            setState({ ...state, city, address, yearOfExperience, minSalary, currency: currency.toUpperCase(), jobTitle: jobTitle.id, phone, confidential, dateOfBirth, gender: gender.toUpperCase() })
        }
    }, [data])

    useEffect(() => {
        getLoginCandidate()
    }, [])



    const onSubmit = async (e: SyntheticEvent) => {
        e.preventDefault()
        setInputError(false)
        const { jobTitle,
            dateOfBirth,
            gender,
            residenceCountry,
            city,
            phone,
            address,
            jobStatus,
            profileVisibility,
            yearOfExperience,
            minSalary,
            confidential,
            currency } = state
        if (EmptyFieldCheck({ jobTitle, dateOfBirth, city, address, yearOfExperience, minSalary, currency, phone, gender, residenceCountry })) {
            setInputError(true)
            return
        }
        const { error, data } = await graphqlRes(createCandidate({ variables: { jobTitle: Number(state.jobTitle), dateOfBirth, city, address, yearOfExperience, minSalary, currency, phone, gender, confidential } }))
        if (error) {
            setApiError(data)
            return
        }
        setApiSuccess(['Profile updated successfully'])
        setTimeout(() => {
            router.push('/profile/user')
        }, 200);

    }

    return (
        <div className="grid grid-cols-7 justify-center my-16">
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

export default PersonalInformation
