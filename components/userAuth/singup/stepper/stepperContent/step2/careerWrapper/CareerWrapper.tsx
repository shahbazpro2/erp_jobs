/* eslint-disable react-hooks/exhaustive-deps */
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { Divider } from '@mui/material';
import AddItemsWrapper from '@components/common/addItemsWrapper/AddItemsWrapper';
import { useLazyQuery } from '@apollo/client';
import objectIsEmpty from '@components/functions/objectIsEmpty';
import { AllCareers } from '@graphql/queries/user/career/AllCareers';
import FeedbackApi from '@components/common/feedback/FeedbackAPi';
import Career from '@components/common/career/Career';
interface Props {
    setActive: Dispatch<SetStateAction<string>>
}


const CareerWrapper = ({ setActive }: Props) => {
    const [apiError, setApiError] = useState<string[]>([])
    const [allCareers, { data }] = useLazyQuery(AllCareers, { fetchPolicy: 'cache-first' })

    const onBack = () => {
        setActive('basic')
    }
    const onContinue = () => {
        data?.allCareers?.length ?
            setActive('education') :
            setApiError([`You must need to add atleast one career to continue`])

    }

    useEffect(() => {
        console.log('call')
        allCareers()
    }, [])



    return (
        <div className="grid grid-cols-7 justify-center">
            <div className="col-start-3 col-span-3">
                <AddItemsWrapper title="Career Journey" subtitle="Add your career journey, you can add multiple careers." onBack={onBack} onContinue={onContinue} disabled={objectIsEmpty(data?.allCareers)} skip={false}>

                    <Career data={data?.allCareers} />

                    <div className="my-7">
                        <Divider />
                    </div>
                </AddItemsWrapper>
                <FeedbackApi apiError={apiError} setApiError={setApiError} />

            </div>
        </div>
    )
}

export default CareerWrapper
