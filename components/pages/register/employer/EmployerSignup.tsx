import React, { useContext, useEffect } from 'react'
import { HeaderContext } from '@context/HeaderContext'
import { Paper } from '@mui/material'

const EmployerSignup = () => {
    const context = useContext(HeaderContext)

    useEffect(() => {
        context.handleHeader('bg-none', 'none', true)
        return (() => {
            context.handleHeader('bg-white', 'boxShadow', false)
        })
    }, [])

    return (
        <Paper className="bg-mario w-full h-[700px]">
            <div>
                employer
            </div>
        </Paper>
    )
}

export default EmployerSignup
