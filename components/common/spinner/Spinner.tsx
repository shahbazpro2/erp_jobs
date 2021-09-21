import { CircularProgress } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const Spinner = () => {
    return (
        <Box className="flex justify-center items-center h-[100vh]" >
            <CircularProgress />
        </Box>
    )
}

export default Spinner
