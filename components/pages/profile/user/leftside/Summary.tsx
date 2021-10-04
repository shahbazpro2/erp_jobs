import BoxWrapper from '@components/common/boxWrapper/BoxWrapper'
import React from 'react'
import EditIcon from '@mui/icons-material/Edit';

const Summary = () => {
    return (
        <BoxWrapper>
            <div className="flex justify-between">
                <div className="text-lg">
                    Summary
                </div>
                <div className="flex cursor-pointer primary-clr-hover">
                    <EditIcon sx={{ width: '16px' }} />
                    <div className="ml-1">Edit</div>
                </div>
            </div>
        </BoxWrapper>
    )
}

export default Summary
