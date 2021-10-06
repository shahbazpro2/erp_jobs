import React from 'react'
import WithBadgeWrapper from './WithBadgeWrapper'

const JobApplications = () => {
    return (
        <WithBadgeWrapper content="My Job Applications" badgeValue={10} onHandleClick={() => console.log('click')} />
    )
}

export default JobApplications
