import React, { ChangeEvent } from 'react'
import { TextField } from '@mui/material'
import validateEmail from '@components/functions/emailValidation'

interface Props {
    inputError: boolean,
    value: string,
    name: string,
    label: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const EmailField = ({ inputError, value, name, label, onChange }: Props) => {
    return (
        <TextField
            required
            error={inputError && !validateEmail(value) ? true : false}
            helperText={inputError && !validateEmail(value) ? 'Email is invalid or empty' : ''}
            type="email"
            name={name}
            label={label}
            variant="outlined"
            className="w-full h-full"
            value={value}
            onChange={onChange}
            InputLabelProps={{
                shrink: true,
            }}
        />
    )
}

export default EmailField
