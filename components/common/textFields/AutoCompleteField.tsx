import React, { SyntheticEvent } from 'react'
import EmptyFieldCheck from '@components/functions/emptyFieldCheck'
import { Autocomplete, TextField } from '@mui/material'
import { JsonType } from '@components/pages/user/jobDetails/types'

interface Props {
    required?: boolean,
    inputError: boolean,
    value: JsonType | null,
    label: string,
    options: JsonType[],
    onChange: (e: SyntheticEvent<Element>, value: JsonType | null) => void
}

const AutoCompleteField = ({ inputError = false, required = true, options, value, label, onChange, }: Props) => {
    return (
        <Autocomplete
            disablePortal
            options={options}
            isOptionEqualToValue={(option, value) => Number(option?.id) === Number(value?.id)}
            renderOption={(props, option: JsonType) => (
                <li {...props}>
                    {option?.name}
                </li>
            )}
            value={value}
            getOptionLabel={(option: JsonType) => option.name}
            onChange={onChange}
            renderInput={(params) => <TextField
                {...params}
                required={required}
                error={inputError && EmptyFieldCheck({ value: value }) ? true : false}
                helperText={inputError && EmptyFieldCheck({ value: value }) ? `Please select ${label?.toLowerCase()}` : ''}
                label={label}
                variant="outlined"
                InputLabelProps={{
                    shrink: true,
                }} />}
        />

    )
}

export default AutoCompleteField
