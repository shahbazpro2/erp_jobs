import React, { ChangeEvent, ReactNode } from 'react'
import EmptyFieldCheck from '@components/functions/emptyFieldCheck'
import { TextField } from '@mui/material'

interface Props {
    inputError: boolean,
    value: string,
    name: string,
    label: string,
    children: ReactNode,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const SelectField = ({ inputError, value, name, label, onChange, children }: Props) => {
    return (
        <TextField
            required
            error={inputError && EmptyFieldCheck({ value }) ? true : false}
            helperText={inputError && EmptyFieldCheck({ value }) ? `Please select a ${label.toLowerCase()}` : ''}
            select
            name={name}
            label={label}
            variant="outlined"
            className="w-full h-full"
            value={value}
            onChange={onChange}
            InputLabelProps={{
                shrink: true,
            }}
        >
            {children}
        </TextField>
    )
}

export default SelectField
