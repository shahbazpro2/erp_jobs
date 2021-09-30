import React from 'react'
import JobStepper from './JobStepper'

const JobSteps = () => {
    return (
        <div className="bg-white">
            <div className="grid grid-cols-12">
                <div className="col-start-3 col-span-8">
                    <div className="py-32">

                        <div className="text-center">
                            <div className="text-4xl font-bold">
                                Find jobs with 3 easy steps
                            </div>
                            <div className="text-xl w-[42rem] m-auto opacity-[0.7] mt-5">
                                With lots of unique blocks, you can easily build a page without coding. Build your next landing page.
                            </div>
                        </div>
                        <div className="grid grid-cols-2 pt-32">
                            <div></div>
                            <div className="steps space-y-10">
                                <JobStepper step={1} title="Search for a job" content="With lots of unique blocks, you can easily build a page without coding." />
                                <JobStepper step={2} title="Apply within our website" content="With lots of unique blocks, you can easily build a page without coding." />
                                <JobStepper step={3} title="Get interview call" content="With lots of unique blocks, you can easily build a page without coding." />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobSteps
