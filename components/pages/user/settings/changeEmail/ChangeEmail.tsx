import React, { SyntheticEvent, useState } from 'react'
import EmptyFieldCheck from '@components/functions/emptyFieldCheck'
import FeedbackApi from '@components/common/feedback/FeedbackAPi'
import ChangeEmailInputs from './ChangeEmailInputs'
import validateEmail from '@components/functions/emailValidation'


export interface ChangeEmailProps {
    password: string,
    email: string
}

const ChangeEmail = () => {
    const [state, setState] = useState<ChangeEmailProps>({ email: '', password: '' })
    const [inputError, setInputError] = useState(false)
    const [apiSuccess, setApiSuccess] = useState<string[]>([])
    const [apiError, setApiError] = useState<string[]>([])


    const onSubmit = async (e: SyntheticEvent) => {
        e.preventDefault()
        setInputError(false)

        if (EmptyFieldCheck({ password: state.password }) || !validateEmail(state.email)) {
            setInputError(true)
            return
        }
    }

    return (
        <>

            <ChangeEmailInputs state={state} setState={setState} inputError={inputError} onSubmit={onSubmit} />

            <FeedbackApi setApiError={setApiError} setApiSuccess={setApiSuccess} apiError={apiError} apiSuccess={apiSuccess} />
        </>
    )
}

export default ChangeEmail
