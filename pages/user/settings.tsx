import UserSettings from '@components/pages/user/settings/UserSettings'
import React from 'react'
import Head from 'next/head'

const settings = () => {
    return (
        <div>
            <Head>
                <title>Settings</title>
            </Head>
            <UserSettings />
        </div>
    )
}

export default settings
