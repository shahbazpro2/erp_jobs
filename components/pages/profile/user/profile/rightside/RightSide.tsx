import React from 'react'
import Completion from './completion/Completion'
import FavoriteJobs from './FavoriteJobs'
import JobApplications from './JobApplications'
import UploadCv from './UploadCv'

const RightSide = () => {
    return (
        <div className="space-y-4">
            <Completion />
            <JobApplications />
            <FavoriteJobs />
            <UploadCv />
        </div>
    )
}

export default RightSide
