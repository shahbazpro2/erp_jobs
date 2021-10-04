import SelectField from '@components/common/textFields/SelectField'
import TextFieldSimple from '@components/common/textFields/TextFieldSimple'
import { DropdownContext } from '@context/DropdownContext'
import { Button, Checkbox, FormControlLabel, MenuItem } from '@mui/material'
import React, { ChangeEvent, SyntheticEvent, useContext } from 'react'
import { BasicInfoProps } from './types'


interface Props {
    onSubmit: (e: SyntheticEvent) => Promise<void>,
    setState: (data: BasicInfoProps) => void,
    state: BasicInfoProps,
    inputError: boolean,
}

const BasicInfoInputs = ({ setState, state, inputError, onSubmit }: Props) => {
    const context = useContext(DropdownContext)
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
                    {context?.jobTitles?.map((title: any) => <MenuItem key={title.id} value={title.id}>{title.name}</MenuItem>)}
                </SelectField>


                <TextFieldSimple required={false} inputError={false} type="date" name="dateOfBirth" label="Date Of Birth" value={state.dateOfBirth} onChange={onChangeInput} />


                <SelectField inputError={inputError} name="gender" label="Gender" value={state.gender} onChange={onChangeInput} >
                    <MenuItem value={'MALE'}>Male</MenuItem>
                    <MenuItem value={"FEMALE"}>Female</MenuItem>
                </SelectField>


                <SelectField required={false} inputError={false} name="nationality" label="Nationality" value={state.nationality} onChange={onChangeInput} >
                    <MenuItem value={'UK'}>United Kingdom</MenuItem>
                    <MenuItem value={'PK'}>Pakistan</MenuItem>
                    <MenuItem value={"US"}>United States</MenuItem>
                </SelectField>


                <SelectField required={false} inputError={false} name="residenceCountry" label="Residence Country" value={state.residenceCountry} onChange={onChangeInput} >
                    <MenuItem value={'UK'}>United Kingdom</MenuItem>
                    <MenuItem value={'PK'}>Pakistan</MenuItem>
                    <MenuItem value={"US"}>United States</MenuItem>
                </SelectField>


                <TextFieldSimple required={false} inputError={false} name="city" label="City" value={state.city} onChange={onChangeInput} />


                <TextFieldSimple inputError={inputError} name="phone" label="Phone" value={state.phone} onChange={onChangeInput} />


                <TextFieldSimple required={false} inputError={false} name="address" label="Address" value={state.address} onChange={onChangeInput} />


                <SelectField required={false} inputError={false} name="jobStatus" label="Job Status" value={state.jobStatus} onChange={onChangeInput} >
                    <MenuItem disabled value={" "}>
                        Select job status
                    </MenuItem>
                    <MenuItem value={'FRESH_AND_LOOKING'}>Looking_for_job</MenuItem>
                    <MenuItem value={"WORKING_BUT_LOOKING_FOR_NEW_OPPORTUNITIES"}>Working_but_looking_for_new_opportunities</MenuItem>
                    <MenuItem value={"NOT_LOOKING_FOR_JOB"}>Not_looking_for_job</MenuItem>
                </SelectField>


                <SelectField required={false} inputError={false} name="profileVisibility" label="Profile Visibility" value={state.profileVisibility} onChange={onChangeInput} >
                    <MenuItem disabled value={" "}>
                        Select profile visibility
                    </MenuItem>
                    <MenuItem value="PUBLIC">Public. Anyone can see my profile</MenuItem>
                    <MenuItem value={'REGISTERED_ONLY'}>Registered only. Employers only can see my profile</MenuItem>
                    <MenuItem value={"HIDDEN"}>Hidden. Only visible to employers I apply to</MenuItem>
                </SelectField>



                <TextFieldSimple required={false} inputError={false} name="yearOfExperience" label="Years Of Experience" value={state.yearOfExperience} onChange={onChangeInput} />



                <div className="grid grid-cols-12 gap-3">
                    <div className="col-span-7">
                        <TextFieldSimple required={false} inputError={false} name="minSalary" label="Minimum Salary" value={state.yearOfExperience} onChange={onChangeInput} />
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

                <Button type="submit" variant="contained" color="primary" disableElevation >
                    Continue
                </Button>

            </div>
        </form>

    )
}

export default BasicInfoInputs
