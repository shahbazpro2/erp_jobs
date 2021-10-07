import TextFieldSimple from '@components/common/textFields/TextFieldSimple'
import { Button } from '@mui/material'
import React, { ChangeEvent, SyntheticEvent } from 'react'
import { ChangePasswordProps } from './ChangePassword'


interface Props {
    onSubmit: (e: SyntheticEvent) => Promise<void>,
    setState: (data: ChangePasswordProps) => void,
    state: ChangePasswordProps,
    inputError: boolean,
}

const changePasswordInputs = ({ onSubmit, setState, inputError, state }: Props) => {

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
                <TextFieldSimple inputError={inputError} value={state.oldPassword} type="password" name="oldPassword" label="Old Password" onChange={onChangeInput} />
                <TextFieldSimple inputError={inputError} value={state.newPassword} type="password" name="newPassword" label="New Password" onChange={onChangeInput} />

                <Button type="submit" variant="contained" color="primary" disableElevation >
                    Update
                </Button>
            </div>

        </form>

    )
}

export default changePasswordInputs
