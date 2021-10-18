import { LoadingButton } from '@mui/lab'
import React, { ChangeEvent, SyntheticEvent } from 'react'
import EmailField from '../textFields/EmailField'
import TextFieldSimple from '../textFields/TextFieldSimple'

interface State {
    username: string,
    password: string
}

interface Props {
    inputError: boolean,
    onSubmit: (e: SyntheticEvent) => Promise<void>,
    setState: (data: State) => void,
    loading: boolean,
    state: State,
}


const LoginForm = ({ inputError, loading, state, onSubmit, setState }: Props) => {
    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target
        setState({ ...state, [name]: value })
    }
    return (
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
                    Login
                </LoadingButton>
            </div>
        </form>
    )
}

export default LoginForm
