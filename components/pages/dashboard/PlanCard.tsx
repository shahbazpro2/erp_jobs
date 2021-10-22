import BoxWrapper from '@components/common/boxWrapper/BoxWrapper'
import React from 'react'

interface Props {
    plan: string,
    cv: string,
    days: string
}
const PlanCard = ({ plan, cv, days }: Props) => {
    return (
        <BoxWrapper className="rounded-[15px] py-5 bg-[#473BF028]">
            <div className="text-center">
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
        </BoxWrapper>
    )
}

export default PlanCard
