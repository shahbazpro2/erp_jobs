/* eslint-disable react-hooks/exhaustive-deps */
import { getUserJobDetails } from '@api/jobDetails'
import { useLazyQuery } from '@apollo/client'
import SelectField from '@components/common/textFields/SelectField'
import TextFieldSimple from '@components/common/textFields/TextFieldSimple'
import { AllIndustry } from '@graphql/queries/common/AllIndustry'
import { AllJobtitles } from '@graphql/queries/common/AllJobTitles'
import { LoadingButton } from '@mui/lab'
import { MenuItem, TextField } from '@mui/material'
import React, { ChangeEvent, SyntheticEvent, useEffect } from 'react'
import { JobProps } from './types'


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
                    setState(res?.data[0])
                }
                console.log('jobDetails', res)
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
                    {/* <MenuItem disabled value={' '}>
                        Select job type
                    </MenuItem> */}
                    <MenuItem value="Permanent" >Permanent</MenuItem>
                    <MenuItem value="Contract" >Contract</MenuItem>
                </SelectField>
                <SelectField
                    inputError={inputError}
                    value={state.industry}
                    name="industry"
                    label="Industries"
                    onChange={onChangeInput}
                >
                    <MenuItem disabled value={" "}>
                        Select industry
                    </MenuItem>
                    {indusData?.allIndustries?.map((indus: any) => <MenuItem key={indus.id} value={indus.id}>{indus.name}</MenuItem>)}
                </SelectField>
                <SelectField
                    inputError={inputError}
                    value={state.desire_job_title}
                    name="desire_job_title"
                    label="Desire Job"
                    onChange={onChangeInput}
                >
                    <MenuItem disabled value={" "}>
                        Select desire job
                    </MenuItem>
                    {data?.allJobtitles?.map((title: any) => <MenuItem key={title.id} value={title.id}>{title.name}</MenuItem>)}
                </SelectField>
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
                        helperText={inputError && !state.min_salary ? 'Please provide minimum salary' : inputError && state.min_salary > state.max_salary ? "Minimum salary must less then maximum salary" : ""}
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
                        error={inputError && !state.max_salary ? true : inputError && state.min_salary > state.max_salary ? true : false}
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
