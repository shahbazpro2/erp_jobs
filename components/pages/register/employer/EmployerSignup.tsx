/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { SyntheticEvent, useState } from 'react'
import BoxWrapper from '@components/common/boxWrapper/BoxWrapper'
import ORDivider from '@components/common/dividers/ORDivider'
import SocialsLogin from '@components/common/socialsLogin/SocialsLogin'
import { Button } from '@mui/material'
import EmployerAuthWrapper from '@components/pages/auth/EmployerAuthWrapper'
import RegisterForm from '@components/common/forms/RegisterForm'
import FeedbackApi from '@components/common/feedback/FeedbackAPi'
import EmptyFieldCheck from '@components/functions/emptyFieldCheck'
import validateEmail from '@components/functions/emailValidation'
import { registerEmployer } from '@api/employerAuth'
import { url_dashboard, url_loginEmp } from '@components/functions/pageUrls'
import router from 'next/router'


const initialState = {
    firstname: '',
    lastname: '',
    email: '',
    gender: '',
    password1: '',
    password2: ''
}

const EmployerSignup = () => {
    const [state, setState] = useState(initialState)
    const [loading, setLoading] = useState(false)
    const [inputError, setInputError] = useState(false)
    const [apiError, setApiError] = useState<any[]>([])
    const [apiSuccess, setApiSuccess] = useState<any[]>([])

    const onSubmit = async (e: SyntheticEvent) => {
        e.preventDefault()
        setInputError(false)
        const { firstname, lastname, email, password1, password2, gender } = state

        if (EmptyFieldCheck({ firstname, lastname, email, password1, password2, gender }) || !validateEmail(email) || password1 !== password2 || password1.length < 8) {
            setInputError(true)
            return
        }
        setLoading(true)
        const data = {
            first_name: firstname, last_name: lastname, email, password: password1, password2, gender
        }

        const res = await registerEmployer(data)
        if (res?.error) {
            setApiError(res.data)
            setLoading(false)
        } else {
            console.log(res?.data)
            localStorage.setItem('token', res?.data.token)
            setTimeout(() => {
                router.push(url_dashboard)
            }, 1000);
            setState(initialState)
            setApiSuccess(['Employer registered successfully'])
            setLoading(false)

        }

    }


    return (
        <>
            <EmployerAuthWrapper title="Sign Up">
                <BoxWrapper>
                    <div className="text-center mb-12">
                        <div className="text-xl md:text-2xl font-bold">
                            Employer Account Register
                        </div>
                        <div className="text-base subtitle-clr mt-2">
                            Start managing your account
                        </div>
                    </div>
                    <RegisterForm
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
                    <Button onClick={() => router.push(url_loginEmp)} variant="outlined" color="inherit" fullWidth>
                        <span className="text-base md:text-xl">Already have an account ? Sign In</span></Button>
                </div>
            </EmployerAuthWrapper>
            <FeedbackApi apiSuccess={apiSuccess} apiError={apiError} setApiError={() => setApiError([])} setApiSuccess={() => setApiSuccess([])} />
        </>


    )
}

export default EmployerSignup
