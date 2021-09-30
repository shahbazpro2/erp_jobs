import UserNavbar from '@components/common/userNavbar/UserNavbar'
import React from 'react'
import Featured from './featured/Featured'
import TopSection from './topSection/TopSection'

const Home = () => {
    return (
        <div>
            <TopSection />
            <Featured />
        </div>
    )
}

export default Home
