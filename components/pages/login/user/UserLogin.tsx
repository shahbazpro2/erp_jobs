import { useRouter } from 'next/router'
import React, { SyntheticEvent, useState } from 'react'
import Link from 'next/link'
import { getUserApi, loginUser } from '@api/auth'
import AuthWrapper from '@components/common/authWrapper/AuthWrapper'
import EmptyFieldCheck from '@components/functions/emptyFieldCheck'
import { useAppDispatch } from '@redux/Store'
import { url_userProfile } from '@components/functions/pageUrls'
import validateEmail from '@components/functions/emailValidation'
import SocialsLogin from '@components/common/socialsLogin/SocialsLogin'
import LoginForm from '@components/common/forms/LoginForm'
import ORDivider from '@components/common/dividers/ORDivider'
import FeedbackApi from '@components/common/feedback/FeedbackAPi'

const UserLogin = () => {
    const dispatch = useAppDispatch()
    const router = useRouter()
    const [state, setState] = useState({
        username: '',
        password: '',
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
        const res = await loginUser({ username, password })
        if (res?.error) {
            setApiError(res.data)
            setLoading(false)
        } else {
            localStorage.setItem('token', res?.data.token)
            dispatch(getUserApi())
            setTimeout(() => {
                router.push(url_userProfile)
            }, 1000);
            setState({
                username: '',
                password: '',
            })
            setApiSuccess(['User logged in successfully'])
            setLoading(false)
        }

    }

    return (
        <div className="bg-[#F2F2F2] ">
            <div className="container mx-auto">
                <div className="flex justiy-center items-center lg:h-[91vh] lg:py-0 py-20">
                    <div className="md:w-[600px] px-10 md:px-0 mx-auto justify-center w-full">
                        <div className="">
                            <AuthWrapper>
                                <LoginForm
                                    state={state}
                                    loading={loading}
                                    setState={setState}
                                    inputError={inputError}
                                    onSubmit={onSubmit}
                                />
                                <ORDivider />
                                <SocialsLogin />
                            </AuthWrapper>
                            <div className="text-xl mt-6 text-center text-[#92929D] tracking-[0.11px]">
                                Forgot Password?<Link href="/register/user"><a href="#" className="primary-clr"> . Sign up for new user?</a></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FeedbackApi apiError={apiError} apiSuccess={apiSuccess} setApiSuccess={() => setApiSuccess([])} setApiError={() => setApiError([])} />
        </div>
    )
}

export default UserLogin
