import { useMutation } from '@apollo/client'
import React, { SyntheticEvent, useContext, useEffect, useState } from 'react'
import BoxWrapper from '@components/common/boxWrapper/BoxWrapper'
import ModalHeading from '@components/common/modals/ModalHeading'
import ModalWrapper from '@components/common/modals/ModalWrapper'
import EmptyFieldCheck from '@components/functions/emptyFieldCheck'
import { CertificateModalContext, EducationModalContext } from '@context/ModalContext'
import FeedbackApi from '@components/common/feedback/FeedbackAPi'
import CareerInputs from './CertificateInputs'
import { initialCertificateState } from './initialStates'
import { CertificateProps } from './types'
import { UpdateEducation } from '@graphql/mutations/user/education/UpdateEducation'
import { CreateEducation } from '@graphql/mutations/user/education/CreateEducation'
import { AllEducations } from '@graphql/queries/user/education/AllEducations'
import graphqlRes from '@components/functions/graphqlRes'


const CertificateContent = () => {
    const [createEducation] = useMutation(CreateEducation, { refetchQueries: [{ query: AllEducations }], onError: () => null })
    const [updateEducation] = useMutation(UpdateEducation, { refetchQueries: [{ query: AllEducations }], onError: () => null })
    const context = useContext(CertificateModalContext);


    const [state, setState] = useState<CertificateProps>(initialCertificateState)
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
            setState(initialCertificateState)
        }
    }, [context.open])

    const onSubmit = async (e: SyntheticEvent) => {
        e.preventDefault()
        setInputError(false)

        if (EmptyFieldCheck({ ...state })) {
            setInputError(true)
            return
        }

        editId ? submitData(state, updateEducation, 'Certificate updated successfully') : submitData(state, createEducation, 'Education added successfully')

    }

    const submitData = async (state: CertificateProps, api: any, message: string) => {
        const { error, data } = await graphqlRes(api({ variables: { ...state, id: Number(editId) } }))
        if (error) {
            setApiError(data)
            return
        }
        setState(initialCertificateState)
        context.handleClose()
        setApiSuccess([`${message}`])

    }



    return (
        <>
            <ModalWrapper open={context.open}>
                <div className="w-[40%] absolute-center">
                    <BoxWrapper>
                        <ModalHeading title={editId ? "Update Certificates" : "Add Certificates"} handleClose={context.handleClose} />
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

export default CertificateContent
