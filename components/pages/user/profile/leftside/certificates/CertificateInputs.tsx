import TextFieldSimple from '@components/common/textFields/TextFieldSimple'
import { LoadingButton } from '@mui/lab'
import React, { ChangeEvent, SyntheticEvent } from 'react'
import { CertificateProps } from './types'


interface Props {
    onSubmit: (e: SyntheticEvent) => Promise<void>,
    setState: (data: CertificateProps) => void,
    loading: boolean,
    state: CertificateProps,
    inputError: boolean,
    editId: string
}

const CertificateInputs = ({ onSubmit, setState, inputError, loading, state, editId }: Props) => {

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
                <TextFieldSimple inputError={inputError} value={state.title} name="title" label="Title" onChange={onChangeInput} />
                <TextFieldSimple inputError={inputError} value={state.institution} name="institution" label="Institution" onChange={onChangeInput} />
                <TextFieldSimple type="date" inputError={inputError} value={state.end_date} name="end_date" label="End Date" onChange={onChangeInput} />
                <LoadingButton type="submit" loading={loading} variant="contained" color="primary" disableElevation >
                    {editId ? 'Update' : 'Save'}
                </LoadingButton>
            </div>

        </form>

    )
}

export default CertificateInputs
