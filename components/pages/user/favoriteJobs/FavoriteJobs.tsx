import Container from '@components/common/container/Container'
import ShrinkContainer from '@components/common/container/ShrinkContainer'
import { url_userProfile } from '@components/functions/pageUrls'
import router from 'next/router'
import React from 'react'
import JobCard from '../common/JobCard'
import JobsHeader from '../common/JobsHeader'


const FavoriteJobs = () => {
    return (
        <div className="gray-bg min-h-[100vh]">
            <ShrinkContainer>
                <JobsHeader title="Saved Jobs" onBack={() => router.push(url_userProfile)} />
                <div className="mt-7">
                    <JobCard saved={true} />
                </div>
            </ShrinkContainer>
        </div>
    )
}

export default FavoriteJobs