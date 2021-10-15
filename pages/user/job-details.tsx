
import React from 'react'
import Head from 'next/head'
import JobDetails from '@components/pages/user/jobDetails/JobDetails'

const Index = () => {
    return (
        <div>
            <Head>
                <title>Job Details</title>
            </Head>
            <JobDetails />
        </div>
    )
}

export default Index
