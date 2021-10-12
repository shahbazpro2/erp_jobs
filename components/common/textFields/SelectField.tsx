import React, { ChangeEvent, InputHTMLAttributes, ReactNode } from 'react'
import EmptyFieldCheck from '@components/functions/emptyFieldCheck'
import { TextField } from '@mui/material'

interface Props {
    required?: boolean,
    inputError?: boolean,
    value: string,
    name: string,
    label?: string,
    children: ReactNode,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const SelectField = ({ required = true, inputError = false, value, name, label, onChange, children }: Props) => {
    return (
        <TextField
            required={required}
            error={inputError && EmptyFieldCheck({ value }) ? true : false}
            helperText={inputError && EmptyFieldCheck({ value }) ? `Please select a ${label?.toLowerCase()}` : ''}
            select
            name={name}
            label={label ? label : ''}
            variant="outlined"
            className="w-full h-full text-left"
            value={value}
            onChange={onChange}
            SelectProps={{
                MenuProps: {
                    disableScrollLock: true
                }
            }}
            InputLabelProps={{
                shrink: true,
            }}
        >
            {children}
        </TextField>
    )
}

export default SelectField
