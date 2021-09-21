import { Button, Checkbox, FormControlLabel, MenuItem, TextField } from '@mui/material'
import React, { ChangeEvent, Dispatch, SetStateAction, SyntheticEvent, useState } from 'react'
import BoxWrapper from '../../../../../common/boxWrapper/BoxWrapper'
import { useQuery } from '@apollo/client'
import { getAllCountries } from '../../../../../../Graphql/Queries'
import EmptyFieldCheck from '../../../../../functions/emptyFieldCheck'

interface Props {
    setActive: Dispatch<SetStateAction<string>>
}

const BasicInformation = ({ setActive }: Props) => {
    const { data, error } = useQuery(getAllCountries)
    console.log('graphql', data)
    const [state, setState] = useState({
        job_title: '',
        birth_date: '',
        gender: 'MALE',
        nationality: 'PK',
        residence_country: 'PK',
        city: '',
        phone: '',
        address: '',
        job_status: ' ',
        profile_visibility: ' ',
        years_of_experience: '',
        minimum_salary: '',
        currency: 'EURO',
        confidential: false
    })
    const [inputError, setInputError] = useState(false)

    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target
        if (e.nativeEvent.type === 'click') {
            setState({ ...state, [name]: e.target.checked })
        } else
            setState({ ...state, [name]: value })
    }

    const onSubmit = (e: SyntheticEvent) => {
        e.preventDefault()
        setInputError(false)
        const { job_title,
            birth_date,
            gender,
            nationality,
            residence_country,
            city,
            phone,
            address,
            job_status,
            profile_visibility,
            years_of_experience,
            minimum_salary,
            currency,
            confidential } = state
        if (EmptyFieldCheck({ job_title, birth_date, address, job_status, profile_visibility, minimum_salary })) {
            setInputError(true)
            return
        }
        console.log(state)
        //setActive('career')
    }
    return (
        <div className="grid grid-cols-7 justify-center">
            <div className="col-start-3 col-span-3">
                <BoxWrapper title="Basic Information" subtitle="Please Complete Your Basic Information in the Form Below">
                    <div className="mt-8">
                        <form noValidate autoComplete="off" onSubmit={onSubmit}>
                            <div className="grid gap-5">
                                <TextField
                                    required
                                    error={inputError && !state.job_title ? true : false}
                                    helperText={inputError && !state.job_title ? 'Please provide a job title' : ''}
                                    id="outlined-jobTitle"
                                    name="job_title"
                                    label="Job Title"
                                    variant="outlined"
                                    className="w-full"
                                    value={state.job_title}
                                    onChange={onChangeInput}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                                <TextField
                                    required
                                    error={inputError && !state.birth_date ? true : false}
                                    helperText={inputError && !state.birth_date ? 'Please select birth date' : ''}
                                    id="outlined-date"
                                    name="birth_date"
                                    label="Birth Date"
                                    variant="outlined"
                                    type="date"
                                    className="w-full"
                                    value={state.birth_date}
                                    onChange={onChangeInput}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                                <TextField
                                    id="outlined-select-gender"
                                    name="gender"
                                    select
                                    label="Gender"
                                    variant="outlined"
                                    value={state.gender}
                                    onChange={onChangeInput}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}

                                >
                                    <MenuItem value={'MALE'}>Male</MenuItem>
                                    <MenuItem value={"FEMALE"}>Female</MenuItem>
                                </TextField>
                                <TextField
                                    id="outlined-nationality"
                                    name="nationality"
                                    select
                                    label="Nationality"
                                    variant="outlined"
                                    value={state.nationality}
                                    onChange={onChangeInput}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}

                                >
                                    <MenuItem value={'UK'}>United Kingdom</MenuItem>
                                    <MenuItem value={'PK'}>Pakistan</MenuItem>
                                    <MenuItem value={"US"}>United States</MenuItem>
                                </TextField>
                                <TextField
                                    id="outlined-residenceCountry"
                                    name="residence_country"
                                    select
                                    label="Residence Country"
                                    variant="outlined"
                                    value={state.residence_country}
                                    onChange={onChangeInput}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}

                                >
                                    <MenuItem value={'UK'}>United Kingdom</MenuItem>
                                    <MenuItem value={'PK'}>Pakistan</MenuItem>
                                    <MenuItem value={"US"}>United States</MenuItem>
                                </TextField>
                                <TextField
                                    id="outlined-city"
                                    name="city"
                                    label="City"
                                    variant="outlined"
                                    className="w-full"
                                    value={state.city}
                                    onChange={onChangeInput}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                                <TextField
                                    id="outlined-phone"
                                    name="phone"
                                    label="Phone"
                                    variant="outlined"
                                    className="w-full"
                                    value={state.phone}
                                    onChange={onChangeInput}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                                <TextField
                                    required
                                    error={inputError && !state.address ? true : false}
                                    helperText={inputError && !state.address ? 'Please provide a address' : ''}
                                    id="outlined-address"
                                    name="address"
                                    label="Address"
                                    variant="outlined"
                                    className="w-full"
                                    value={state.address}
                                    onChange={onChangeInput}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                                <TextField
                                    required
                                    error={inputError && EmptyFieldCheck({ job: state.job_status }) ? true : false}
                                    helperText={inputError && EmptyFieldCheck({ job: state.job_status }) ? 'Please select job status' : ''}
                                    id="outlined-select-jobStatus"
                                    name="job_status"
                                    select
                                    label="Job Status"
                                    variant="outlined"
                                    value={state.job_status}
                                    onChange={onChangeInput}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                >
                                    <MenuItem disabled value={" "}>
                                        Select job status
                                    </MenuItem>
                                    <MenuItem value={'FRESH_AND_LOOKING'}>Unemployed. Looking for a job</MenuItem>
                                    <MenuItem value={"WORKING_BUT_LOOKING"}>Working but looking for new opportunities</MenuItem>
                                    <MenuItem value={"NOT_LOOKING"}>Not looking for job</MenuItem>
                                </TextField>
                                <TextField
                                    required
                                    error={inputError && EmptyFieldCheck({ profile: state.profile_visibility }) ? true : false}
                                    helperText={inputError && EmptyFieldCheck({ profile: state.profile_visibility }) ? 'Please select profile visibility' : ''}
                                    id="outlined-select-profileVisibility"
                                    name="profile_visibility"
                                    select
                                    label="Profile Visibility"
                                    variant="outlined"
                                    value={state.profile_visibility}
                                    onChange={onChangeInput}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                >
                                    <MenuItem disabled value={" "}>
                                        Select profile visibility
                                    </MenuItem>
                                    <MenuItem value="PUBLIC">Public. Anyone can see my profile</MenuItem>
                                    <MenuItem value={'REGISTERED_ONLY'}>Registered only. Employers only can see my profile</MenuItem>
                                    <MenuItem value={"HIDDEN"}>Hidden. Only visible to employers I apply to</MenuItem>
                                </TextField>
                                <TextField
                                    id="outlined-yearsOfExperience"
                                    name="years_of_experience"
                                    label="Years Of Experience"
                                    variant="outlined"
                                    className="w-full"
                                    value={state.years_of_experience}
                                    onChange={onChangeInput}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                                <div className="grid grid-cols-12 gap-3">
                                    <div className="col-span-7">
                                        <TextField
                                            required
                                            error={inputError && !state.minimum_salary ? true : false}
                                            helperText={inputError && !state.minimum_salary ? 'Please provide a minimum salary' : ''}
                                            type="number"
                                            id="outlined-minimumSalary"
                                            name="minimum_salary"
                                            label="Minimum Salary"
                                            variant="outlined"
                                            className="w-full"
                                            value={state.minimum_salary}
                                            onChange={onChangeInput}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    </div>
                                    <div className="col-span-2">

                                        <TextField
                                            id="outlined-select-currency"
                                            name="currency"
                                            select
                                            variant="outlined"
                                            defaultValue="EURO"
                                            className="w-full"
                                            value={state.currency}
                                            onChange={onChangeInput}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        >
                                            <MenuItem value={'EURO'}>Euro</MenuItem>
                                            <MenuItem value={"DOLLAR"}>Dollar</MenuItem>
                                        </TextField>
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

                    </div>
                </BoxWrapper>
            </div>
        </div>
    )
}

export default BasicInformation
