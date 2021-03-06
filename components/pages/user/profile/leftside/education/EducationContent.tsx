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
import getDropdownKey from '@components/functions/getDropdownKey'
import { degreeOptions } from '@components/functions/dropDowns'

const EducationContent = () => {
    const [createEducation] = useMutation(CreateEducation, { refetchQueries: [{ query: AllEducations }], onError: () => null })
    const [updateEducation] = useMutation(UpdateEducation, { refetchQueries: [{ query: AllEducations }], onError: () => null })
    const context = useContext(EducationModalContext);


    const [state, setState] = useState<EducationProps>(initialEducationState)
    const [editId, setEditId] = useState('')
    const [inputError, setInputError] = useState(false)
    const [apiSuccess, setApiSuccess] = useState<string[]>([])
    const [apiError, setApiError] = useState<string[]>([])
    const [loading, setLoading] = useState(false)



    useEffect(() => {

        if (context.editData?.id) {
            const degreeTypeKey = getDropdownKey(context.editData?.degreeType, degreeOptions)
            setState({ ...context.editData, degreeType: degreeTypeKey })
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
        var d1 = new Date(state.startDate);
        var d2 = new Date(state.endDate);
        if (EmptyFieldCheck({ ...state }) || d1 >= d2) {
            setInputError(true)
            return
        }

        editId ? submitData(state, updateEducation, 'Education updated successfully') : submitData(state, createEducation, 'Education added successfully')

    }

    const submitData = async (state: EducationProps, api: any, message: string) => {
        setLoading(true)
        const { error, data } = await graphqlRes(api({ variables: { ...state, id: Number(editId) } }))
        if (error) {
            setApiError(data)
            setLoading(false)
            return
        }
        setState(initialEducationState)
        context.handleClose()
        setLoading(false)
        setApiSuccess([`${message}`])

    }



    return (
        <>
            <ModalWrapper open={context.open}>
                <BoxWrapper>
                    <ModalHeading title={editId ? "Update Education" : "Add Education"} handleClose={context.handleClose} />
                    <div className="mt-5">
                        <CareerInputs onSubmit={onSubmit} state={state} setState={setState} editId={editId} inputError={inputError} loading={loading} />
                    </div>
                </BoxWrapper>
            </ModalWrapper>
            <FeedbackApi setApiError={setApiError} setApiSuccess={setApiSuccess} apiError={apiError} apiSuccess={apiSuccess} />
        </>
    )
}

export default EducationContent
