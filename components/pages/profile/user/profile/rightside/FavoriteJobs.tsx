import React from 'react'
import WithBadgeWrapper from './WithBadgeWrapper'

const FavoriteJobs = () => {
    return (
        <WithBadgeWrapper content="My Favorite Jobs" badgeValue={2} onHandleClick={() => console.log('fav')} />
    )
}

export default FavoriteJobs
