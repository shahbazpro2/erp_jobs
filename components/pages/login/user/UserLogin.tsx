import { LoadingButton } from '@mui/lab'
import { TextField } from '@mui/material'
import { useRouter } from 'next/router'
import React, { ChangeEvent, SyntheticEvent, useState } from 'react'
import Link from 'next/link'
import { getUserApi, loginUser } from '@api/auth'
import AuthWrapper from '@components/common/authWrapper/AuthWrapper'
import SnakbarAlert from '@components/common/snakbarAlert/SnakbarAlert'
import EmptyFieldCheck from '@components/functions/emptyFieldCheck'
import { useAppDispatch } from '@redux/Store'
import { url_userProfile } from '@components/functions/pageUrls'
import Image from 'next/image'
import validateEmail from '@components/functions/emailValidation'
import EmailField from '@components/common/textFields/EmailField'
import TextFieldSimple from '@components/common/textFields/TextFieldSimple'

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


    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target
        setState({ ...state, [name]: value })
    }

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
            <div className="flex justiy-center items-center h-[91vh]">
                <div className="grid grid-cols-6 justify-center">
                    <div className="col-start-3 col-span-2">
                        <AuthWrapper>
                            <form noValidate autoComplete="off" onSubmit={onSubmit}>
                                <div className="grid gap-5">
                                    <EmailField
                                        inputError={inputError}
                                        name="username"
                                        label="Email"
                                        onChange={onChangeInput}
                                        value={state.username}
                                    />
                                    <TextFieldSimple
                                        inputError={inputError}
                                        label="Password"
                                        name="password"
                                        value={state.password}
                                        type="password"
                                        onChange={onChangeInput}
                                    />
                                    <LoadingButton type="submit" variant="contained" color="primary" loading={loading} disableElevation >
                                        Continue
                                    </LoadingButton>
                                </div>
                            </form>
                            <div className="my-6">
                                <div className="divider">
                                    <span>or</span>
                                </div>
                            </div>
                            <div className="grid grid-cols-3 gap-3 social-links">
                                <div className="social-box">
                                    <Image src="/assets/images/google.svg" width="18%" height="18%" alt="google" />
                                </div>
                                <div className="social-box">
                                    <Image src="/assets/images/fb_blue.svg" width="18%" height="18%" alt="facebook" />
                                </div>
                                <div className="social-box">
                                    <Image src="/assets/images/twitter_blue.svg" width="18%" height="18%" alt="twitter" />
                                </div>
                            </div>
                        </AuthWrapper>
                        <div className="text-xl mt-6 text-center text-[#92929D] tracking-[0.11px]">
                            Forgot Password?<Link href="/register/user"><a href="#" className="primary-clr"> . Sign up for new user?</a></Link>
                        </div>
                    </div>
                </div>
            </div>
            <SnakbarAlert open={apiError.length ? true : false} handleClose={() => setApiError([])} message={apiError} type="error" />
            <SnakbarAlert open={apiSuccess.length ? true : false} handleClose={() => setApiSuccess([])} message={apiSuccess} type="success" />
        </div>
    )
}

export default UserLogin
