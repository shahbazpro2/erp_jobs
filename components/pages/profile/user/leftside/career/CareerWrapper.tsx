/* eslint-disable react-hooks/exhaustive-deps */
import { useLazyQuery } from '@apollo/client'
import BoxWrapper from '@components/common/boxWrapper/BoxWrapper'
import { AllCareers } from '@graphql/queries/user/career/AllCareers'
import React, { useEffect } from 'react'
import Career from './Career'

const CareerWrapper = () => {
    const [allCareers, { data }] = useLazyQuery(AllCareers, { fetchPolicy: 'cache-first' })



    useEffect(() => {
        console.log('call')
        allCareers()
    }, [])

    return (
        <BoxWrapper>
            <div className="text-base">
                Career Journey
            </div>
            <Career data={data?.allCareers} />
        </BoxWrapper>
    )
}

export default CareerWrapper
