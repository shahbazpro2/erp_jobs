import Container from '@components/common/container/Container'
import React from 'react'
import JobCard from '../common/JobCard'
import JobsHeader from '../common/JobsHeader'


const AppliedJobs = () => {
    return (
        <div className="gray-bg min-h-[100vh]">
            <Container>
                <div className="py-10">
                    <div className="grid grid-cols-5">
                        <div className="col-start-2 col-span-3">
                            <JobsHeader title="Applied Jobs" onBack={() => console.log('back')} />
                            <div className="mt-7">
                                <JobCard />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default AppliedJobs