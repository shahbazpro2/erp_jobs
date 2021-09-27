import { useMutation } from '@apollo/client'
import { Button, Checkbox, FormControlLabel, MenuItem, TextField } from '@mui/material'
import React, { ChangeEvent, SyntheticEvent, useContext, useEffect, useState } from 'react'
import BoxWrapper from '@components/common/boxWrapper/BoxWrapper'
import ModalHeading from '@components/common/modals/ModalHeading'
import ModalWrapper from '@components/common/modals/ModalWrapper'
import SnakbarAlert from '@components/common/snakbarAlert/SnakbarAlert'
import EmptyFieldCheck from '@components/functions/emptyFieldCheck'
import objectIsEmpty from '@components/functions/objectIsEmpty'
import { ModalContext } from '@context/ModalContext'
import { DropdownContext } from '@context/DropdownContext'
import { CareerProps } from './types'
import { initialCareerState } from './initialStates'
import { CreateCareer } from '@graphql/mutations/user/career/CreateCareer'
import { UpdateCareer } from '@graphql/mutations/user/career/UpdateCareer'
import { AllCareers } from '@graphql/queries/user/career/AllCareers'
import moment from 'moment'



const CareerContent = () => {
    const [createCareer] = useMutation(CreateCareer, { refetchQueries: [{ query: AllCareers }], onError: () => null })
    const [updateUserCareer] = useMutation(UpdateCareer, { refetchQueries: [{ query: AllCareers }], onError: () => null })
    const context = useContext(ModalContext);
    const jobContext = useContext(DropdownContext)
    const [state, setState] = useState<CareerProps>(initialCareerState)
    const [editId, setEditId] = useState('')

    const [inputError, setInputError] = useState(false)
    const [apiSuccess, setApiSuccess] = useState<string[]>([])
    const [apiError, setApiError] = useState<string[]>([])

    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target
        if (e.nativeEvent?.type === 'click') {
            setState({ ...state, [name]: e.target.checked })
        } else
            setState({ ...state, [name]: value })
    }

    useEffect(() => {
        console.log(context.editData)
        if (context.editData?.id) {
            const { id, jobTitle, companyLocation, companyName, confidential, description, currentWorkHere, fromDate, toDate } = context.editData
            setState({ companyLocation, companyName, confidential, description, currentWorkHere, fromDate, toDate: toDate || moment(Date.now()).format('YYYY-MM-DD'), jobTitle: jobTitle.id })
            setEditId(id)
        }

    }, [context.editData])

    useEffect(() => {
        return () => {
            setEditId('')
            setInputError(false)
            setState(initialCareerState)
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

        editId ? submitCareer(state, updateUserCareer, 'Career updated successfully') : submitCareer(state, createCareer, 'Career added successfully')

    }

    const submitCareer = async (state: CareerProps, api: any, message: string) => {


        const stateData = { ...state, jobTitle: Number(state.jobTitle) }
        try {
            const res = await api({ variables: { ...stateData, id: Number(editId) } })
            if (res.data) {
                setState(initialCareerState)
                context.handleClose()
                setApiSuccess([`${message}`])

            } else {
                if (res.errors.graphQLErrors.length) {
                    setApiError(res.errors.graphQLErrors.map((err: any) => err.message))
                } else {
                    setApiError(['There is something went wrong!'])
                }
            }
        } catch (err) {
            setApiError(['There is something went wrong!'])
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
                                            error={inputError && !state.toDate && !state.currentWorkHere ? true : (inputError && !state.currentWorkHere) && new Date(state.fromDate) >= new Date(state.toDate) ? true : false}
                                            helperText={inputError && !state.toDate && !state.currentWorkHere ? 'Please select to date' : (inputError && !state.currentWorkHere) && new Date(state.fromDate) >= new Date(state.toDate) ? 'From date must be less then to date' : ''}
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
                                        rows={7}
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
                                        {editId ? 'Update' : 'Save'}
                                    </Button>
                                </div>

                            </form>
                        </div>
                    </BoxWrapper>
                </div>

            </ModalWrapper>
            <SnakbarAlert open={apiError.length ? true : false} handleClose={() => setApiError([])} message={apiError} type="error" />
            <SnakbarAlert open={apiSuccess.length ? true : false} handleClose={() => setApiSuccess([])} message={apiSuccess} type="success" />
        </>
    )
}

export default CareerContent
