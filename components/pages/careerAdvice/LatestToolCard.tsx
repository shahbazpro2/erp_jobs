import { Card } from '@mui/material'
import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

interface Props {
    title: string,
    subtitle: string
}

const LatestToolCard = ({ title, subtitle }: Props) => {
    return (
        <div className="latestTool transition duration-500 ease-in-out hover:scale-100">
            <Card variant="outlined" sx={{
                borderRadius: '10px', borderColor: 'white', zIndex: 1111, "&:hover": {
                    cursor: 'pointer',
                    boxShadow: '0px 30px 44px #0D152E17',
                    transition: 'box-shadow ease-in-out 500ms ',
                    zIndex: 111
                },
            }}>
                <div className="flex items-center h-[7rem]">
                    <div className='ml-7'>
                        <div className="text-xl font-bold">
                            {title}
                        </div>
                        <div className="text-base mt-1">
                            {subtitle}
                        </div>
                    </div>
                    <div id="latestTool-arrow" className="ml-auto mr-7 flex items-center">
                        <ArrowForwardIcon />
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default LatestToolCard
