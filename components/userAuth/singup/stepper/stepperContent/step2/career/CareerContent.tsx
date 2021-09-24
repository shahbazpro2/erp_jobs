import { useLazyQuery, useMutation } from '@apollo/client'
import { Button, Checkbox, FormControlLabel, MenuItem, TextField } from '@mui/material'
import React, { ChangeEvent, SyntheticEvent, useContext, useEffect, useState } from 'react'
import { CandidateCareer } from '@graphql/mutations/CandidateCareer'
import BoxWrapper from '@components/common/boxWrapper/BoxWrapper'
import ModalHeading from '@components/common/modals/ModalHeading'
import ModalWrapper from '@components/common/modals/ModalWrapper'
import SnakbarAlert from '@components/common/snakbarAlert/SnakbarAlert'
import EmptyFieldCheck from '@components/functions/emptyFieldCheck'
import objectIsEmpty from '@components/functions/objectIsEmpty'
import { ModalContext } from '@context/ModalContext'
import { DropdownContext } from '@context/DropdownContext'
import { getAllCareers } from '@graphql/queries/AllCareers'


const initialState = {
    jobTitle: ' ',
    companyName: '',
    companyLocation: '',
    fromDate: '',
    toDate: '',
    currentWorkHere: false,
    confidential: false,
    description: ''
}
const CareerContent = () => {
    const [createCareer] = useMutation(CandidateCareer, { refetchQueries: [{ query: getAllCareers }] })
    const context = useContext(ModalContext);
    const jobContext = useContext(DropdownContext)
    const [state, setState] = useState(initialState)

    const [inputError, setInputError] = useState(false)
    const [apiSuccess, setApiSuccess] = useState<string[]>([])

    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target
        if (e.nativeEvent?.type === 'click') {
            setState({ ...state, [name]: e.target.checked })
        } else
            setState({ ...state, [name]: value })
    }

    useEffect(() => {
        return () => {
            setState(initialState)
        }
    }, [context.open])

    const onSubmit = async (e: SyntheticEvent) => {
        e.preventDefault()
        setInputError(false)
        const { jobTitle,
            companyName,
            companyLocation,
            fromDate,
            toDate,
            description,
            currentWorkHere
        } = state
        var d1 = new Date(fromDate);
        var d2 = new Date(toDate);
        if (EmptyFieldCheck({ jobTitle, companyName, companyLocation, fromDate, description }) || d1 >= d2 || (!currentWorkHere && !toDate)) {
            setInputError(true)
            return
        }
        try {
            const stateData = { ...state, jobTitle: Number(jobTitle) }
            const res = await createCareer({ variables: { ...stateData } })
            if (!objectIsEmpty(res)) {
                setState({
                    jobTitle: ' ',
                    companyName: '',
                    companyLocation: '',
                    fromDate: '',
                    toDate: '',
                    currentWorkHere: false,
                    confidential: false,
                    description: ''
                })
                context.handleClose()
                setApiSuccess(['Career added successfully'])

            }
        } catch (err: any) {
            console.log('catcg', err.message)
        }
    }


    return (
        <>
            <ModalWrapper>

                <div className="w-[40%] absolute-center">
                    <BoxWrapper>
                        <ModalHeading title="Add Career" />
                        <div className="mt-5">
                            <form noValidate autoComplete="off" onSubmit={onSubmit}>
                                <div className="grid gap-5">
                                    <TextField
                                        required
                                        error={inputError && EmptyFieldCheck({ job: state.jobTitle }) ? true : false}
                                        helperText={inputError && EmptyFieldCheck({ job: state.jobTitle }) ? 'Please select a job title' : ''}
                                        name="jobTitle"
                                        select
                                        label="Job Title"
                                        variant="outlined"
                                        className="w-full"
                                        value={state.jobTitle}
                                        onChange={onChangeInput}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}

                                    >
                                        <MenuItem disabled value={" "}>
                                            Select job title
                                        </MenuItem>
                                        {jobContext?.jobTitles?.map((title: any) => <MenuItem key={title.id} value={title.id}>{title.name}</MenuItem>)}

                                    </TextField>
                                    <TextField
                                        required
                                        error={inputError && !state.companyName ? true : false}
                                        helperText={inputError && !state.companyName ? 'Please provide a company name' : ''}
                                        name="companyName"
                                        label="Company Name"
                                        variant="outlined"
                                        className="w-full"
                                        value={state.companyName}
                                        onChange={onChangeInput}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                    <TextField
                                        required
                                        error={inputError && !state.companyLocation ? true : false}
                                        helperText={inputError && !state.companyLocation ? 'Please provide a company location' : ''}
                                        name="companyLocation"
                                        label="Company Location"
                                        variant="outlined"
                                        className="w-full"
                                        value={state.companyLocation}
                                        onChange={onChangeInput}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                    <div className="grid grid-cols-2 gap-3">
                                        <TextField
                                            required
                                            error={inputError && !state.fromDate ? true : inputError && new Date(state.fromDate) >= new Date(state.toDate) ? true : false}
                                            helperText={inputError && !state.fromDate ? 'Please select from date' : inputError && new Date(state.fromDate) >= new Date(state.toDate) ? 'From date must be less then to date' : ''}
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
                                            error={inputError && !state.toDate ? true : (inputError && !state.currentWorkHere) && new Date(state.fromDate) >= new Date(state.toDate) ? true : false}
                                            helperText={inputError && !state.toDate ? 'Please select to date' : (inputError && !state.currentWorkHere) && new Date(state.fromDate) >= new Date(state.toDate) ? 'From date must be less then to date' : ''}
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
                                    <div className="grid grid-cols-3 gap-3">
                                        <FormControlLabel
                                            control={<Checkbox onChange={onChangeInput} checked={state.currentWorkHere} name="currentWorkHere" color="primary" />}
                                            label="I Currently work here"
                                        />
                                        <FormControlLabel
                                            control={<Checkbox onChange={onChangeInput} checked={state.confidential} name="confidential" color="primary" />}
                                            label="Confidential"
                                        />
                                    </div>

                                    <TextField
                                        required
                                        error={inputError && !state.description ? true : false}
                                        helperText={inputError && !state.description ? 'Please provide a description' : ''}
                                        multiline
                                        rows={4}
                                        name="description"
                                        label="Description"
                                        variant="outlined"
                                        className="w-full h-full"
                                        value={state.description}
                                        onChange={onChangeInput}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                    <Button type="submit" variant="contained" color="primary" disableElevation >
                                        Save
                                    </Button>
                                </div>

                            </form>
                        </div>
                    </BoxWrapper>
                </div>

            </ModalWrapper>
            <SnakbarAlert open={apiSuccess.length ? true : false} handleClose={() => setApiSuccess([])} message={apiSuccess} type="success" />
        </>
    )
}

export default CareerContent
