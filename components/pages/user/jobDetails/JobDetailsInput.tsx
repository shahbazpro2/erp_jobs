/* eslint-disable react-hooks/exhaustive-deps */
import { getUserJobDetails } from '@api/jobDetails'
import { useLazyQuery } from '@apollo/client'
import AutoCompleteField from '@components/common/textFields/AutoCompleteField'
import SelectField from '@components/common/textFields/SelectField'
import EmptyFieldCheck from '@components/functions/emptyFieldCheck'
import { AllIndustry } from '@graphql/queries/common/AllIndustry'
import { AllJobtitles } from '@graphql/queries/common/AllJobTitles'
import { LoadingButton } from '@mui/lab'
import { Autocomplete, MenuItem, TextField } from '@mui/material'
import React, { ChangeEvent, SyntheticEvent, useEffect } from 'react'
import { JsonType, JobProps } from './types'


interface Props {
    onSubmit: (e: SyntheticEvent) => Promise<void>,
    setState: (data: JobProps) => void,
    loading: boolean,
    state: JobProps,
    inputError: boolean,
}

const JobDetailsInput = ({ setState, state, loading, inputError, onSubmit }: Props) => {
    const [allJobtitles, { data }] = useLazyQuery(AllJobtitles)
    const [allIndustries, { data: indusData }] = useLazyQuery(AllIndustry)

    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target
        if (e.nativeEvent?.type === 'click') {
            setState({ ...state, [name]: e.target.checked })
        } else
            setState({ ...state, [name]: value })
    }
    useEffect(() => {
        if (indusData?.allIndustries && data?.allJobtitles)
            (async () => {
                const res = await getUserJobDetails();
                if (!res?.error) {
                    if (res?.data.length) {
                        setState({ ...res?.data[0] })
                    }
                }
            })()

    }, [data, indusData])

    useEffect(() => {
        allJobtitles()
        allIndustries()
    }, [])



    return (
        <form noValidate autoComplete="off" onSubmit={onSubmit}>
            <div className="grid gap-5">
                <SelectField
                    inputError={inputError}
                    value={state.job_type}
                    multiple={true}
                    name="job_type"
                    label="Job Type"
                    onChange={onChangeInput}
                >
                    <MenuItem value="Permanent" >Permanent</MenuItem>
                    <MenuItem value="Contract" >Contract</MenuItem>
                    <MenuItem value="Temporary" >Temporary</MenuItem>
                </SelectField>
                <AutoCompleteField
                    inputError={inputError}
                    onChange={(event, newValue) => {
                        setState({ ...state, 'industry': newValue })
                    }}
                    options={indusData ? indusData?.allIndustries : []}
                    label="Industries"
                    value={state.industry}
                />
                <AutoCompleteField
                    inputError={inputError}
                    onChange={(event, newValue) => {
                        setState({ ...state, 'desire_job_title': newValue })
                    }}
                    options={data ? data?.allJobtitles : []}
                    label="Desire Job"
                    value={state.desire_job_title}
                />

                <TextField
                    required
                    error={inputError && !state.availability_date ? true : inputError && new Date(state.availability_date) <= new Date() ? true : false}
                    helperText={inputError && !state.availability_date ? 'Please select date' : inputError && new Date(state.availability_date) <= new Date() ? "Date must greater then today date" : ""}
                    type="date"
                    name="availability_date"
                    label="Date Available"
                    variant="outlined"
                    className="w-full"
                    value={state.availability_date}
                    onChange={onChangeInput}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <TextField
                        required
                        error={inputError && !state.min_salary ? true : inputError && state.min_salary > state.max_salary ? true : false}
                        helperText={inputError && !state.min_salary ? 'Please provide minimum salary' : inputError && Number(state.min_salary) > Number(state.max_salary) ? "Minimum salary must less then maximum salary" : ""}
                        type="number"
                        name="min_salary"
                        label="Minimum Salary"
                        variant="outlined"
                        className="w-full"
                        value={state.min_salary}
                        onChange={onChangeInput}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        required
                        error={inputError && !state.max_salary ? true : inputError && Number(state.min_salary) > Number(state.max_salary) ? true : false}
                        helperText={inputError && !state.max_salary ? 'Please provide maximum salary' : ''}
                        type="number"
                        name="max_salary"
                        label="Maximum Salary"
                        variant="outlined"
                        className="w-full"
                        value={state.max_salary}
                        onChange={onChangeInput}
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />

                </div>

                <LoadingButton loading={loading} type="submit" variant="contained" color="primary" disableElevation >
                    Update
                </LoadingButton>

            </div>
        </form>

    )
}

export default JobDetailsInput
