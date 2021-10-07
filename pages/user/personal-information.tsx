
import PersonalInformation from '@components/pages/user/personal-information/PersonalInformation'
import React from 'react'
import Head from 'next/head'

const Index = () => {
    return (
        <div>
            <Head>
                <title>Personal Information</title>
            </Head>
            <PersonalInformation />
        </div>
    )
}

export default Index
