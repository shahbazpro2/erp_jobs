import { Button, Checkbox, FormControlLabel, MenuItem, TextField } from '@mui/material'
import React, { ChangeEvent, Dispatch, SetStateAction, SyntheticEvent, useState } from 'react'
import BoxWrapper from '../../../../../common/boxWrapper/BoxWrapper'

interface Props {
    setActive: Dispatch<SetStateAction<string>>
}

const BasicInformation = ({ setActive }: Props) => {
    const [state, setState] = useState({
        name: '',
        email: '',
        password: ''
    })
    const [inputError, setInputError] = useState(false)
    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target
        setState({ ...state, [name]: value })
    }

    const onSubmit = (e: SyntheticEvent) => {
        e.preventDefault()
        setInputError(false)
        const { name, email, password } = state
        /*  if (!validateEmail(email) || !name || !password) {
             setInputError(true)
             return
         } */

        setActive('career')
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
                                    id="outlined-name"
                                    name="name"
                                    label="Full Name"
                                    variant="outlined"
                                    className="w-full"
                                    onChange={onChangeInput}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                                <TextField
                                    required
                                    id="outlined-jobTitle"
                                    name="jobTitle"
                                    label="Job Title"
                                    variant="outlined"
                                    className="w-full"
                                    onChange={onChangeInput}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                                <TextField
                                    required
                                    id="outlined-date"
                                    label="Birthday"
                                    variant="outlined"
                                    type="date"
                                    className="w-full"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                                <TextField
                                    id="outlined-select-gender"
                                    select
                                    value="male"
                                    label="Gender"
                                    variant="outlined"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}

                                >
                                    <MenuItem value={'male'}>Male</MenuItem>
                                    <MenuItem value={"female"}>Female</MenuItem>
                                </TextField>
                                <TextField
                                    required
                                    id="outlined-Nationality"
                                    name="nationality"
                                    label="Enter Nationality"
                                    variant="outlined"
                                    className="w-full"
                                    onChange={onChangeInput}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                                <TextField
                                    required
                                    id="outlined-residenceCountry"
                                    name="residenceCountry"
                                    label="Residence Country"
                                    variant="outlined"
                                    className="w-full"
                                    onChange={onChangeInput}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                                <TextField
                                    required
                                    id="outlined-city"
                                    name="city"
                                    label="City"
                                    variant="outlined"
                                    className="w-full"
                                    onChange={onChangeInput}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                                <TextField
                                    required
                                    id="outlined-phone"
                                    name="phone"
                                    label="Phone"
                                    variant="outlined"
                                    className="w-full"
                                    onChange={onChangeInput}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                                <TextField
                                    required
                                    id="outlined-address"
                                    name="address"
                                    label="Address"
                                    variant="outlined"
                                    className="w-full"
                                    onChange={onChangeInput}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                                <TextField
                                    id="outlined-select-jobStatus"
                                    select
                                    label="Job Status"
                                    variant="outlined"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                >
                                    <MenuItem value={'male'}>Unemployed. Looking for a job</MenuItem>
                                    <MenuItem value={"female"}>Female</MenuItem>
                                </TextField>
                                <TextField
                                    id="outlined-select-profileVisibility"
                                    select
                                    label="Profile Visibility"
                                    variant="outlined"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                >
                                    <MenuItem value={'male'}>Unemployed. Looking for a job</MenuItem>
                                    <MenuItem value={"female"}>Female</MenuItem>
                                </TextField>
                                <TextField
                                    required
                                    id="outlined-yearsOfExperience"
                                    name="yearsOfExperience"
                                    label="Years Of Experience"
                                    variant="outlined"
                                    className="w-full"
                                    onChange={onChangeInput}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                                <div className="grid grid-cols-12 gap-3">
                                    <div className="col-span-7">
                                        <TextField
                                            required
                                            id="outlined-minimumSalary"
                                            name="minimumSalary"
                                            label="Minimum Salary"
                                            variant="outlined"
                                            className="w-full"
                                            onChange={onChangeInput}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    </div>
                                    <div className="col-span-2">

                                        <TextField
                                            id="outlined-select-currency"
                                            select
                                            variant="outlined"
                                            defaultValue="euro"
                                            className="w-full"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        >
                                            <MenuItem value={'euro'}>Euro</MenuItem>
                                            <MenuItem value={"pkr"}>Pkr</MenuItem>
                                        </TextField>
                                    </div>

                                    <FormControlLabel
                                        control={<Checkbox name="confidential" color="primary" />}
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
