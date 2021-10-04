import SelectField from '@components/common/textFields/SelectField'
import TextFieldSimple from '@components/common/textFields/TextFieldSimple'
import { DropdownContext } from '@context/DropdownContext'
import { Button, Checkbox, FormControlLabel, MenuItem, TextField } from '@mui/material'
import React, { ChangeEvent, SyntheticEvent, useContext } from 'react'
import { CareerProps } from './types'


interface Props {
    onSubmit: (e: SyntheticEvent) => Promise<void>,
    setState: (data: CareerProps) => void,
    state: CareerProps,
    inputError: boolean,
    editId: string
}

const CareerInputs = ({ onSubmit, setState, inputError, state, editId }: Props) => {
    const jobContext = useContext(DropdownContext)

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
                <SelectField
                    inputError={inputError}
                    value={state.jobTitle}
                    name="jobTitle"
                    label="Job Title"
                    onChange={onChangeInput}
                >
                    <MenuItem disabled value={" "}>
                        Select job title
                    </MenuItem>
                    {jobContext?.jobTitles?.map((title: any) => <MenuItem key={title.id} value={title.id}>{title.name}</MenuItem>)}
                </SelectField>
                <TextFieldSimple inputError={inputError} value={state.companyName} name="companyName" label="Company Name" onChange={onChangeInput} />
                <TextFieldSimple inputError={inputError} value={state.companyLocation} name="companyLocation" label="Company Location" onChange={onChangeInput} />

                <div className="grid grid-cols-2 gap-3">
                    <TextField
                        required
                        error={inputError && !state.fromDate ? true : inputError && new Date(state.fromDate) >= new Date(state.toDate) ? true : false}
                        helperText={inputError && !state.fromDate ? 'Please select from date' : inputError && new Date(state.fromDate) >= new Date(state.toDate) ? 'From date must be less then to date' : ''}
                        type="date"
                        name="fromDate"
                        label="From Date"
                        variant="outlined"
                        className="w-full"
                        value={state.fromDate}
                        onChange={onChangeInput}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        required
                        error={(inputError && !state.toDate && !state.currentWorkHere) ? true : (inputError && !state.currentWorkHere) && new Date(state.fromDate) >= new Date(state.toDate) ? true : false}
                        helperText={(inputError && !state.toDate && !state.currentWorkHere) ? 'Please select to date' : (inputError && !state.currentWorkHere) && new Date(state.fromDate) >= new Date(state.toDate) ? 'From date must be less then to date' : ''}
                        disabled={state.currentWorkHere}
                        type="date"
                        name="toDate"
                        label="To Date"
                        variant="outlined"
                        className="w-full"
                        value={state.toDate}
                        onChange={onChangeInput}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                </div>
                <div className="grid grid-cols-3 gap-3">
                    <FormControlLabel
                        control={<Checkbox onChange={onChangeInput} checked={state.currentWorkHere} name="currentWorkHere" color="primary" />}
                        label="I Currently work here"
                    />
                    <FormControlLabel
                        control={<Checkbox onChange={onChangeInput} checked={state.confidential} name="confidential" color="primary" />}
                        label="Confidential"
                    />
                </div>
                <TextFieldSimple multiline={true} inputError={inputError} value={state.description} name="description" label="Description" onChange={onChangeInput} />

                <Button type="submit" variant="contained" color="primary" disableElevation >
                    {editId ? 'Update' : 'Save'}
                </Button>
            </div>

        </form>

    )
}

export default CareerInputs
