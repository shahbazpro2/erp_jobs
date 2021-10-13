/* eslint-disable react-hooks/exhaustive-deps */
import { useLazyQuery } from '@apollo/client'
import SelectField from '@components/common/textFields/SelectField'
import TextFieldSimple from '@components/common/textFields/TextFieldSimple'
import { AllJobtitles } from '@graphql/queries/common/AllJobTitles'
import { LoadingButton } from '@mui/lab'
import { Checkbox, FormControlLabel, MenuItem, TextField } from '@mui/material'
import React, { ChangeEvent, SyntheticEvent, useEffect } from 'react'
import { CareerProps } from './types'


interface Props {
    onSubmit: (e: SyntheticEvent) => Promise<void>,
    setState: (data: CareerProps) => void,
    loading: boolean,
    state: CareerProps,
    inputError: boolean,
    editId: string
}

const CareerInputs = ({ onSubmit, setState, inputError, loading, state, editId }: Props) => {
    const [allJobtitles, { data }] = useLazyQuery(AllJobtitles)

    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target
        if (e.nativeEvent?.type === 'click') {
            setState({ ...state, [name]: e.target.checked })
        } else
            setState({ ...state, [name]: value })
    }

    useEffect(() => {
        allJobtitles()
    }, [])



    const fromDateCheck = () => {
        if (!inputError) return { error: false, message: '' }
        const fromDate = new Date(state.fromDate)
        const toDate = new Date(state.toDate)
        if (!state.fromDate) {
            return { error: true, message: 'Please select from date' }
        } else if ((fromDate >= toDate) && !state.currentWorkHere) {
            return { error: true, message: 'From Date must be less then to date' }
        } else if (fromDate > toDate) {
            return { error: true, message: 'From Date is greater then today date' }
        } else return { error: false, message: '' }
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
                    {data?.allJobtitles?.map((title: any) => <MenuItem key={title.id} value={title.id}>{title.name}</MenuItem>)}
                </SelectField>
                <TextFieldSimple inputError={inputError} value={state.companyName} name="companyName" label="Company Name" onChange={onChangeInput} />
                <TextFieldSimple inputError={inputError} value={state.companyLocation} name="companyLocation" label="Company Location" onChange={onChangeInput} />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <TextField
                        required
                        error={fromDateCheck().error}
                        helperText={fromDateCheck().message}
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
                <div className="grid grid-cols-2 2xl:grid-cols-3 gap-3">
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

                <LoadingButton loading={loading} type="submit" variant="contained" color="primary" disableElevation >
                    {editId ? 'Update' : 'Save'}
                </LoadingButton>
            </div>

        </form>

    )
}

export default CareerInputs
