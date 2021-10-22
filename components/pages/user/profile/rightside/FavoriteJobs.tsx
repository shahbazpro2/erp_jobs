import RouterCard from '@components/common/routerCard/RouterCard'
import { url_userFavoriteJobs } from '@components/functions/pageUrls'
import router from 'next/router'
import React from 'react'

const FavoriteJobs = () => {
    return (
        <RouterCard image="/assets/images/file.svg" content="My Favorite Jobs" badgeValue={2} onHandleClick={() => router.push(url_userFavoriteJobs)} />
    )
}

export default FavoriteJobs
