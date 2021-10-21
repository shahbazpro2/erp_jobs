import React from 'react'
import Head from 'next/head'
import Dashboard from '@components/pages/dashboard/Dashboard'

const index = () => {
    return (
        <div>
            <Head>
                <title>Dashboard</title>
            </Head>
            <Dashboard />
        </div>
    )
}

export default index
