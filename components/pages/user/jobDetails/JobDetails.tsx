/* eslint-disable react-hooks/exhaustive-deps */
import React, { SyntheticEvent, useState } from 'react'
import BoxWrapper from '@components/common/boxWrapper/BoxWrapper'
import EmptyFieldCheck from '@components/functions/emptyFieldCheck'
import HeadingStyle1 from '@components/common/headerStyles/HeadingStyle1'
import { initialJobStates } from './initialStates'
import FeedbackApi from '@components/common/feedback/FeedbackAPi'
import { useRouter } from 'next/router'
import { url_userProfile } from '@components/functions/pageUrls'

import JobDetailsInput from './JobDetailsInput'
import { addUserJobDetails } from '@api/jobDetails'
import { JobProps } from './types'



const JobDetails = () => {
    const router = useRouter()
    const [state, setState] = useState<JobProps>(initialJobStates)

    const [inputError, setInputError] = useState(false)
    const [apiSuccess, setApiSuccess] = useState<string[]>([])
    const [apiError, setApiError] = useState<string[]>([])
    const [loading, setLoading] = useState(false)


    const onSubmit = async (e: SyntheticEvent) => {
        e.preventDefault()
        setInputError(false)
        if (EmptyFieldCheck({
            ...state
        }) || new Date(state.availability_date) <= new Date() || state.min_salary >= state.max_salary) {
            setInputError(true)
            return
        }
        setLoading(true)
        const res = await addUserJobDetails(state)
        if (res?.error) {
            setApiError(res?.data)
            setLoading(false)
            return
        }
        setLoading(false)
        setApiSuccess(['Job details updated successfully'])
        setTimeout(() => {
            router.push(url_userProfile)
        }, 200);

    }

    return (
        <div className="grid grid-cols-7 justify-center py-16 gray-bg">
            <div className="col-start-3 col-span-3">

                <BoxWrapper >
                    <HeadingStyle1 title="Job Details" subtitle="Please Complete Your Job Details in the Form Below" />
                    <div className="mt-8">
                        <JobDetailsInput state={state} setState={setState} inputError={inputError} onSubmit={onSubmit} loading={loading} />
                    </div>
                </BoxWrapper>
            </div>

            <FeedbackApi apiError={apiError} setApiError={setApiError} apiSuccess={apiSuccess} setApiSuccess={setApiSuccess} />
        </div>
    )
}

export default JobDetails
