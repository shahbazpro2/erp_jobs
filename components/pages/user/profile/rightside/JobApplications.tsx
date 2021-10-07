import { url_userJobApplications } from '@components/functions/pageUrls'
import router from 'next/router'
import React from 'react'
import WithBadgeWrapper from './WithBadgeWrapper'

const JobApplications = () => {
    return (
        <WithBadgeWrapper content="My Job Applications" badgeValue={10} onHandleClick={() => router.push(url_userJobApplications)} />
    )
}

export default JobApplications
