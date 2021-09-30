import React from 'react'

const JobStepper = () => {
    return (
        <div className="grid grid-flow-col grid-cols-6">
            <div className="col-span-1">
                <div className="rounded-full m-auto primary-bg  w-10 h-10  flex items-center justify-center text-white mt-1">
                    1
                </div>

            </div>
            <div className="content col-span-3">
                <div className="text-2xl">
                    Search for a job
                </div>
                <div className="mt-3">
                    <div className="text-base opacity-[0.7]">
                        With lots of unique blocks, you can easily build a page without coding.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobStepper
