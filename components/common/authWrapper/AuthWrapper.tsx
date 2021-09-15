import React from 'react'

interface Props {
    children: React.ReactNode
}
const AuthWrapper = ({ children }: Props) => {
    return (
        <div className="bg-white rounded-[20px] text-center py-3 mt-14">
            <div className="space-text">
                Get started
            </div>
            {children}
        </div>
    )
}

export default AuthWrapper
