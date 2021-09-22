import { useMutation } from '@apollo/client'
import { Button, Checkbox, FormControlLabel, TextField } from '@mui/material'
import React, { ChangeEvent, SyntheticEvent, useContext, useState } from 'react'
import { CandidateCareer } from '../../../../../../../Graphql/mutations/CandidateCareer'
import BoxWrapper from '../../../../../../common/boxWrapper/BoxWrapper'
import ModalHeading from '../../../../../../common/modals/ModalHeading'
import ModalWrapper from '../../../../../../common/modals/ModalWrapper'
import SnakbarAlert from '../../../../../../common/snakbarAlert/SnakbarAlert'
import EmptyFieldCheck from '../../../../../../functions/emptyFieldCheck'
import objectIsEmpty from '../../../../../../functions/objectIsEmpty'
import { ModalContext } from '../../../../../../../context/ModalContext'



const CareerContent = () => {
    const [createCareer, { error }] = useMutation(CandidateCareer)
    const context = useContext(ModalContext);
    const [state, setState] = useState({
        jobTitle: '',
        companyName: '',
        companyLocation: '',
        fromDate: '',
        toDate: '',
        currentWorkHere: false,
        confidential: false,
        description: ''
    })

    const [inputError, setInputError] = useState(false)
    const [apiSuccess, setApiSuccess] = useState<string[]>([])

    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target
        if (e.nativeEvent?.type === 'click') {
            setState({ ...state, [name]: e.target.checked })
        } else
            setState({ ...state, [name]: value })
    }


    const onSubmit = async (e: SyntheticEvent) => {
        e.preventDefault()
        setInputError(false)
        const { jobTitle,
            companyName,
            companyLocation,
            fromDate,
            toDate,
            description,
        } = state
        var d1 = new Date(fromDate);
        var d2 = new Date(toDate);
        if (EmptyFieldCheck({ jobTitle, companyName, companyLocation, fromDate, toDate, description }) || d1 >= d2) {
            setInputError(true)
            return
        }
        try {
            const res = await createCareer({ variables: { ...state } })
            console.log(res)
            if (!objectIsEmpty(res)) {
                console.log('res', res)
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
                                        error={inputError && !state.companyName ? true : false}
                                        helperText={inputError && !state.companyName ? 'Please provide a company name' : ''}
                                        id="outlined-companyName"
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
                                        id="outlined-companyLocation"
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
                                            id="outlined-fromDate"
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
                                            error={inputError && !state.toDate ? true : inputError && new Date(state.fromDate) >= new Date(state.toDate) ? true : false}
                                            helperText={inputError && !state.toDate ? 'Please select to date' : inputError && new Date(state.fromDate) >= new Date(state.toDate) ? 'From date must be less then to date' : ''}
                                            id="outlined-toDate"
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
                                        id="filled-multiline-static"
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
