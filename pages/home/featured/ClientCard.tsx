import { Card } from '@mui/material'
import React from 'react'

const ClientCard = () => {
    return (
        <Card variant="outlined" sx={{ borderRadius: '10px' }}>
            <div className="flex items-center h-[5rem] px-3">
                <div className="text-xl font-bold">
                    Tokopedia
                </div>
            </div>
        </Card>
    )
}

export default ClientCard
