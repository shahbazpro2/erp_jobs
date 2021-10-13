import { Card, CardMedia } from '@mui/material'
import React from 'react'


interface Props {
    category: string,
    title: string,
    image: string
}

const NewsCard = ({ category, title, image }: Props) => {
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
                sx={{ height: '300px' }}
                image={`${image}`}
                alt="green iguana"
            />
            <div className="flex items-center px-3 pt-4 pb-7">
                {/* <Image src={icon} alt="icon" width="70%" height="70%" /> */}
                <div className="ml-3">
                    <div className="text-base text-[#161C2D]">
                        {category}
                    </div>
                    <div className="text-2xl font-bold">
                        {title}
                    </div>
                </div>
            </div>
        </Card>
    )
}

export default NewsCard
