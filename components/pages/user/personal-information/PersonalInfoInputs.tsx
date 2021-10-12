/* eslint-disable react-hooks/exhaustive-deps */
import { useLazyQuery } from '@apollo/client'
import SelectField from '@components/common/textFields/SelectField'
import TextFieldSimple from '@components/common/textFields/TextFieldSimple'
import { getDropdown, jobStatusOptions, profileVisibilityOptions } from '@components/functions/dropDowns'
import { AllJobtitles } from '@graphql/queries/common/AllJobTitles'
import { LoadingButton } from '@mui/lab'
import { Button, Checkbox, FormControlLabel, MenuItem } from '@mui/material'
import React, { ChangeEvent, SyntheticEvent, useEffect } from 'react'
import { BasicInfoProps } from './types'


interface Props {
    onSubmit: (e: SyntheticEvent) => Promise<void>,
    setState: (data: BasicInfoProps) => void,
    loading: boolean,
    state: BasicInfoProps,
    inputError: boolean,
}

const PersonalInfoInputs = ({ setState, state, loading, inputError, onSubmit }: Props) => {
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


                <TextFieldSimple inputError={inputError} type="date" name="dateOfBirth" label="Date Of Birth" value={state.dateOfBirth} onChange={onChangeInput} />


                {/* <SelectField inputError={inputError} name="gender" label="Gender" value={state.gender} onChange={onChangeInput} >
                    <MenuItem value={'MALE'}>Male</MenuItem>
                    <MenuItem value={"FEMALE"}>Female</MenuItem>
                </SelectField> */}


                <TextFieldSimple inputError={inputError} name="residenceCountry" label="Country" value={state.residenceCountry} onChange={onChangeInput} />

                <TextFieldSimple inputError={inputError} name="city" label="City" value={state.city} onChange={onChangeInput} />


                <TextFieldSimple inputError={inputError} name="phone" label="Phone" value={state.phone} onChange={onChangeInput} />


                <TextFieldSimple inputError={inputError} name="address" label="Address" value={state.address} onChange={onChangeInput} />


                <SelectField inputError={inputError} name="jobStatus" label="Job Status" value={state.jobStatus} onChange={onChangeInput} >
                    <MenuItem disabled value={" "}>
                        Select job status
                    </MenuItem>
                    {getDropdown(jobStatusOptions).map((drop, index) => (
                        <MenuItem key={index} value={drop.key}>{drop.value}</MenuItem>
                    ))}

                </SelectField>


                <SelectField inputError={inputError} name="profileVisibility" label="Profile Visibility" value={state.profileVisibility} onChange={onChangeInput} >
                    <MenuItem disabled value={" "}>
                        Select profile visibility
                    </MenuItem>
                    {getDropdown(profileVisibilityOptions).map((drop, index) => (
                        <MenuItem key={index} value={drop.key}>{drop.value}</MenuItem>
                    ))}
                </SelectField>



                <TextFieldSimple inputError={inputError} name="yearOfExperience" label="Years Of Experience" value={state.yearOfExperience} onChange={onChangeInput} />
                <div className="grid grid-cols-12 gap-3">
                    <div className="col-span-7">
                        <TextFieldSimple inputError={inputError} name="minSalary" label="Minimum Salary" value={state.minSalary} onChange={onChangeInput} />
                    </div>
                    <div className="col-span-2">
                        <SelectField required={false} inputError={false} name="currency" value={state.currency} onChange={onChangeInput} >
                            <MenuItem value={'EURO'}>Euro</MenuItem>
                            <MenuItem value={'DOLLAR'}>Dollar</MenuItem>
                        </SelectField>

                    </div>
                    <FormControlLabel
                        control={<Checkbox onChange={onChangeInput} checked={state.confidential} name="confidential" color="primary" />}
                        label="Confidential"
                    />
                </div>

                <LoadingButton loading={loading} type="submit" variant="contained" color="primary" disableElevation >
                    Update
                </LoadingButton>

            </div>
        </form>

    )
}

export default PersonalInfoInputs
