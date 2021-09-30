import UserNavbar from '@components/common/userNavbar/UserNavbar'
import React from 'react'
import Category from './category/Category'
import Featured from './featured/Featured'
import TopSection from './topSection/TopSection'

const Home = () => {
    return (
        <div>
            <TopSection />
            <Featured />
            <Category />
        </div>
    )
}

export default Home
