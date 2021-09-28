import React, { ChangeEvent } from 'react'
import EmptyFieldCheck from '@components/functions/emptyFieldCheck'
import { TextField } from '@mui/material'

interface Props {
    inputError: boolean,
    value: string,
    name: string,
    label: string,
    multiline?: boolean,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const TextFieldSimple = ({ inputError, value, name, label, onChange, multiline = false }: Props) => {
    return (
        <TextField
            required
            error={inputError && EmptyFieldCheck({ value }) ? true : false}
            helperText={inputError && EmptyFieldCheck({ value }) ? `Please provide a ${label.toLowerCase()}` : ''}
            multiline={multiline}
            rows={7}
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

export default TextFieldSimple
