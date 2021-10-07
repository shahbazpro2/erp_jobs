import EmailField from '@components/common/textFields/EmailField'
import TextFieldSimple from '@components/common/textFields/TextFieldSimple'
import { Button } from '@mui/material'
import React, { ChangeEvent, SyntheticEvent } from 'react'
import { ChangeEmailProps } from './ChangeEmail'


interface Props {
    onSubmit: (e: SyntheticEvent) => Promise<void>,
    setState: (data: ChangeEmailProps) => void,
    state: ChangeEmailProps,
    inputError: boolean,
}

const ChangeEmailInputs = ({ onSubmit, setState, inputError, state }: Props) => {

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
                <TextFieldSimple inputError={inputError} value={state.password} type="password" name="password" label="Password" onChange={onChangeInput} />

                <EmailField inputError={inputError} label="Email" name="email" value={state.email} onChange={onChangeInput} />

                <Button type="submit" variant="contained" color="primary" disableElevation >
                    Update
                </Button>
            </div>

        </form>

    )
}

export default ChangeEmailInputs
