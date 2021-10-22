import BoxWrapper from '@components/common/boxWrapper/BoxWrapper'
import React from 'react'

interface Props {
    count: string,
    title: string
}
const DetailCard = ({ count, title }: Props) => {
    return (
        <BoxWrapper className="rounded-[15px] py-5">
            <div className="text-center flex items-center justify-center h-full">
                <div>
                    <div className="text-xl font-bold">
                        {count}
                    </div>
                    <div className="mt-1 text-base subtitle-clr">
                        {title}
                    </div>

                </div>
            </div>

        </BoxWrapper>
    )
}

export default DetailCard
