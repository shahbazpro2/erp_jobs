import { Card } from '@mui/material'
import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


interface Props {
    title: string,
    count: string
}

const CategoryCard = ({ title, count }: Props) => {
    return (
        <div className="category-card-hover transition duration-500 ease-in-out hover:-translate-y-2">
            <Card variant="outlined" className="" sx={{
                borderRadius: '10px', "&:hover": {
                    cursor: 'pointer',
                    backgroundColor: '#473BF0',
                    transition: 'background-color ease-in-out 250ms ',
                    color: 'white',
                },
            }}>
                <div className="flex items-center h-[7rem]">
                    <div className='ml-7'>
                        <div className="text-xl font-bold">
                            {title}
                        </div>
                        <div className="text-base mt-1">
                            {`${count} Jobs`}
                        </div>
                    </div>
                    <div id="category-arrow" className="rounded-full w-11 h-11 ml-auto mr-5 flex items-center justify-center bg-white">
                        <ArrowForwardIcon sx={{ color: 'black' }} />
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default CategoryCard
