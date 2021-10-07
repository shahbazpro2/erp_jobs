import ProfileUser from '@components/pages/user/profile/ProfileUser'
import React from 'react'
import Head from 'next/head'

const Profile = () => {
    return (
        <>
            <Head>
                <title>Profile</title>
            </Head>
            <ProfileUser />
        </>
    )
}

export default Profile
