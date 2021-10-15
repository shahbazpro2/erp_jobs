/* eslint-disable react-hooks/exhaustive-deps */
import { useLazyQuery } from '@apollo/client'
import SelectField from '@components/common/textFields/SelectField'
import TextFieldSimple from '@components/common/textFields/TextFieldSimple'
import { getDropdown, jobStatusOptions, profileVisibilityOptions } from '@components/functions/dropDowns'
import { AllJobtitles } from '@graphql/queries/common/AllJobTitles'
import { LoadingButton } from '@mui/lab'
import { Button, Checkbox, FormControlLabel, MenuItem } from '@mui/material'
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


    return (
        <form noValidate autoComplete="off" onSubmit={onSubmit}>
            <div className="grid gap-5">
                <SelectField
                    inputError={inputError}
                    value={state.job_type}
                    name="jobType"
                    label="Job Type"
                    onChange={onChangeInput}
                >
                    <MenuItem disabled value={" "}>
                        Select job title
                    </MenuItem>
                    {data?.allJobtitles?.map((title: any) => <MenuItem key={title.id} value={title.id}>{title.name}</MenuItem>)}
                </SelectField>
                <SelectField
                    inputError={inputError}
                    value={state.industy}
                    name="industy"
                    label="Industries"
                    onChange={onChangeInput}
                >
                    <MenuItem disabled value={" "}>
                        Select industry
                    </MenuItem>
                    <MenuItem value={"accounting"}>{"Accounting and financial management."}</MenuItem>
                    <MenuItem value={"crm"}>{"Customer relationship management (CRM)"}</MenuItem>
                    <MenuItem value={"ai"}>{"Business intelligence (BI) and artificial intelligence (AI)"}</MenuItem>
                    <MenuItem value={"hr"}>{"Human resources (HR)"}</MenuItem>
                </SelectField>

                <TextFieldSimple inputError={inputError} type="date" name="dateAvailable" label="Date Available" value={state.availability_date} onChange={onChangeInput} />




                <LoadingButton loading={loading} type="submit" variant="contained" color="primary" disableElevation >
                    Update
                </LoadingButton>

            </div>
        </form>

    )
}

export default JobDetailsInput
