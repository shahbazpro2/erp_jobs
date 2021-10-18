/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { SyntheticEvent, useState } from 'react'
import BoxWrapper from '@components/common/boxWrapper/BoxWrapper'
import LoginForm from '@components/common/forms/LoginForm'
import ORDivider from '@components/common/dividers/ORDivider'
import SocialsLogin from '@components/common/socialsLogin/SocialsLogin'
import { Button } from '@mui/material'
import EmployerAuthWrapper from '@components/pages/auth/EmployerAuthWrapper'
import validateEmail from '@components/functions/emailValidation'
import EmptyFieldCheck from '@components/functions/emptyFieldCheck'
import { useAppDispatch } from '@redux/Store'
import { getUserApi } from '@api/auth'
import router from 'next/router'
import { loginEmployer } from '@api/employerAuth'
import FeedbackApi from '@components/common/feedback/FeedbackAPi'

const EmployerSignin = () => {
    const dispatch = useAppDispatch()
    const [state, setState] = useState({
        username: '',
        password: ''
    })
    const [loading, setLoading] = useState(false)
    const [inputError, setInputError] = useState(false)
    const [apiError, setApiError] = useState<any[]>([])
    const [apiSuccess, setApiSuccess] = useState<any[]>([])

    const onSubmit = async (e: SyntheticEvent) => {
        e.preventDefault()
        setInputError(false)
        const { username, password } = state

        if (EmptyFieldCheck({ password }) || !validateEmail(username)) {
            setInputError(true)
            return
        }
        setLoading(true)
        const res = await loginEmployer({ username, password })
        if (res?.error) {
            setApiError(res.data)
            setLoading(false)
        } else {
            localStorage.setItem('token', res?.data.token)
            dispatch(getUserApi())
            setTimeout(() => {
                //router.push(url_userProfile)
            }, 1000);
            setState({
                username: '',
                password: '',
            })
            setApiSuccess(['Employer logged in successfully'])
            setLoading(false)
        }
    }

    return (
        <>
            <EmployerAuthWrapper title="Sign In">
                <BoxWrapper>
                    <div className="text-center mb-12">
                        <div className="text-xl md:text-2xl font-bold">
                            Employer Account Login
                        </div>
                        <div className="text-base subtitle-clr mt-2">
                            Start managing your account
                        </div>
                    </div>
                    <LoginForm
                        state={state}
                        onSubmit={onSubmit}
                        loading={loading}
                        setState={setState}
                        inputError={inputError}
                    />
                    <ORDivider />
                    <SocialsLogin />
                </BoxWrapper>
                <div className="mt-7 text-white text-white-hover">
                    <Button variant="outlined" color="inherit" fullWidth>
                        <span className="text-base md:text-xl">Don't have account? Register now</span></Button>
                </div>

            </EmployerAuthWrapper>
            <FeedbackApi apiError={apiError} apiSuccess={apiSuccess} setApiSuccess={() => setApiSuccess([])} setApiError={() => setApiError([])} />
        </>

    )
}

export default EmployerSignin
