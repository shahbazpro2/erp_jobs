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
import EmployerAuthWrapper from '@components/pages/auth/EmployerAuthWrapper'

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
        <>
            <EmployerAuthWrapper title="Sign Up">
                <BoxWrapper>
                    <div className="text-center mb-12">
                        <div className="text-xl md:text-2xl font-bold">
                            Employer Account Sign up
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
                        <span className="text-base md:text-xl">Already have an account ? Sign In</span></Button>
                </div>
            </EmployerAuthWrapper>
        </>


    )
}

export default EmployerSignup
