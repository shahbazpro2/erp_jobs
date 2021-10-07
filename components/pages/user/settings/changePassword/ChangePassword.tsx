import React, { SyntheticEvent, useState } from 'react'
import EmptyFieldCheck from '@components/functions/emptyFieldCheck'
import FeedbackApi from '@components/common/feedback/FeedbackAPi'
import ChangePasswordInputs from './ChangePasswordInputs'
import validateEmail from '@components/functions/emailValidation'
import { apiPasswordChange } from '@api/userSettings'
import ObjectToArray from '@components/functions/ObjectToArray'


export interface ChangePasswordProps {
    old_password: string,
    new_password1: string,
    new_password2: string
}

const initialState = {
    old_password: '', new_password1: '', new_password2: ''
}

const ChangePassword = () => {
    const [state, setState] = useState<ChangePasswordProps>(initialState)
    const [inputError, setInputError] = useState(false)
    const [apiSuccess, setApiSuccess] = useState<string[]>([])
    const [apiError, setApiError] = useState<string[]>([])
    const [loading, setLoading] = useState(false)


    const onSubmit = async (e: SyntheticEvent) => {
        e.preventDefault()
        setInputError(false)

        if (EmptyFieldCheck({ ...state })) {
            setInputError(true)
            return
        }

        if (state.old_password === state.new_password1) {
            setApiError(['New password must be different with old passord'])
            return
        }
        setLoading(true)

        const res = await apiPasswordChange(state)
        console.log('res', res?.data)
        if (!res?.error) {
            setApiSuccess(res?.data)
            setLoading(false)
            return
        }

        setApiError(res?.data)
        setLoading(false)

    }

    return (
        <>

            <ChangePasswordInputs state={state} setState={setState} inputError={inputError} onSubmit={onSubmit} loading={loading} />

            <FeedbackApi setApiError={setApiError} setApiSuccess={setApiSuccess} apiError={apiError} apiSuccess={apiSuccess} />
        </>
    )
}

export default ChangePassword
