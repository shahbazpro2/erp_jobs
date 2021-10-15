import { FormHelperText, MenuItem, TextField } from '@mui/material'
import Link from 'next/link'
import LoadingButton from '@mui/lab/LoadingButton';
import React, { ChangeEvent, SyntheticEvent, useState } from 'react'
import { registerUser } from '@api/auth'
import AuthWrapper from '@components/common/authWrapper/AuthWrapper'
import validateEmail from '@components/functions/emailValidation'
import { useRouter } from 'next/router'
import SnakbarAlert from '@components/common/snakbarAlert/SnakbarAlert'
import EmptyFieldCheck from '@components/functions/emptyFieldCheck';
import { url_userProfile } from '@components/functions/pageUrls';
import Image from 'next/image'
import SelectField from '@components/common/textFields/SelectField';

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


    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target
        setState({ ...state, [name]: value })
    }

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
            <div className="flex justiy-center items-center lg:h-[91vh]">
                <div className="md:w-[600px] px-5 sm:px-10 md:px-0 mx-auto justify-center w-full">
                    <AuthWrapper>
                        <div className="mt-6">
                            <form noValidate autoComplete="off" onSubmit={onSubmit}>
                                <div className="grid gap-5">
                                    <TextField
                                        error={inputError && !state.firstname ? true : false}
                                        helperText={inputError && !state.firstname ? 'Please provide a firstname' : ''}
                                        required
                                        name="firstname"
                                        label="First Name"
                                        variant="outlined"
                                        value={state.firstname}
                                        className="w-full"
                                        onChange={onChangeInput}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                    <TextField
                                        error={inputError && !state.lastname ? true : false}
                                        helperText={inputError && !state.lastname ? 'Please provide a lastname' : ''}
                                        required
                                        name="lastname"
                                        label="Last Name"
                                        value={state.lastname}
                                        variant="outlined"
                                        className="w-full"
                                        onChange={onChangeInput}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                    <div>
                                        <div>
                                            <SelectField inputError={inputError} name="gender" label="Gender" value={state.gender} onChange={onChangeInput} >
                                                <MenuItem value={'Male'}>Male</MenuItem>
                                                <MenuItem value={"Female"}>Female</MenuItem>
                                                <MenuItem value={"Other"}>Other</MenuItem>
                                            </SelectField>
                                        </div>
                                        <div className="text-left mt-1 ml-2 opacity-60 text-[11px]">Once selected cannot be change after signup</div>
                                    </div>
                                    <TextField
                                        error={inputError && !validateEmail(state.email) ? true : false}
                                        helperText={inputError && !validateEmail(state.email) ? 'Email is invalid or empty' : ''}
                                        required
                                        name="email"
                                        label="Email"
                                        type="email"
                                        value={state.email}
                                        variant="outlined"
                                        className="w-full"
                                        onChange={onChangeInput}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                    <TextField
                                        required
                                        error={inputError && !state.password1 ? true : inputError && state.password1.length < 8 ? true : inputError && state.password1 !== state.password2 ? true : false}
                                        helperText={inputError && !state.password1 ? 'Please provide a password' : inputError && state.password1.length < 8 ? 'Password must have atleast 8 characters long' : inputError && state.password1 !== state.password2 ? 'Password and confirm password does not match' : ''}
                                        name="password1"
                                        type="password"
                                        label="Password"
                                        value={state.password1}
                                        variant="outlined"
                                        className="w-full"
                                        onChange={onChangeInput}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                    <TextField
                                        error={inputError && !state.password2 ? true : inputError && state.password1.length < 8 ? true : inputError && state.password1 !== state.password2 ? true : false}
                                        helperText={inputError && !state.password2 ? 'Please provide a confirm password' : ''}
                                        required
                                        name="password2"
                                        type="password"
                                        label="Confirm Password"
                                        value={state.password2}
                                        variant="outlined"
                                        className="w-full"
                                        onChange={onChangeInput}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
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

                        </div>
                    </AuthWrapper>
                    <div className="text-xl mt-6 text-center text-[#92929D] tracking-[0.11px]">
                        Already have an account?<Link href="/login/user"><a href="#" className="primary-clr"> . Sign In</a></Link>
                    </div>
                </div>
            </div>
            <SnakbarAlert open={apiError.length ? true : false} handleClose={() => setApiError([])} message={apiError} type="error" />
            <SnakbarAlert open={apiSuccess.length ? true : false} handleClose={() => setApiSuccess([])} message={apiSuccess} type="success" />
        </div >
    )
}

export default SignUp
