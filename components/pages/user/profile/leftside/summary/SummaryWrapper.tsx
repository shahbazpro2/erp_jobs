/* eslint-disable react-hooks/exhaustive-deps */
import { useLazyQuery } from '@apollo/client';
import { SummaryModalContext } from '@context/ModalContext';
import { CandidateSummary } from '@graphql/queries/user/summary/CandidateSummary';
import React, { useEffect, useState } from 'react'
import WithEditWrapper from '../common/WithEditWrapper';
import { initialSummaryState } from './initialStates';
import SummaryModal from './SummaryModal';

const SummaryWrapper = () => {
    const [candidateSummary, { data }] = useLazyQuery(CandidateSummary)
    const [editData, setEditData] = useState(initialSummaryState)
    const [open, setOpen] = useState(false)

    const ContextValue = {
        open,
        editData: editData,
        handleClose: () => {
            setOpen(false)
        }
    }

    useEffect(() => {
        candidateSummary()
    }, [])

    const onEditHandle = () => {
        setEditData(data?.currentCandidateSummary[0])
        setOpen(true)

    }

    return (
        <SummaryModalContext.Provider value={ContextValue}>
            <WithEditWrapper title="Summary" onEditHandle={onEditHandle} >
                <div className="text-base subtitle-clr">
                    {data?.currentCandidateSummary[0]?.text}
                </div>
            </WithEditWrapper>
            <SummaryModal />
        </SummaryModalContext.Provider>
    )
}

export default SummaryWrapper
