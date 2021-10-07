import { useMutation } from '@apollo/client';
import BoxWrapper from '@components/common/boxWrapper/BoxWrapper';
import FeedbackApi from '@components/common/feedback/FeedbackAPi'
import ModalHeading from '@components/common/modals/ModalHeading';
import ModalWrapper from '@components/common/modals/ModalWrapper'
import EmptyFieldCheck from '@components/functions/emptyFieldCheck';
import graphqlRes from '@components/functions/graphqlRes';
import { SummaryModalContext } from '@context/ModalContext';
import { CreateSummary } from '@graphql/mutations/user/summary/CreateSummary';
import { CandidateSummary } from '@graphql/queries/user/summary/CandidateSummary';
import React, { SyntheticEvent, useContext, useEffect, useState } from 'react'
import { initialSummaryState } from './initialStates';
import SummaryInputs from './SummaryInputs';
import { SummaryProps } from './types';

const SummaryModal = () => {
    const context = useContext(SummaryModalContext);
    const [createSummary] = useMutation(CreateSummary, { refetchQueries: [{ query: CandidateSummary }], onError: () => null })

    const [state, setState] = useState<SummaryProps>(initialSummaryState)
    const [inputError, setInputError] = useState(false)
    const [apiSuccess, setApiSuccess] = useState<string[]>([])
    const [apiError, setApiError] = useState<string[]>([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (context.editData) {
            setState({ ...context.editData })
        }

    }, [context.editData])

    useEffect(() => {
        return () => {
            setInputError(false)
            setState(initialSummaryState)
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

        const { error, data } = await graphqlRes(createSummary({ variables: { text: state.text } }))

        if (error) {
            setApiError(data)
            setLoading(false)
            return
        }
        setState(initialSummaryState)
        context.handleClose()
        setLoading(false)
        setApiSuccess([`Summary updated successfully`])

    }


    return (
        <div>
            <ModalWrapper open={context.open}>
                <div className="w-[40%] absolute-center">
                    <BoxWrapper>
                        <ModalHeading title={"Update Summary"} handleClose={context.handleClose} />
                        <div className="mt-5">
                            <SummaryInputs onSubmit={onSubmit} state={state} setState={setState} inputError={inputError} loading={loading} />
                        </div>
                    </BoxWrapper>
                </div>
            </ModalWrapper>
            <FeedbackApi setApiError={setApiError} setApiSuccess={setApiSuccess} apiError={apiError} apiSuccess={apiSuccess} />
        </div>
    )
}

export default SummaryModal
