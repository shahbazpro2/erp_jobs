import Link from 'next/link'
import React, { SyntheticEvent, useState } from 'react'
import { registerUser } from '@api/auth'
import AuthWrapper from '@components/common/authWrapper/AuthWrapper'
import validateEmail from '@components/functions/emailValidation'
import { useRouter } from 'next/router'
import EmptyFieldCheck from '@components/functions/emptyFieldCheck';
import { url_userProfile } from '@components/functions/pageUrls';
import ORDivider from '@components/common/dividers/ORDivider';
import SocialsLogin from '@components/common/socialsLogin/SocialsLogin';
import RegisterForm from '@components/common/forms/RegisterForm';
import FeedbackApi from '@components/common/feedback/FeedbackAPi'

const initialState = {
    firstname: '',
    lastname: '',
    email: '',
    gender: '',
    password1: '',
    password2: ''
}

const SignUp = () => {
    const router = useRouter()
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

        const res = await registerUser(data)
        if (res?.error) {
            setApiError(res.data)
            setLoading(false)
        } else {
            console.log(res?.data)
            localStorage.setItem('token', res?.data.token)
            setTimeout(() => {
                router.push(url_userProfile)
            }, 1000);
            setState(initialState)
            setApiSuccess(['User registered successfully'])
            setLoading(false)

        }

    }

    return (
        <div className="container mx-auto">
            <div className="flex justiy-center items-center lg:h-[91vh] md:my-16">
                <div className="md:w-[600px] px-5 sm:px-10 md:px-0 mx-auto justify-center w-full">
                    <AuthWrapper>
                        <div className="mt-6">
                            <RegisterForm
                                state={state}
                                setState={setState}
                                loading={loading}
                                inputError={inputError}
                                onSubmit={onSubmit}
                            />

                            <ORDivider />

                            <SocialsLogin />

                        </div>
                    </AuthWrapper>
                    <div className="text-xl mt-6 text-center text-[#92929D] tracking-[0.11px]">
                        Already have an account?<Link href="/login/user"><a href="#" className="primary-clr"> . Sign In</a></Link>
                    </div>
                </div>
            </div>
            <FeedbackApi apiSuccess={apiSuccess} apiError={apiError} setApiError={() => setApiError([])} setApiSuccess={() => setApiSuccess([])} />
        </div >
    )
}

export default SignUp
