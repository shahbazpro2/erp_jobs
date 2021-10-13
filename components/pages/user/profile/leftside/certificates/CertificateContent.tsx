import React, { SyntheticEvent, useContext, useEffect, useState } from 'react'
import BoxWrapper from '@components/common/boxWrapper/BoxWrapper'
import ModalHeading from '@components/common/modals/ModalHeading'
import ModalWrapper from '@components/common/modals/ModalWrapper'
import EmptyFieldCheck from '@components/functions/emptyFieldCheck'
import { CertificateModalContext } from '@context/ModalContext'
import FeedbackApi from '@components/common/feedback/FeedbackAPi'
import CareerInputs from './CertificateInputs'
import { initialCertificateState } from './initialStates'
import { CertificateProps } from './types'
import { addUserCertificate, updateUserCertificate } from '@api/Certificates'
import { RefetchApiContext } from '@context/RefetchApiContext'


const CertificateContent = () => {
    const context = useContext(CertificateModalContext);
    const refetchApiContext = useContext(RefetchApiContext)

    const [state, setState] = useState<CertificateProps>(initialCertificateState)
    const [editId, setEditId] = useState('')
    const [inputError, setInputError] = useState(false)
    const [apiSuccess, setApiSuccess] = useState<string[]>([])
    const [apiError, setApiError] = useState<string[]>([])
    const [loading, setLoading] = useState(false)



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
        setLoading(true)
        const res = editId ? await updateData() : await submitData()
        if (res?.res?.error) {
            setApiError(res?.res?.data)
            setLoading(false)
            return
        }
        setState(initialCertificateState)
        refetchApiContext.setRefetch()
        context.handleClose()
        setLoading(false)
        setApiSuccess(res?.message)
    }

    const submitData = async () => {
        const res = await addUserCertificate(state)
        return { res, message: [`Certificate added successfully`] }
    }

    const updateData = async () => {
        const res = await updateUserCertificate(state, editId)
        return { res, message: [`Certificate updated successfully`] }
    }


    return (
        <>
            <ModalWrapper open={context.open}>
                <BoxWrapper>
                    <ModalHeading title={editId ? "Update Certificates" : "Add Certificates"} handleClose={context.handleClose} />
                    <div className="mt-5">
                        <CareerInputs onSubmit={onSubmit} state={state} setState={setState} editId={editId} inputError={inputError} loading={loading} />
                    </div>
                </BoxWrapper>
            </ModalWrapper>
            <FeedbackApi setApiError={setApiError} setApiSuccess={setApiSuccess} apiError={apiError} apiSuccess={apiSuccess} />
        </>
    )
}

export default CertificateContent
