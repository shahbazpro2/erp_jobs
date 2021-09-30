import React from 'react'


interface Props {
    step: number,
    title: string,
    content: string
}

const JobStepper = ({ step, title, content }: Props) => {
    return (
        <div className="grid grid-flow-col grid-cols-6">
            <div className="col-span-1">
                <div className="rounded-full m-auto primary-bg  w-10 h-10  flex items-center justify-center text-white mt-1">
                    {step}
                </div>

            </div>
            <div className="content col-span-4">
                <div className="text-2xl">
                    {title}
                </div>
                <div className="mt-3">
                    <div className="text-base opacity-[0.7]">
                        {content}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobStepper
