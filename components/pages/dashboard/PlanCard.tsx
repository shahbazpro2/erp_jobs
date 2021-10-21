import React from 'react'

interface Props {
    plan: string,
    cv: string,
    days: string
}
const PlanCard = ({ plan, cv, days }: Props) => {
    return (
        <div className="bg-[#473BF028] rounded-[15px] py-5 text-center">
            <div className="text-xl font-bold primary-clr">
                {plan}
            </div>
            <div className="mt-1 text-sm">
                CV Downloads: {cv}
            </div>
            <div className="text-sm">
                Days Remaining: {days}
            </div>
        </div>
    )
}

export default PlanCard
