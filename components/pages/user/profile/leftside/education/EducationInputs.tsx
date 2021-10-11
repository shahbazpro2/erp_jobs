import SelectField from '@components/common/textFields/SelectField'
import TextFieldSimple from '@components/common/textFields/TextFieldSimple'
import { degreeOptions, getDropdown } from '@components/functions/dropDowns'
import { LoadingButton } from '@mui/lab'
import { MenuItem, TextField } from '@mui/material'
import React, { ChangeEvent, SyntheticEvent } from 'react'
import { EducationProps } from './types'


interface Props {
    onSubmit: (e: SyntheticEvent) => Promise<void>,
    setState: (data: EducationProps) => void,
    loading: boolean,
    state: EducationProps,
    inputError: boolean,
    editId: string
}

const EducationInputs = ({ onSubmit, setState, inputError, loading, state, editId }: Props) => {

    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target
        if (e.nativeEvent?.type === 'click') {
            setState({ ...state, [name]: e.target.checked })
        } else
            setState({ ...state, [name]: value })
    }

    const startDateCheck = () => {
        if (!inputError) return { error: false, message: '' }
        const startDate = new Date(state.startDate)
        const endDate = new Date(state.endDate)
        if (startDate >= endDate) {
            return { error: true, message: 'Start Date must be less then End Date' }
        } else return { error: false, message: '' }
    }

    return (
        <form noValidate autoComplete="off" onSubmit={onSubmit}>
            <div className="grid gap-5">
                <SelectField inputError={inputError} name="degreeType" label="Degree Type" value={state.degreeType} onChange={onChangeInput} >
                    <MenuItem disabled value={" "}>
                        Select your education level
                    </MenuItem>
                    {getDropdown(degreeOptions).map((drop, index) => (
                        <MenuItem key={index} value={drop.key}>{drop.value}</MenuItem>
                    ))}

                </SelectField>
                <TextFieldSimple inputError={inputError} value={state.degreeTitle} name="degreeTitle" label="Degree" onChange={onChangeInput} />
                <TextFieldSimple inputError={inputError} value={state.institution} name="institution" label="Institution" onChange={onChangeInput} />
                <div className="grid grid-cols-2 gap-3">
                    <TextField
                        required
                        error={startDateCheck().error}
                        helperText={startDateCheck().message}
                        type="date"
                        name="startDate"
                        label="Start Date"
                        variant="outlined"
                        className="w-full"
                        value={state.startDate}
                        onChange={onChangeInput}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        required
                        error={inputError && new Date(state.startDate) >= new Date(state.endDate) ? true : false}
                        type="date"
                        name="endDate"
                        label="End Date"
                        variant="outlined"
                        className="w-full"
                        value={state.endDate}
                        onChange={onChangeInput}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </div>

                <LoadingButton type="submit" loading={loading} variant="contained" color="primary" disableElevation >
                    {editId ? 'Update' : 'Save'}
                </LoadingButton>
            </div>

        </form>

    )
}

export default EducationInputs
