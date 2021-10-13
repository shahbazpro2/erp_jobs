import React from 'react'
import TitleInfo from '../leftside/TitleInfo'
import Completion from './completion/Completion'
import FavoriteJobs from './FavoriteJobs'
import JobApplications from './JobApplications'
import UploadCv from './UploadCv'

const RightSide = ({ data, user }: any) => {
    return (
        <div className="space-y-4">
            <Completion />
            <div className="block lg:hidden">
                <TitleInfo data={data?.loginCandidate} user={user?.user} />
            </div>
            <JobApplications />
            <FavoriteJobs />
            <UploadCv />
        </div>
    )
}

export default RightSide
