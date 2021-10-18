/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react'
import { HeaderContext } from '@context/HeaderContext'
import Container from '@components/common/container/Container'

const EmployerSignup = () => {
    const context = useContext(HeaderContext)

    useEffect(() => {
        context.handleHeader('bg-transparent', 'none', true)
        return (() => {
            context.handleHeader('bg-white', 'boxShadow', false)
        })
    }, [])

    return (
        <div className="bg-mario w-full h-[1000px] text-white">
            <Container>
                <div className="grid grid-cols-2">
                    <div className="flex items-center h-screen">
                        <div>
                            <div className="text-3xl font-bold">
                                Employer Account
                            </div>
                            <div className="text-2xl mt-7">
                                ERP Jobs provides you with an advanced set of special candidate management tools where you can view and filter employees into different categories and folders, rank according to their level, and add any comments on each candidate so that the recruitment process is more organized and easy.
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center">

                    </div>
                </div>

            </Container>
        </div>
    )
}

export default EmployerSignup
