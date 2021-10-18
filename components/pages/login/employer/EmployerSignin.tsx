/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react'
import BoxWrapper from '@components/common/boxWrapper/BoxWrapper'
import LoginForm from '@components/common/forms/LoginForm'
import ORDivider from '@components/common/dividers/ORDivider'
import SocialsLogin from '@components/common/socialsLogin/SocialsLogin'
import { Button } from '@mui/material'
import EmployerAuthWrapper from '@components/pages/auth/EmployerAuthWrapper'

const EmployerSignin = () => {
    const [state, setState] = useState({
        username: '',
        password: ''
    })
    const [loading, setLoading] = useState(false)
    const [inputError, setInputError] = useState(false)


    const onSubmit = async () => {
        console.log('submit')
    }

    return (
        <>
            <EmployerAuthWrapper title="Sign In">
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

            </EmployerAuthWrapper>
        </>

    )
}

export default EmployerSignin
