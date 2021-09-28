import { useMutation } from '@apollo/client'
import React, { SyntheticEvent, useContext, useEffect, useState } from 'react'
import BoxWrapper from '@components/common/boxWrapper/BoxWrapper'
import ModalHeading from '@components/common/modals/ModalHeading'
import ModalWrapper from '@components/common/modals/ModalWrapper'
import EmptyFieldCheck from '@components/functions/emptyFieldCheck'
import { EducationModalContext } from '@context/ModalContext'
import FeedbackApi from '@components/common/feedback/FeedbackAPi'
import CareerInputs from './EducationInputs'
import { initialEducationState } from './initialStates'
import { EducationProps } from './types'
import { UpdateEducation } from '@graphql/mutations/user/education/UpdateEducation'
import { CreateEducation } from '@graphql/mutations/user/education/CreateEducation'
import { AllEducations } from '@graphql/queries/user/education/AllEducations'
import graphqlRes from '@components/functions/graphqlRes'


const EducationContent = () => {
    const [createEducation] = useMutation(CreateEducation, { refetchQueries: [{ query: AllEducations }], onError: () => null })
    const [updateEducation] = useMutation(UpdateEducation, { refetchQueries: [{ query: AllEducations }], onError: () => null })
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

        if (EmptyFieldCheck({ ...state })) {
            setInputError(true)
            return
        }

        editId ? submitData(state, updateEducation, 'Education updated successfully') : submitData(state, createEducation, 'Education added successfully')

    }

    const submitData = async (state: EducationProps, api: any, message: string) => {
        const { error, data } = await graphqlRes(api({ variables: { ...state, id: Number(editId) } }))
        if (error) {
            setApiError(data)
            return
        }
        setState(initialEducationState)
        context.handleClose()
        setApiSuccess([`${message}`])

    }



    return (
        <>
            <ModalWrapper open={context.open}>
                <div className="w-[40%] absolute-center">
                    <BoxWrapper>
                        <ModalHeading title={editId ? "Update Education" : "Add Education"} handleClose={context.handleClose} />
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
