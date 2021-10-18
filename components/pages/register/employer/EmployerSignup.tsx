/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react'
import { HeaderContext } from '@context/HeaderContext'
import Container from '@components/common/container/Container'
import BoxWrapper from '@components/common/boxWrapper/BoxWrapper'
import LoginForm from '@components/common/forms/LoginForm'
import ORDivider from '@components/common/dividers/ORDivider'
import SocialsLogin from '@components/common/socialsLogin/SocialsLogin'
import { Button } from '@mui/material'

const EmployerSignup = () => {
    const context = useContext(HeaderContext)
    const [state, setState] = useState({
        username: '',
        password: ''
    })
    const [loading, setLoading] = useState(false)
    const [inputError, setInputError] = useState(false)

    useEffect(() => {
        context.handleHeader('bg-transparent', 'none', true)
        return (() => {
            context.handleHeader('bg-white', 'boxShadow', false)
        })
    }, [])

    const onSubmit = async () => {
        console.log('submit')
    }

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
                    <div className="flex items-center justify-center lg:justify-end mt-10 lg:mt-0 mb-20 lg:h-[67rem]">
                        <div className="xl:w-[80%] w-full">
                            <div className="grid grid-cols-1 md:grid-cols-2 mb-4">
                                <div className="text-2xl flex items-center text-white font-bold mb-2 md:mb-0">
                                    Sign In
                                </div>
                                <BoxWrapper className="py-2 px-5">
                                    <div className="flex justify-around">
                                        <span className="primary-clr-hover font-bold cursor-pointer active-links ">
                                            Sign in
                                        </span>
                                        <span className="mx-2">
                                            |
                                        </span>
                                        <span className="primary-clr-hover font-bold cursor-pointer">
                                            Register
                                        </span>
                                    </div>
                                </BoxWrapper>
                            </div>

                            <BoxWrapper>
                                <div className="text-center mb-12">
                                    <div className="text-xl md:text-2xl font-bold">
                                        Employer Account Login
                                    </div>
                                    <div className="text-base subtitle-clr mt-2">
                                        Start managing your account
                                    </div>
                                </div>
                                <LoginForm
                                    state={state}
                                    onSubmit={onSubmit}
                                    loading={loading}
                                    setState={setState}
                                    inputError={inputError}
                                />
                                <ORDivider />
                                <SocialsLogin />
                            </BoxWrapper>
                            <div className="mt-7 text-white text-white-hover">
                                <Button variant="outlined" color="inherit" fullWidth>
                                    <span className="text-base md:text-xl">Don't have account? Register now</span></Button>
                            </div>
                        </div>
                    </div>
                </div>

            </Container>
        </div>
    )
}

export default EmployerSignup
