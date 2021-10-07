import Container from '@components/common/container/Container'
import { url_userProfile } from '@components/functions/pageUrls'
import router from 'next/router'
import React from 'react'
import JobCard from '../common/JobCard'
import JobsHeader from '../common/JobsHeader'


const FavoriteJobs = () => {
    return (
        <div className="gray-bg min-h-[100vh]">
            <Container>
                <div className="py-10">
                    <div className="grid grid-cols-5">
                        <div className="col-start-2 col-span-3">
                            <JobsHeader title="Saved Jobs" onBack={() => router.push(url_userProfile)} />
                            <div className="mt-7">
                                <JobCard saved={true} />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default FavoriteJobs