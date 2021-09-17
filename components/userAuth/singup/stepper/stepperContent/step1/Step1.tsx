import { Button, TextField } from '@mui/material'
import React, { ChangeEvent, Dispatch, SetStateAction, SyntheticEvent, useState } from 'react'
import { registerUser } from '../../../../../../api/auth'
import AuthWrapper from '../../../../../common/authWrapper/AuthWrapper'
import validateEmail from '../../../../../functions/emailValidation'

interface Props {
    setActiveStep: Dispatch<SetStateAction<number>>
}

const Step1 = ({ setActiveStep }: Props) => {
    const [state, setState] = useState({
        username: '',
        firstname: '',
        lastname: '',
        email: '',
        password1: '',
        password2: ''
    })
    const [inputError, setInputError] = useState(false)
    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target
        setState({ ...state, [name]: value })
    }

    const onSubmit = (e: SyntheticEvent) => {
        e.preventDefault()
        setInputError(false)
        const { username, firstname, lastname, email, password1, password2 } = state
        if (!firstname || !lastname || !username || !validateEmail(email) || !password1 || !password2 || password1 !== password2) {
            setInputError(true)
            return
        }
        const data = {
            username, first_name: firstname, last_name: lastname, email, password: password1, password2
        }
        registerUser(data)
        //setActiveStep(1)
    }

    return (
        <div className="grid grid-cols-6 justify-center mt-8">
            <div className="col-start-3 col-span-2">
                <AuthWrapper>
                    <div className="mt-6">
                        <form noValidate autoComplete="off" onSubmit={onSubmit}>
                            <div className="grid gap-5">
                                <TextField
                                    error={inputError && !state.firstname ? true : false}
                                    helperText={inputError && !state.firstname ? 'Please provide a firstname' : ''}
                                    required
                                    id="outlined-firstname"
                                    name="firstname"
                                    label="Your Firstname"
                                    variant="outlined"
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
                                    id="outlined-lastname"
                                    name="lastname"
                                    label="Your Lastname"
                                    variant="outlined"
                                    className="w-full"
                                    onChange={onChangeInput}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                                <TextField
                                    error={inputError && !state.username ? true : false}
                                    helperText={inputError && !state.username ? 'Please provide a username' : ''}
                                    required
                                    id="outlined-username"
                                    name="username"
                                    label="Your Username"
                                    variant="outlined"
                                    className="w-full"
                                    onChange={onChangeInput}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                                <TextField
                                    error={inputError && !validateEmail(state.email) ? true : false}
                                    helperText={inputError && !validateEmail(state.email) ? 'Email is invalid or empty' : ''}
                                    required
                                    id="outlined-email"
                                    name="email"
                                    label="Your Email"
                                    type="email"
                                    variant="outlined"
                                    className="w-full"
                                    onChange={onChangeInput}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                                <TextField
                                    required
                                    error={inputError && !state.password1 ? true : inputError && state.password1 !== state.password2 ? true : false}
                                    helperText={inputError && !state.password1 ? 'Please provide a password' : inputError && state.password1.length < 8 ? 'Password must have atleast 8 characters long' : inputError && state.password1 !== state.password2 ? 'Password and confirm password not match' : ''}
                                    id="outlined-password"
                                    name="password1"
                                    type="password"
                                    label="Enter Password"
                                    variant="outlined"
                                    className="w-full"
                                    onChange={onChangeInput}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                                <TextField
                                    error={inputError && !state.password2 ? true : inputError && state.password1 !== state.password2 ? true : false}
                                    helperText={inputError && !state.password2 ? 'Please provide a confirm password' : inputError && state.password1 !== state.password2 ? 'Password and confirm password not match' : ''}
                                    required
                                    id="outlined-name"
                                    name="password2"
                                    type="password"
                                    label="Confirm Password"
                                    variant="outlined"
                                    className="w-full"
                                    onChange={onChangeInput}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                                <Button type="submit" variant="contained" color="primary" disableElevation >
                                    Continue
                                </Button>
                            </div>
                        </form>
                        <div className="my-6">
                            <div className="divider">
                                <span>or</span>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-3 social-links">
                            <div className="social-box">
                                google
                            </div>
                            <div className="social-box">
                                google
                            </div>
                            <div className="social-box">
                                google
                            </div>
                        </div>

                    </div>
                </AuthWrapper>
                <div className="text-xl mt-6 text-center text-[#92929D] tracking-[0.11px]">
                    Already have an account?<a href="#" className="primary-clr"> . Sign In</a>
                </div>
            </div>
        </div>
    )
}

export default Step1
