/* eslint-disable react-hooks/exhaustive-deps */
import { HeaderContext } from '@context/HeaderContext'
import React, { useContext, useEffect } from 'react'
import Category from './category/Category'
import Featured from './featured/Featured'
import JobSteps from './jobSteps/JobSteps'
import News from './news/News'
import Subscription from './subscription/Subscription'
import TopSection from './topSection/TopSection'

const Home = () => {
    const context = useContext(HeaderContext)

    useEffect(() => {
        context.handleHeader('bg-[#473BF017]', 'none')
        return (() => {
            context.handleHeader('bg-white', 'boxShadow')
        })
    }, [])
    return (
        <div>
            <TopSection />
            <Featured />
            <Category />
            <JobSteps />
            <News />
            <Subscription />
        </div>
    )
}

export default Home
