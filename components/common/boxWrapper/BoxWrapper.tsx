import React from 'react'

interface Props {
    title: String,
    subtitle: String,
    children: React.ReactNode
}
const BoxWrapper = ({ children, title, subtitle }: Props) => {
    return (
        <div className="bg-white border-[1px] border-[#D9D9D9]  rounded-[7px] py-8 px-7">
            <div className="text-2xl h-mid-clr">
                {title}
            </div>
            <div className="text-base subtitle-clr tracking-[0px]">
                {subtitle}
            </div>
            {children}
        </div>
    )
}

export default BoxWrapper
