import BoxWrapper from '@components/common/boxWrapper/BoxWrapper'
import React from 'react'
import Image from 'next/image'
import Badge from '@components/common/badge/Badge'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';



interface Props {
    image: string,
    content: string,
    onHandleClick: () => void,
    badgeValue?: number,
    active?: boolean
}

const RouterCard = ({ content, image, badgeValue = 0, active = false, onHandleClick }: Props) => {
    return (
        <div onClick={onHandleClick}>
            <BoxWrapper className={`px-4 py-5 cursor-pointer primary-clr-hover ${active ? 'primary-clr' : ''}`} >
                <div className="flex items-center justify-between">
                    <div className="flex flex-grow-1 items-center space-x-3">
                        <Image src={image} width="40%" height="40%" alt="file" />
                        <div className="sm:text-base text-sm font-bold">
                            {content}
                        </div>
                        {badgeValue > 0 && <Badge value={badgeValue} color="text-white" background="primary-bg" />}
                    </div>

                    <ArrowForwardIcon />
                </div>
            </BoxWrapper>
        </div>

    )
}

export default RouterCard
