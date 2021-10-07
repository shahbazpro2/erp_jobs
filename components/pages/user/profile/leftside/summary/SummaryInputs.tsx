import TextFieldSimple from '@components/common/textFields/TextFieldSimple'
import { LoadingButton } from '@mui/lab'
import { Button } from '@mui/material'
import React, { ChangeEvent, SyntheticEvent } from 'react'
import { SummaryProps } from './types'


interface Props {
    onSubmit: (e: SyntheticEvent) => Promise<void>,
    setState: (data: SummaryProps) => void,
    loading: boolean,
    state: SummaryProps,
    inputError: boolean
}

const SummaryInputs = ({ onSubmit, setState, loading, inputError, state }: Props) => {

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
                <TextFieldSimple multiline inputError={inputError} value={state.text} name="text" label="Summary" onChange={onChangeInput} />
                <LoadingButton loading={loading} type="submit" variant="contained" color="primary" disableElevation >
                    Update
                </LoadingButton>
            </div>

        </form>

    )
}

export default SummaryInputs
