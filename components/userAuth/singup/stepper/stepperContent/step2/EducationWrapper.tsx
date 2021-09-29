/* eslint-disable react-hooks/exhaustive-deps */
import React, { Dispatch, SetStateAction, useEffect } from 'react'
import { Divider } from '@mui/material';
import AddItemsWrapper from '@components/common/addItemsWrapper/AddItemsWrapper';
import { useLazyQuery } from '@apollo/client';
import objectIsEmpty from '@components/functions/objectIsEmpty';
import { AllEducations } from '@graphql/queries/user/education/AllEducations';
import Education from '@components/common/education/Education';
interface Props {
    setActive: Dispatch<SetStateAction<string>>
}


const EducationWrapper = ({ setActive }: Props) => {
    const [allEducations, { data }] = useLazyQuery(AllEducations, { fetchPolicy: 'cache-first' })

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
                <AddItemsWrapper title="Education" subtitle="Add your education, you can add multiple educations" onBack={onBack} onContinue={onContinue} disabled={objectIsEmpty(data?.allCareers)} skip={false}>

                    <Education data={data?.allCareers} />

                    <div className="my-7">
                        <Divider />
                    </div>
                </AddItemsWrapper>
            </div>
        </div>
    )
}

export default EducationWrapper
