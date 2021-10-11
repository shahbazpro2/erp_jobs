import React from 'react'



interface Props {
    title: string,
    content: string
}

const CareerAdviceCard = ({ title, content }: Props) => {
    return (
        <div className="text-left">
            <div className="text-2xl font-bold">
                {title}
            </div>
            <div className="text-xl mt-5 opacity-70">
                {content}
            </div>
        </div>
    )
}

export default CareerAdviceCard
