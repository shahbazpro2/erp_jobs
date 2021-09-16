import { Button, TextField } from '@material-ui/core'
import React, { ChangeEvent, Dispatch, SetStateAction, SyntheticEvent, useState } from 'react'
import AuthWrapper from '../../../../../common/authWrapper/AuthWrapper'
import validateEmail from '../../../../../functions/emailValidation'

interface Props {
    setActiveStep: Dispatch<SetStateAction<number>>
}

const Step1 = ({ setActiveStep }: Props) => {
    const [state, setState] = useState({
        name: '',
        email: '',
        password: ''
    })
    const [inputError, setInputError] = useState(false)
    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target
        setState({ ...state, [name]: value })
    }

    const onSubmit = (e: SyntheticEvent) => {
        e.preventDefault()
        setInputError(false)
        const { name, email, password } = state
        if (!validateEmail(email) || !name || !password) {
            setInputError(true)
            return
        }

        setActiveStep(1)
    }
    return (
        <div className="grid grid-cols-6 justify-center mt-8">
            <div className="col-start-3 col-span-2">
                <AuthWrapper>
                    <div className="mt-6">
                        <form noValidate autoComplete="off" onSubmit={onSubmit}>
                            <div className="grid gap-5">
                                <TextField
                                    error={inputError && !state.name ? true : false}
                                    required
                                    id="outlined-name"
                                    name="name"
                                    label="Your Name"
                                    variant="outlined"
                                    className="w-full"
                                    onChange={onChangeInput}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                                <TextField
                                    error={inputError && !validateEmail(state.email) ? true : false}
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
                                    error={inputError && !state.password ? true : false}
                                    id="outlined-password"
                                    name="password"
                                    type="password"
                                    label="Enter Password"
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
