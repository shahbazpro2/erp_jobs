import React, { SyntheticEvent, useState } from 'react'
import EmptyFieldCheck from '@components/functions/emptyFieldCheck'
import FeedbackApi from '@components/common/feedback/FeedbackAPi'
import ChangePasswordInputs from './ChangePasswordInputs'
import { apiPasswordChange } from '@api/userSettings'


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

        if (EmptyFieldCheck({ ...state }) || state.new_password1 !== state.new_password2 || state.new_password1.length < 8) {
            setInputError(true)
            return
        }

        if (state.old_password === state.new_password1) {
            setApiError(['New password must be different with old passord'])
            return
        }
        setLoading(true)

        const res = await apiPasswordChange(state)
        if (!res?.error) {
            setLoading(false)
            setApiSuccess(['New password changed successfully'])
            setState(initialState)
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
