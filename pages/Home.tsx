/* eslint-disable react-hooks/exhaustive-deps */
import { HeaderContext } from '@context/HeaderContext'
import React, { useContext, useEffect } from 'react'
import Category from '@components/pages/home/category/Category'
import TopSection from '@components/pages/home/topSection/TopSection'
import Featured from '@components/pages/home/featured/Featured'
import JobSteps from '@components/pages/home/jobSteps/JobSteps'
import News from '@components/pages/home/news/News'
import Subscription from '@components/pages/home/subscription/Subscription'
import Head from 'next/head'

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
            <Head>
                <title>Home</title>
            </Head>
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
