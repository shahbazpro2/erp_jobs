import React, { SyntheticEvent, useState } from 'react'
import EmptyFieldCheck from '@components/functions/emptyFieldCheck'
import FeedbackApi from '@components/common/feedback/FeedbackAPi'
import ChangePasswordInputs from './ChangePasswordInputs'
import validateEmail from '@components/functions/emailValidation'


export interface ChangePasswordProps {
    oldPassword: string,
    newPassword: string
}

const ChangePassword = () => {
    const [state, setState] = useState<ChangePasswordProps>({ oldPassword: '', newPassword: '' })
    const [inputError, setInputError] = useState(false)
    const [apiSuccess, setApiSuccess] = useState<string[]>([])
    const [apiError, setApiError] = useState<string[]>([])


    const onSubmit = async (e: SyntheticEvent) => {
        e.preventDefault()
        setInputError(false)

        if (EmptyFieldCheck({ ...state })) {
            setInputError(true)
            return
        }
    }

    return (
        <>

            <ChangePasswordInputs state={state} setState={setState} inputError={inputError} onSubmit={onSubmit} />

            <FeedbackApi setApiError={setApiError} setApiSuccess={setApiSuccess} apiError={apiError} apiSuccess={apiSuccess} />
        </>
    )
}

export default ChangePassword
