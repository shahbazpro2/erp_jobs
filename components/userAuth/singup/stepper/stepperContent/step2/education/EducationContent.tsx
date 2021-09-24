import { useLazyQuery, useMutation } from '@apollo/client'
import { Button, Checkbox, FormControlLabel, MenuItem, TextField } from '@mui/material'
import React, { ChangeEvent, SyntheticEvent, useContext, useState } from 'react'
import BoxWrapper from '@components/common/boxWrapper/BoxWrapper'
import ModalHeading from '@components/common/modals/ModalHeading'
import ModalWrapper from '@components/common/modals/ModalWrapper'
import SnakbarAlert from '@components/common/snakbarAlert/SnakbarAlert'
import EmptyFieldCheck from '@components/functions/emptyFieldCheck'
import objectIsEmpty from '@components/functions/objectIsEmpty'
import { ModalContext } from '@context/ModalContext'
import { DropdownContext } from '@context/DropdownContext'
import { CandidateCareer } from '@graphql/mutations/candidate/CandidateCareer'



const EducationContent = () => {
    const [createCareer] = useMutation(CandidateCareer)
    const context = useContext(ModalContext);
    const jobContext = useContext(DropdownContext)
    const [state, setState] = useState({
        degree: ' ',
        university: '',
        field: '',
        graduationYear: '',
        grade: '',
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
        const { degree,
            university,
            field,
            graduationYear,
            grade
        } = state
        if (EmptyFieldCheck({ degree, university, field, graduationYear, grade })) {
            setInputError(true)
            return
        }
        try {
            const res = await createCareer({ variables: { ...state } })
            console.log(res)
            if (!objectIsEmpty(res)) {
                console.log('res', res)
                context.handleClose()
                setApiSuccess(['Education added successfully'])

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
                        <ModalHeading title="Add Education" />
                        <div className="mt-5">
                            <form noValidate autoComplete="off" onSubmit={onSubmit}>
                                <div className="grid gap-5">
                                    <TextField
                                        required
                                        error={inputError && !state.degree ? true : false}
                                        helperText={inputError && !state.degree ? 'Please provide a degree' : ''}
                                        name="degree"
                                        label="Degree"
                                        variant="outlined"
                                        className="w-full"
                                        value={state.degree}
                                        onChange={onChangeInput}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                    <TextField
                                        required
                                        error={inputError && !state.university ? true : false}
                                        helperText={inputError && !state.university ? 'Please provide a university' : ''}
                                        name="university"
                                        label="University/Institute Name"
                                        variant="outlined"
                                        className="w-full"
                                        value={state.university}
                                        onChange={onChangeInput}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                    <TextField
                                        required
                                        error={inputError && !state.field ? true : false}
                                        helperText={inputError && !state.field ? 'Please provide a field' : ''}
                                        name="field"
                                        label="Field"
                                        variant="outlined"
                                        className="w-full"
                                        value={state.field}
                                        onChange={onChangeInput}
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                    />
                                    <div className="grid grid-cols-2 gap-3">
                                        <TextField
                                            required
                                            error={inputError && !state.graduationYear ? true : false}
                                            helperText={inputError && !state.graduationYear ? 'Please provide a graduation year' : ''}
                                            name="graduationYear"
                                            label="Graduation Year"
                                            variant="outlined"
                                            className="w-full"
                                            value={state.graduationYear}
                                            onChange={onChangeInput}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                        <TextField
                                            required
                                            error={inputError && !state.grade ? true : false}
                                            helperText={inputError && !state.grade ? 'Please provide a grade' : ''}
                                            name="grade"
                                            label="Grade"
                                            variant="outlined"
                                            className="w-full"
                                            value={state.grade}
                                            onChange={onChangeInput}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    </div>

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

export default EducationContent
