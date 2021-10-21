import React from 'react'

interface Props {
    count: string,
    title: string
}
const DetailCard = ({ count, title }: Props) => {
    return (
        <div className="bg-white rounded-[15px] py-5 text-center flex items-center justify-center">
            <div>
                <div className="text-xl font-bold">
                    {count}
                </div>
                <div className="mt-1 text-base subtitle-clr">
                    {title}
                </div>

            </div>
        </div>
    )
}

export default DetailCard
