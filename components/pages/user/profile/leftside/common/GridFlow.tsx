import React from 'react'


interface Props {
    title: string,
    value: string | undefined
}

const GridFlow = ({ title, value }: Props) => {
    return (
        <div className="grid md:grid-cols-12">
            <div className="col-span-4 subtitle-clr">
                {title}
            </div>
            <div className="col-span-8">
                {value}
            </div>
        </div>
    )
}

export default GridFlow
