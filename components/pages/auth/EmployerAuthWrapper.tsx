/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { ReactNode, useContext, useEffect } from 'react'
import Container from '@components/common/container/Container'
import { HeaderContext } from '@context/HeaderContext'
import router from 'next/router'
import { url_loginEmp, url_registerEmp } from '@components/functions/pageUrls'
import DualButton from '@components/common/dualButton/DualButton'

interface Props {
    title: string,
    children: ReactNode
}
const EmployerAuthWrapper = ({ children, title }: Props) => {
    const context = useContext(HeaderContext)
    useEffect(() => {
        context.handleHeader('bg-transparent', 'none', true)
        return (() => {
            context.handleHeader('bg-white', 'boxShadow', false)
        })
    }, [])
    return (
        <div className="bg-mario bg-cover w-full">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    <div className="flex items-center mt-32 sm:mt-44 lg:mt-0 lg:h-[55rem] text-white">
                        <div>
                            <div className="text-3xl font-bold">
                                Employer Account
                            </div>
                            <div className="text-2xl mt-7">
                                ERP Jobs provides you with an advanced set of special candidate management tools where you can view and filter employees into different categories and folders, rank according to their level, and add any comments on each candidate so that the recruitment process is more organized and easy.
                            </div>
                        </div>
                    </div>
                    <div className={`flex items-center justify-center lg:justify-end mt-10 lg:mt-0 mb-20 ${title === 'Sign In' ? 'lg:h-[67rem]' : 'lg:h-[80rem]'}`}>
                        <div className="xl:w-[80%] w-full">
                            <div className="grid grid-cols-1 md:grid-cols-2 mb-4">
                                <div className="text-2xl flex items-center text-white font-bold mb-2 md:mb-0">
                                    {title}
                                </div>
                                <DualButton
                                    first="Sign In"
                                    second="Sign Up"
                                    active={title}
                                    firstClick={() => router.push(url_loginEmp)}
                                    secondClick={() => router.push(url_registerEmp)}
                                />
                            </div>

                            {children}
                        </div>
                    </div>
                </div>

            </Container>
        </div>
    )
}

export default EmployerAuthWrapper
