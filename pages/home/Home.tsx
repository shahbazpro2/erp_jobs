import React from 'react'
import Category from './category/Category'
import Featured from './featured/Featured'
import Footer from './footer/Footer'
import JobSteps from './jobSteps/JobSteps'
import News from './news/News'
import Subscription from './subscription/Subscription'
import TopSection from './topSection/TopSection'

const Home = () => {
    return (
        <div>
            <TopSection />
            <Featured />
            <Category />
            <JobSteps />
            <News />
            <Subscription />
            <Footer />
        </div>
    )
}

export default Home
