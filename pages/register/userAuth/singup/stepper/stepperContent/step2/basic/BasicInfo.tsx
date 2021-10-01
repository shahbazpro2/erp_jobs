import { Button, Checkbox, FormControlLabel, MenuItem, TextField } from '@mui/material'
import React, { ChangeEvent, Dispatch, FormEvent, SetStateAction, SyntheticEvent, useContext, useEffect, useState } from 'react'
import BoxWrapper from '@components/common/boxWrapper/BoxWrapper'
import { useLazyQuery, useMutation, useQuery } from '@apollo/client'
import EmptyFieldCheck from '@components/functions/emptyFieldCheck'
import HeadingStyle1 from '@components/common/headerStyles/HeadingStyle1'
import objectIsEmpty from '@components/functions/objectIsEmpty'
import SnakbarAlert from '@components/common/snakbarAlert/SnakbarAlert'
import { LoginCandidate } from '@graphql/queries/LoginCandidate'
import { useAppDispatch, useAppSelector } from '@redux/Store'
import { setGraphqlError } from '@redux/errors'
import { DropdownContext } from '@context/DropdownContext'
import { CreateProfile } from '@graphql/mutations/user/CreateProfile'
import { initialBasicState } from './initialStates'
import BasicInfoInputs from './BasicInfoInputs'

interface Props {
    setActive: Dispatch<SetStateAction<string>>
}
const BasicInformation = ({ setActive }: Props) => {
    const dispatch = useAppDispatch()
    //const [getLoginCandidate] = useLazyQuery(LoginCandidate)
    const [createCandidate, { error }] = useMutation(CreateProfile)

    const [state, setState] = useState(initialBasicState)

    const [inputError, setInputError] = useState(false)
    const [apiSuccess, setApiSuccess] = useState<string[]>([])
    const [open, setOpen] = useState(true)


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
            dateOfBirth,
            gender,
            nationality,
            residenceCountry,
            city,
            phone,
            address,
            jobStatus,
            profileVisibility,
            yearOfExperience,
            minSalary,
            currency,
            confidential } = state
        /*    if (EmptyFieldCheck({ jobTitle, phone, gender })) {
               setInputError(true)
               return
           }
           try {
               const stateData = { ...state, jobTitle: Number(state.jobTitle) }
               const res = await createCandidate({ variables: { jobTitle: Number(state.jobTitle), phone, gender } })
               console.log(res)
               if (!objectIsEmpty(res)) {
                   setApiSuccess(['Profile updated successfully'])
                   setTimeout(() => {
                       setActive('career')
                   }, 500);
               }
           } catch (err: any) {
               console.log('catcg', err?.message)
               setOpen(true)
           } */
        setActive('career')
    }

    return (
        <div className="grid grid-cols-7 justify-center">
            <div className="col-start-3 col-span-3">

                <BoxWrapper >
                    <HeadingStyle1 title="Basic Information" subtitle="Please Complete Your Basic Information in the Form Below" />
                    <div className="mt-8">
                        <BasicInfoInputs state={state} setState={setState} inputError={inputError} onSubmit={onSubmit} />
                    </div>
                </BoxWrapper>
            </div>
            <SnakbarAlert open={apiSuccess.length ? true : false} handleClose={() => setApiSuccess([])} message={apiSuccess} type="success" />

            {error && <SnakbarAlert open={open} handleClose={() => setOpen(false)} message={error.message} type="error" />}
        </div>
    )
}

export default BasicInformation
