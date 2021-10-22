import React from 'react'
import router from 'next/router'
import { url_dashboardJobs } from '@components/functions/pageUrls'
import Spinner from '@components/common/spinner/Spinner'

const index = () => {
    router.push(url_dashboardJobs)
    return (
        <div>
            <Spinner />
        </div>
    )
}

export default index
