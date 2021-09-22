import { Button, Checkbox, FormControlLabel, MenuItem, TextField } from '@mui/material'
import React, { ChangeEvent, Dispatch, SetStateAction, SyntheticEvent, useState } from 'react'
import BoxWrapper from '../../../../../common/boxWrapper/BoxWrapper'
import { useMutation, useQuery } from '@apollo/client'
import { getAllCountries } from '../../../../../../Graphql/Queries'
import EmptyFieldCheck from '../../../../../functions/emptyFieldCheck'
import { CreateCandidate } from '../../../../../../Graphql/Mutations'

interface Props {
    setActive: Dispatch<SetStateAction<string>>
}

const BasicInformation = ({ setActive }: Props) => {
    /*   const { data, error } = useQuery(getAllCountries) */
    const [createCandidate, { error }] = useMutation(CreateCandidate)
    console.log('err', error)
    const [state, setState] = useState({
        jobTitle: '',
        dateOfBirth: '',
        gender: 'MALE',
        nationality: 'PK',
        residenceCountry: 'PK',
        city: '',
        phone: '',
        address: '',
        jobStatus: ' ',
        profileVisibility: ' ',
        yearsOfExperience: '',
        minimumSalary: '',
        currency: 'EURO',
        confidential: false
    })
    const [inputError, setInputError] = useState(false)

    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target
        if (e.nativeEvent?.type === 'click') {
            setState({ ...state, [name]: e.target.checked })
        } else
            setState({ ...state, [name]: value })
    }

    const onSubmit = (e: SyntheticEvent) => {
        e.preventDefault()
        setInputError(false)
        const { jobTitle,
            dateOfBirth,
            gender,
            nationality,
            residenceCountry,
            city,
            phone,
            address,
            jobStatus,
            profileVisibility,
            yearsOfExperience,
            minimumSalary,
            currency,
            confidential } = state
        if (EmptyFieldCheck({ jobTitle, dateOfBirth, address, jobStatus, profileVisibility, minimumSalary })) {
            setInputError(true)
            return
        }
        try {

            createCandidate({ variables: { ...state } })
            console.log(state)
        } catch (err: any) {
            console.log('catcg', err)
        }
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
                                    error={inputError && !state.jobTitle ? true : false}
                                    helperText={inputError && !state.jobTitle ? 'Please provide a job title' : ''}
                                    id="outlined-jobTitle"
                                    name="jobTitle"
                                    label="Job Title"
                                    variant="outlined"
                                    className="w-full"
                                    value={state.jobTitle}
                                    onChange={onChangeInput}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                                <TextField
                                    required
                                    error={inputError && !state.dateOfBirth ? true : false}
                                    helperText={inputError && !state.dateOfBirth ? 'Please select birth date' : ''}
                                    id="outlined-date"
                                    name="dateOfBirth"
                                    label="Birth Date"
                                    variant="outlined"
                                    type="date"
                                    className="w-full"
                                    value={state.dateOfBirth}
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
                                    name="residenceCountry"
                                    select
                                    label="Residence Country"
                                    variant="outlined"
                                    value={state.residenceCountry}
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
                                    error={inputError && EmptyFieldCheck({ job: state.jobStatus }) ? true : false}
                                    helperText={inputError && EmptyFieldCheck({ job: state.jobStatus }) ? 'Please select job status' : ''}
                                    id="outlined-select-jobStatus"
                                    name="jobStatus"
                                    select
                                    label="Job Status"
                                    variant="outlined"
                                    value={state.jobStatus}
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
                                    error={inputError && EmptyFieldCheck({ profile: state.profileVisibility }) ? true : false}
                                    helperText={inputError && EmptyFieldCheck({ profile: state.profileVisibility }) ? 'Please select profile visibility' : ''}
                                    id="outlined-select-profileVisibility"
                                    name="profileVisibility"
                                    select
                                    label="Profile Visibility"
                                    variant="outlined"
                                    value={state.profileVisibility}
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
                                    name="yearsOfExperience"
                                    label="Years Of Experience"
                                    variant="outlined"
                                    className="w-full"
                                    value={state.yearsOfExperience}
                                    onChange={onChangeInput}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                                <div className="grid grid-cols-12 gap-3">
                                    <div className="col-span-7">
                                        <TextField
                                            required
                                            error={inputError && !state.minimumSalary ? true : false}
                                            helperText={inputError && !state.minimumSalary ? 'Please provide a minimum salary' : ''}
                                            type="number"
                                            id="outlined-minimumSalary"
                                            name="minimumSalary"
                                            label="Minimum Salary"
                                            variant="outlined"
                                            className="w-full"
                                            value={state.minimumSalary}
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
