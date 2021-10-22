import RouterCard from '@components/common/routerCard/RouterCard'
import { url_userJobApplications } from '@components/functions/pageUrls'
import router from 'next/router'
import React from 'react'

const JobApplications = () => {
    return (
        <RouterCard image="/assets/images/file.svg" content="My Job Applications" badgeValue={10} onHandleClick={() => router.push(url_userJobApplications)} />
    )
}

export default JobApplications
