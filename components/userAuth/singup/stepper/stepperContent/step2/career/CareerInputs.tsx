import EmptyFieldCheck from '@components/functions/emptyFieldCheck'
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
                <TextField
                    required
                    error={inputError && EmptyFieldCheck({ job: state.jobTitle }) ? true : false}
                    helperText={inputError && EmptyFieldCheck({ job: state.jobTitle }) ? 'Please select a job title' : ''}
                    name="jobTitle"
                    select
                    label="Job Title"
                    variant="outlined"
                    className="w-full"
                    value={state.jobTitle}
                    onChange={onChangeInput}
                    InputLabelProps={{
                        shrink: true,
                    }}

                >
                    <MenuItem disabled value={" "}>
                        Select job title
                    </MenuItem>
                    {jobContext?.jobTitles?.map((title: any) => <MenuItem key={title.id} value={title.id}>{title.name}</MenuItem>)}

                </TextField>
                <TextField
                    required
                    error={inputError && !state.companyName ? true : false}
                    helperText={inputError && !state.companyName ? 'Please provide a company name' : ''}
                    name="companyName"
                    label="Company Name"
                    variant="outlined"
                    className="w-full"
                    value={state.companyName}
                    onChange={onChangeInput}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    required
                    error={inputError && !state.companyLocation ? true : false}
                    helperText={inputError && !state.companyLocation ? 'Please provide a company location' : ''}
                    name="companyLocation"
                    label="Company Location"
                    variant="outlined"
                    className="w-full"
                    value={state.companyLocation}
                    onChange={onChangeInput}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
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

                <TextField
                    required
                    error={inputError && !state.description ? true : false}
                    helperText={inputError && !state.description ? 'Please provide a description' : ''}
                    multiline
                    rows={7}
                    name="description"
                    label="Description"
                    variant="outlined"
                    className="w-full h-full"
                    value={state.description}
                    onChange={onChangeInput}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <Button type="submit" variant="contained" color="primary" disableElevation >
                    {editId ? 'Update' : 'Save'}
                </Button>
            </div>

        </form>

    )
}

export default CareerInputs
