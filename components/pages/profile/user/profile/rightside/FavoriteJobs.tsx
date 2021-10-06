import { url_favoriteJobs } from '@components/functions/pageUrls'
import router from 'next/router'
import React from 'react'
import WithBadgeWrapper from './WithBadgeWrapper'

const FavoriteJobs = () => {
    return (
        <WithBadgeWrapper content="My Favorite Jobs" badgeValue={2} onHandleClick={() => router.push(url_favoriteJobs)} />
    )
}

export default FavoriteJobs
