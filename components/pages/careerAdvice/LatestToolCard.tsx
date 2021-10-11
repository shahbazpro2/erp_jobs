import { Card } from '@mui/material'
import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

interface Props {
    title: string,
    subtitle: string
}

const LatestToolCard = ({ title, subtitle }: Props) => {
    return (
        <div className="latestTool">
            <Card variant="outlined" sx={{
                borderRadius: '10px', borderColor: 'white', "&:hover": {
                    cursor: 'pointer',
                    boxShadow: '0px 34px 33px #161C2D21'
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
                    <div id="latestTool-arrow" className="ml-auto mr-7">
                        <ArrowForwardIcon />
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default LatestToolCard
