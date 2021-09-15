import React from 'react'

interface Props {
    children: React.ReactNode
}
const AuthWrapper = ({ children }: Props) => {
    return (
        <div className="bg-white rounded-[20px] text-center py-8 px-7">
            <div className="space-text">
                Get started
            </div>
            <div className="text-2xl font-bold px-20 my-4 tracking-[0.1px]">
                Apply for Million Chance to Get Dreams Job
            </div>
            {children}
        </div>
    )
}

export default AuthWrapper
