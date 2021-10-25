import React from 'react'
import Head from 'next/head'
import Dashboard from '@components/pages/dashboard/Dashboard'
import { url_dashboardJobs } from '@components/functions/pageUrls'

const index = () => {
    return (
        <div>
            <Head>
                <title>Dashboard | Jobs</title>
            </Head>
            <Dashboard active={url_dashboardJobs} />
        </div>
    )
}

export default index
