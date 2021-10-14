import React from 'react'
import JobStepper from './JobStepper'
import Image from 'next/image'
import ContainerPx from '@components/common/container/ContainerPx'

const JobSteps = () => {
    return (
        <div className="bg-white">
            <ContainerPx>
                <div className="py-14 md:py-20 lg:py-32">
                    <div className="text-center">
                        <div className="text-4xl font-bold">
                            Find jobs with 3 easy steps
                        </div>
                        <div className="text-xl w-full md:w-[42rem] m-auto opacity-[0.7] mt-5">
                            With lots of unique blocks, you can easily build a page without coding. Build your next landing page.
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-5 grid-cols-1 pt-32">
                        <div>
                            <Image src="/assets/images/jobstepsimg.png" width="900" height="900" alt="jobstep" />
                        </div>
                        <div className="flex steps items-center lg:px-10">
                            <div className="space-y-10">

                                <JobStepper step={1} title="Search for a job" content="With lots of unique blocks, you can easily build a page without coding." />
                                <JobStepper step={2} title="Apply within our website" content="With lots of unique blocks, you can easily build a page without coding." />
                                <JobStepper step={3} title="Get interview call" content="With lots of unique blocks, you can easily build a page without coding." />
                            </div>
                        </div>
                    </div>

                </div>

            </ContainerPx>
        </div>
    )
}

export default JobSteps
