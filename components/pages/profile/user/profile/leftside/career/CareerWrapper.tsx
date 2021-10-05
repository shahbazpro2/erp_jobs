/* eslint-disable react-hooks/exhaustive-deps */
import { useLazyQuery } from '@apollo/client'
import { AllCareers } from '@graphql/queries/user/career/AllCareers'
import React, { useEffect } from 'react'
import SimpleWrapper from '../common/SimpleWrapper'
import Career from './Career'

const CareerWrapper = () => {
    const [allCareers, { data }] = useLazyQuery(AllCareers, { fetchPolicy: 'cache-first' })



    useEffect(() => {
        allCareers()
    }, [])

    return (
        <SimpleWrapper title="Career Journey">
            <Career data={data?.allCareers} />
        </SimpleWrapper>
    )
}

export default CareerWrapper
