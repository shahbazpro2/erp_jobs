import React from 'react'

interface Props {
    value: number,
    color: string,
    background: string
}

const Badge = ({ value, color, background }: Props) => {
    return (
        <div className={"rounded-xl text-sm text-center px-1 min-w-[30px] w-auto h-5" + ` ${color} ${background}`}>
            {value}
        </div>
    )
}

export default Badge
