import React from 'react'


interface Props {
    title: string,
    value: string
}

const GridFlow = ({ title, value }: Props) => {
    return (
        <div className="grid grid-flow-col">
            <div className="col-span-6 subtitle-clr">
                {title}
            </div>
            <div className="col-span-6">
                {value}
            </div>
        </div>
    )
}

export default GridFlow
