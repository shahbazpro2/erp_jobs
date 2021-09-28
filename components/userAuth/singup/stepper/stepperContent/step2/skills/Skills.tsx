/* eslint-disable react-hooks/exhaustive-deps */
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { Divider } from '@mui/material';
import AddItemsWrapper from '@components/common/addItemsWrapper/AddItemsWrapper';
import { useLazyQuery, useMutation } from '@apollo/client';
import FeedbackApi from '@components/common/feedback/FeedbackAPi';
import { AllEducations } from '@graphql/queries/user/education/AllEducations';
import SkillsContent from './SkillsContent';

interface Props {
    setActive: Dispatch<SetStateAction<string>>
}


const Skills = ({ setActive }: Props) => {
    const [allEducations, { data }] = useLazyQuery(AllEducations, { fetchPolicy: 'cache-and-network' })
    const [apiError, setApiError] = useState<string[]>([])
    const [apiSuccess, setApiSuccess] = useState<string[]>([])



    console.log('data', data)

    const onBack = () => {
        setActive('career')
    }

    const onContinue = () => {
        setActive('skills')
    }

    useEffect(() => {
        allEducations()
    }, [])



    return (
        <div className="grid grid-cols-7 justify-center">
            <div className="col-start-3 col-span-3">
                <AddItemsWrapper title="Skills" subtitle="Add your skills, you can add multiple skills" disabled={true} onBack={onBack} onContinue={onContinue} skip={false}>
                    <div className="mt-7 grid gap-2">

                    </div>
                    <div className="my-7">
                        <Divider />
                    </div>
                </AddItemsWrapper>

                <FeedbackApi apiError={apiError} apiSuccess={apiSuccess} setApiError={setApiError} setApiSuccess={setApiSuccess} />
            </div>
        </div>
    )
}

export default Skills
