import { Card, CardMedia } from '@mui/material'
import React from 'react'

const NewsCard = () => {
    return (
        <Card variant="outlined" sx={{
            borderColor: '#f3f3f3',
            borderRadius: '10px', "&:hover": {
                cursor: 'pointer',
                boxShadow: '0px 34px 33px #161C2D21'
            },
        }}>
            <CardMedia
                component="img"
                height="140"
                image="/assets/images/news1.png"
                alt="green iguana"
            />
            <div className="flex items-center px-3 pt-4 pb-7">
                {/* <Image src={icon} alt="icon" width="70%" height="70%" /> */}
                <div className="ml-3">
                    <div className="text-base text-[#161C2D]">
                        Career
                    </div>
                    <div className="text-2xl font-bold">
                        How to win any job you want. Get started with 5 steps.
                    </div>
                </div>
            </div>
        </Card>
    )
}

export default NewsCard
