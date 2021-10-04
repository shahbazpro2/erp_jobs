/* eslint-disable react-hooks/exhaustive-deps */
import { useLazyQuery } from '@apollo/client'
import BoxWrapper from '@components/common/boxWrapper/BoxWrapper'
import { AllEducations } from '@graphql/queries/user/education/AllEducations'
import React, { useEffect } from 'react'
import Education from './Education'

const EducationWrapper = () => {
    const [allEducations, { data }] = useLazyQuery(AllEducations, { fetchPolicy: 'cache-first' })



    useEffect(() => {
        console.log('call')
        allEducations()
    }, [])

    return (
        <BoxWrapper>
            <div className="text-base">
                Education
            </div>
            <Education data={data?.allEducations} />
        </BoxWrapper>
    )
}

export default EducationWrapper
