import { useMutation } from '@apollo/client'
import React, { SyntheticEvent, useContext, useEffect, useState } from 'react'
import BoxWrapper from '@components/common/boxWrapper/BoxWrapper'
import ModalHeading from '@components/common/modals/ModalHeading'
import ModalWrapper from '@components/common/modals/ModalWrapper'
import EmptyFieldCheck from '@components/functions/emptyFieldCheck'
import { CareerModalContext } from '@context/ModalContext'
import { CareerProps } from './types'
import { initialCareerState } from './initialStates'
import { CreateCareer } from '@graphql/mutations/user/career/CreateCareer'
import { UpdateCareer } from '@graphql/mutations/user/career/UpdateCareer'
import { AllCareers } from '@graphql/queries/user/career/AllCareers'
import moment from 'moment'
import FeedbackApi from '@components/common/feedback/FeedbackAPi'
import CareerInputs from './CareerInputs'


const CareerContent = () => {
    const [createCareer] = useMutation(CreateCareer, { refetchQueries: [{ query: AllCareers }], onError: () => null })
    const [updateUserCareer] = useMutation(UpdateCareer, { refetchQueries: [{ query: AllCareers }], onError: () => null })
    const context = useContext(CareerModalContext);


    const [state, setState] = useState<CareerProps>(initialCareerState)
    const [editId, setEditId] = useState('')
    const [inputError, setInputError] = useState(false)
    const [apiSuccess, setApiSuccess] = useState<string[]>([])
    const [apiError, setApiError] = useState<string[]>([])



    useEffect(() => {
        if (context.editData?.id) {
            setState({ ...context.editData, toDate: context.editData.toDate || moment(Date.now()).format('YYYY-MM-DD'), jobTitle: context.editData.jobTitle.id })
            setEditId(context.editData.id)
        }

    }, [context.editData])

    useEffect(() => {
        return () => {
            setEditId('')
            setInputError(false)
            setState(initialCareerState)
        }
    }, [context.open])

    const onSubmit = async (e: SyntheticEvent) => {
        e.preventDefault()
        setInputError(false)
        const { jobTitle,
            companyName,
            companyLocation,
            fromDate,
            toDate,
            description,
            currentWorkHere
        } = state
        var d1 = new Date(fromDate);
        var d2 = new Date(toDate);
        if (EmptyFieldCheck({ jobTitle, companyName, companyLocation, fromDate, description }) || d1 >= d2 || (!currentWorkHere && !toDate)) {
            setInputError(true)
            return
        }

        editId ? submitCareer(state, updateUserCareer, 'Career updated successfully') : submitCareer(state, createCareer, 'Career added successfully')

    }

    const submitCareer = async (state: CareerProps, api: any, message: string) => {
        const stateData = { ...state, jobTitle: Number(state.jobTitle) }
        try {
            const res = await api({ variables: { ...stateData, id: Number(editId) } })
            if (res.data) {
                setState(initialCareerState)
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

export default CareerContent
