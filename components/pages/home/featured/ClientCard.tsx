import { Card } from '@mui/material'
import React from 'react'
import Image from 'next/image'


interface Props {
    title: string,
    icon: string
}

const ClientCard = ({ title, icon }: Props) => {
    return (
        <Card variant="outlined" sx={{
            borderRadius: '10px', "&:hover": {
                cursor: 'pointer',
                boxShadow: '0px 34px 33px #161C2D21'
            },
        }}>
            <div className="flex items-center h-[6rem] px-3">
                <Image src={icon} alt="icon" width="70%" height="70%" />
                <div className="text-xl font-bold ml-3">
                    {title}
                </div>
            </div>
        </Card>
    )
}

export default ClientCard
