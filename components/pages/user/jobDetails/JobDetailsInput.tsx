/* eslint-disable react-hooks/exhaustive-deps */
import { useLazyQuery } from '@apollo/client'
import SelectField from '@components/common/textFields/SelectField'
import TextFieldSimple from '@components/common/textFields/TextFieldSimple'
import { AllIndustry } from '@graphql/queries/common/AllIndustry'
import { AllJobtitles } from '@graphql/queries/common/AllJobTitles'
import { LoadingButton } from '@mui/lab'
import { MenuItem } from '@mui/material'
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
        allJobtitles()
        allIndustries()
    }, [])


    return (
        <form noValidate autoComplete="off" onSubmit={onSubmit}>
            <div className="grid gap-5">
                <SelectField
                    inputError={inputError}
                    value={state.jobType}
                    name="jobType"
                    label="Job Type"
                    onChange={onChangeInput}
                >
                    <MenuItem disabled value={" "}>
                        Select job type
                    </MenuItem>
                    <MenuItem value="PERMANENT" >Permanent</MenuItem>
                    <MenuItem value="CONTRACT" >Contract</MenuItem>
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


                <TextFieldSimple inputError={inputError} type="date" name="availabilityDate" label="Available Date" value={state.availabilityDate} onChange={onChangeInput} />




                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <TextFieldSimple inputError={inputError} value={state.maxSalary} name="maxSalary" label="Minimum Salary" onChange={onChangeInput} type="number" />
                    <TextFieldSimple inputError={inputError} value={state.minSalary} name="minSalary" label="Maximum Salary" onChange={onChangeInput} type="number" />
                </div>

                <LoadingButton loading={loading} type="submit" variant="contained" color="primary" disableElevation >
                    Update
                </LoadingButton>

            </div>
        </form>

    )
}

export default JobDetailsInput
