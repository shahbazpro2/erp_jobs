import TextFieldSimple from '@components/common/textFields/TextFieldSimple'
import { LoadingButton } from '@mui/lab'
import { Button, TextField } from '@mui/material'
import React, { ChangeEvent, SyntheticEvent } from 'react'
import { ChangePasswordProps } from './ChangePassword'


interface Props {
    onSubmit: (e: SyntheticEvent) => Promise<void>,
    setState: (data: ChangePasswordProps) => void,
    loading: boolean,
    state: ChangePasswordProps,
    inputError: boolean,
}

const changePasswordInputs = ({ onSubmit, setState, loading, inputError, state }: Props) => {

    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target
        if (e.nativeEvent?.type === 'click') {
            setState({ ...state, [name]: e.target.checked })
        } else
            setState({ ...state, [name]: value })
    }



    return (
        <form noValidate autoComplete="off" onSubmit={onSubmit}>
            <div className="grid gap-5">
                <TextFieldSimple inputError={inputError} value={state.old_password} type="password" name="old_password" label="Old Password" onChange={onChangeInput} />
                <TextField
                    required
                    error={inputError && !state.new_password1 ? true : inputError && state.new_password1.length < 8 ? true : inputError && state.new_password1 !== state.new_password2 ? true : false}
                    helperText={inputError && !state.new_password1 ? 'Please provide a new password' : inputError && state.new_password1.length < 8 ? 'Password must have atleast 8 characters long' : inputError && state.new_password1 !== state.new_password2 ? 'Password and confirm new password does not match' : ''}
                    name="new_password1"
                    type="password"
                    label="New Password"
                    variant="outlined"
                    className="w-full"
                    value={state.new_password1}
                    onChange={onChangeInput}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    error={inputError && !state.new_password2 ? true : inputError && state.new_password1.length < 8 ? true : inputError && state.new_password1 !== state.new_password2 ? true : false}
                    helperText={inputError && !state.new_password2 ? 'Please provide a confirm new password' : ''}
                    required
                    name="new_password2"
                    type="password"
                    label="Confirm New Password"
                    variant="outlined"
                    className="w-full"
                    value={state.new_password2}
                    onChange={onChangeInput}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <LoadingButton loading={loading} type="submit" variant="contained" color="primary" disableElevation >
                    Update
                </LoadingButton>
            </div>

        </form>

    )
}

export default changePasswordInputs
