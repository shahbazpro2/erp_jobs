import AppliedJobs from '@components/pages/user/appliedJobs/AppliedJobs'
import React from 'react'
import Head from 'next/head'

const Index = () => {
    return (
        <div>
            <Head>
                <title>Applied Jobs</title>
            </Head>
            <AppliedJobs />
        </div>
    )
}

export default Index
