import React from 'react'

interface Props {
    children: React.ReactNode,
    className?: string,
}
const BoxWrapper = ({ children, className = "px-7 py-8" }: Props) => {
    return (
        <div className={"bg-white border-[1px] border-[#D9D9D9]  rounded-[7px] " + className}>
            {children}
        </div>
    )
}

export default BoxWrapper
