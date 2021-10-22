import React from 'react'
import Head from 'next/head'
import Dashboard from '@components/pages/dashboard/Dashboard'
import { url_dashboardEditCompanyDetails } from '@components/functions/pageUrls'

const index = () => {
    return (
        <div>
            <Head>
                <title>Dashboard | Edit Company Details</title>
            </Head>
            <Dashboard active={url_dashboardEditCompanyDetails} />
        </div>
    )
}

export default index
