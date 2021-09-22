import React from 'react'
interface Props {
    title: String,
    subtitle: String,
}
const HeadingStyle1 = ({ title, subtitle }: Props) => {
    return (
        <div>
            <div className="text-2xl h-mid-clr">
                {title}
            </div>
            <div className="text-base subtitle-clr tracking-[0px]">
                {subtitle}
            </div>
        </div>
    )
}

export default HeadingStyle1
