import BoxWrapper from '@components/common/boxWrapper/BoxWrapper'
import React from 'react'
import Image from 'next/image'
import Badge from '@components/common/badge/Badge'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';



interface Props {
    content: string,
    onHandleClick: () => void,
    badgeValue: number
}

const WithBadgeWrapper = ({ content, badgeValue, onHandleClick }: Props) => {
    return (
        <div onClick={onHandleClick}>
            <BoxWrapper className="px-4 py-5 cursor-pointer" >
                <div className="flex items-center justify-between">
                    <div className="flex flex-grow-1 items-center space-x-3">

                        <Image src="/assets/images/file.svg" width="40%" height="40%" alt="file" />
                        <div className="sm:text-base text-sm font-bold">
                            {content}
                        </div>
                        <Badge value={badgeValue} color="text-white" background="primary-bg" />
                    </div>

                    <ArrowForwardIcon />
                </div>
            </BoxWrapper>
        </div>

    )
}

export default WithBadgeWrapper
