/* eslint-disable react-hooks/exhaustive-deps */
import { useLazyQuery } from '@apollo/client'
import BoxWrapper from '@components/common/boxWrapper/BoxWrapper'
import { AllEducations } from '@graphql/queries/user/education/AllEducations'
import React, { useEffect } from 'react'
import SimpleWrapper from '../common/SimpleWrapper'
import Education from './Education'

const EducationWrapper = () => {
    const [allEducations, { data }] = useLazyQuery(AllEducations, { fetchPolicy: 'cache-first' })



    useEffect(() => {
        console.log('call')
        allEducations()
    }, [])

    return (
        <SimpleWrapper title="Education">
            <Education data={data?.allEducations} />
        </SimpleWrapper>

    )
}

export default EducationWrapper
