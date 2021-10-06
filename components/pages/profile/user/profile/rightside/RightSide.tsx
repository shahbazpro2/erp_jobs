import React from 'react'
import Completion from './completion/Completion'
import FavoriteJobs from './FavoriteJobs'
import JobApplications from './JobApplications'

const RightSide = () => {
    return (
        <div className="space-y-4">
            <Completion />
            <JobApplications />
            <FavoriteJobs />
        </div>
    )
}

export default RightSide
