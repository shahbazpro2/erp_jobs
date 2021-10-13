/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react'
import { HeaderContext } from '@context/HeaderContext'

const EmployerSignup = () => {
    const context = useContext(HeaderContext)

    useEffect(() => {
        context.handleHeader('bg-transparent', 'none', true)
        return (() => {
            context.handleHeader('bg-white', 'boxShadow', false)
        })
    }, [])

    return (
        <div className="bg-mario w-full h-[1000px]">
        </div>
    )
}

export default EmployerSignup
