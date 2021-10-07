import React from 'react'
import UserLogin from '@components/pages/login/user/UserLogin'
import Head from 'next/head'

const user = () => {
    return (
        <>
            <Head>
                <title>Login</title>
            </Head>
            <UserLogin />
        </>
    )
}

export default user
