import React from 'react'

interface Props {
    children: React.ReactNode
}
const BoxWrapper = ({ children }: Props) => {
    return (
        <div className="bg-white border-[1px] border-[#D9D9D9]  rounded-[7px] py-8 px-7">
            {children}
        </div>
    )
}

export default BoxWrapper
