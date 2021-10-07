import TextFieldSimple from '@components/common/textFields/TextFieldSimple'
import { LoadingButton } from '@mui/lab'
import React, { ChangeEvent, SyntheticEvent } from 'react'
import { EducationProps } from './types'


interface Props {
    onSubmit: (e: SyntheticEvent) => Promise<void>,
    setState: (data: EducationProps) => void,
    loading: boolean,
    state: EducationProps,
    inputError: boolean,
    editId: string
}

const EducationInputs = ({ onSubmit, setState, inputError, loading, state, editId }: Props) => {

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
                <TextFieldSimple inputError={inputError} value={state.degreeTitle} name="degreeTitle" label="Degree" onChange={onChangeInput} />
                <TextFieldSimple inputError={inputError} value={state.university} name="university" label="University" onChange={onChangeInput} />
                <TextFieldSimple inputError={inputError} value={state.field} name="field" label="Field" onChange={onChangeInput} />
                <div className="grid grid-cols-2 gap-3">
                    <TextFieldSimple inputError={inputError} type={'number'} value={state.passYear} name="passYear" label="Passing Year" onChange={onChangeInput} />
                    <TextFieldSimple inputError={inputError} type={'number'} value={state.grade} name="grade" label="Grade" onChange={onChangeInput} />
                </div>

                <LoadingButton type="submit" loading={loading} variant="contained" color="primary" disableElevation >
                    {editId ? 'Update' : 'Save'}
                </LoadingButton>
            </div>

        </form>

    )
}

export default EducationInputs
