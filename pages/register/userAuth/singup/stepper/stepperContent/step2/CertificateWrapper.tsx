/* eslint-disable react-hooks/exhaustive-deps */
import React, { Dispatch, SetStateAction, useContext, useEffect, useState } from 'react'
import { Divider } from '@mui/material';
import AddItemsWrapper from '@components/common/addItemsWrapper/AddItemsWrapper';
import { useLazyQuery } from '@apollo/client';
import objectIsEmpty from '@components/functions/objectIsEmpty';
import { AllCareers } from '@graphql/queries/user/career/AllCareers';
import FeedbackApi from '@components/common/feedback/FeedbackAPi';
import Career from '@components/common/career/Career';
import { DropdownContext } from '@context/DropdownContext';
import { StepperContext } from '../../Stepper';
interface Props {
    setActive: Dispatch<SetStateAction<string>>,
}


const CertificateWrapper = ({ setActive }: Props) => {
    const context = useContext(StepperContext)
    const [apiError, setApiError] = useState<string[]>([])
    const [allCareers, { data }] = useLazyQuery(AllCareers, { fetchPolicy: 'cache-first' })

    const onBack = () => {
        setActive('skills')
    }
    const onContinue = () => {
        context.handleActiveStep(3)
    }

    const onSkip = () => {
        context.handleActiveStep(3)
    }

    useEffect(() => {
        console.log('call')
        allCareers()
    }, [])



    return (
        <div className="grid grid-cols-7 justify-center">
            <div className="col-start-3 col-span-3">
                <AddItemsWrapper title="Certificates" subtitle="Add your certificates, you can add multiple certificates" onBack={onBack} onContinue={onContinue} disabled={objectIsEmpty(data?.allCareers)} skip={true} onSkip={onSkip}>

                    {/*  <CertificateWrapper data={data?.allCareers} /> */}

                    <div className="my-7">
                        <Divider />
                    </div>
                </AddItemsWrapper>
            </div>
        </div>
    )
}

export default CertificateWrapper
