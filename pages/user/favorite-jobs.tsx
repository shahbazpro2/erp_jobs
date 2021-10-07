import FavoriteJobs from '@components/pages/user/favoriteJobs/FavoriteJobs'
import React from 'react'
import Head from 'next/head'

const Index = () => {
    return (
        <div>
            <Head>
                <title>Favorite Jobs</title>
            </Head>
            <FavoriteJobs />
        </div>
    )
}

export default Index
