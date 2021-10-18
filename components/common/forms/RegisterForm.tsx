import validateEmail from '@components/functions/emailValidation'
import { LoadingButton } from '@mui/lab'
import { MenuItem, TextField } from '@mui/material'
import React, { ChangeEvent, SyntheticEvent } from 'react'
import SelectField from '../textFields/SelectField'

export interface RegisterState {
    firstname: string,
    lastname: string,
    email: string,
    gender: string,
    password1: string,
    password2: string
}
interface Props {
    inputError: boolean,
    onSubmit: (e: SyntheticEvent) => Promise<void>,
    setState: (data: RegisterState) => void,
    loading: boolean,
    state: RegisterState,
}

const RegisterForm = ({ inputError, loading, state, onSubmit, setState }: Props) => {
    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target
        setState({ ...state, [name]: value })
    }
    return (
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
                    Sign Up
                </LoadingButton>
            </div>
        </form>
    )
}

export default RegisterForm
