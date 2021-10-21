/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react'
import Head from 'next/head'
import Pricing from '@components/pages/pricing/Pricing'
import { HeaderContext } from '@context/HeaderContext'

const Index = () => {
    const context = useContext(HeaderContext)
    useEffect(() => {
        context.handleHeader('bg-white', 'boxShadow', true)
        return (() => {
            context.handleHeader('bg-white', 'boxShadow', false)
        })
    }, [])
    return (
        <div>
            <Head>
                <title>Pricing</title>
            </Head>
            <Pricing />
        </div>
    )
}

export default Index
