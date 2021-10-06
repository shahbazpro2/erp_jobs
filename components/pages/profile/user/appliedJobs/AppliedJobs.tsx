import Container from '@components/common/container/Container'
import React from 'react'
import JobsHeader from '../common/JobsHeader'


const AppliedJobs = () => {
    return (
        <Container>
            <div className="py-10">
                <div className="grid grid-cols-5">
                    <div className="col-start-2 col-span-3">
                        <JobsHeader title="Applied Jobs" onBack={() => console.log('back')} />
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default AppliedJobs