import { useMutation } from '@apollo/client'
import React, { SyntheticEvent, useContext, useEffect, useState } from 'react'
import BoxWrapper from '@components/common/boxWrapper/BoxWrapper'
import ModalHeading from '@components/common/modals/ModalHeading'
import ModalWrapper from '@components/common/modals/ModalWrapper'
import EmptyFieldCheck from '@components/functions/emptyFieldCheck'
import { EducationModalContext } from '@context/ModalContext'
import { CreateCareer } from '@graphql/mutations/user/career/CreateCareer'
import { UpdateCareer } from '@graphql/mutations/user/career/UpdateCareer'
import { AllCareers } from '@graphql/queries/user/career/AllCareers'
import FeedbackApi from '@components/common/feedback/FeedbackAPi'
import CareerInputs from './EducationInputs'
import { initialEducationState } from './initialStates'
import { EducationProps } from './types'


const EducationContent = () => {
    const [createCareer] = useMutation(CreateCareer, { refetchQueries: [{ query: AllCareers }], onError: () => null })
    const [updateUserCareer] = useMutation(UpdateCareer, { refetchQueries: [{ query: AllCareers }], onError: () => null })
    const context = useContext(EducationModalContext);


    const [state, setState] = useState<EducationProps>(initialEducationState)
    const [editId, setEditId] = useState('')
    const [inputError, setInputError] = useState(false)
    const [apiSuccess, setApiSuccess] = useState<string[]>([])
    const [apiError, setApiError] = useState<string[]>([])



    useEffect(() => {
        if (context.editData?.id) {
            setState({ ...context.editData })
            setEditId(context.editData.id)
        }

    }, [context.editData])

    useEffect(() => {
        return () => {
            setEditId('')
            setInputError(false)
            setState(initialEducationState)
        }
    }, [context.open])

    const onSubmit = async (e: SyntheticEvent) => {
        e.preventDefault()
        setInputError(false)

        if (EmptyFieldCheck({ state })) {
            setInputError(true)
            return
        }

        editId ? submitCareer(state, updateUserCareer, 'Career updated successfully') : submitCareer(state, createCareer, 'Career added successfully')

    }

    const submitCareer = async (state: EducationProps, api: any, message: string) => {

        try {
            const res = await api({ variables: { ...state, id: Number(editId) } })
            if (res.data) {
                setState(initialEducationState)
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
            <ModalWrapper open={context.open}>
                <div className="w-[40%] absolute-center">
                    <BoxWrapper>
                        <ModalHeading title="Add Career" handleClose={context.handleClose} />
                        <div className="mt-5">
                            <CareerInputs onSubmit={onSubmit} state={state} setState={setState} editId={editId} inputError={inputError} />
                        </div>
                    </BoxWrapper>
                </div>
            </ModalWrapper>
            <FeedbackApi setApiError={setApiError} setApiSuccess={setApiSuccess} apiError={apiError} apiSuccess={apiSuccess} />
        </>
    )
}

export default EducationContent
