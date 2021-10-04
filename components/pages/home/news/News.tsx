import React from 'react'
import NewsCard from './NewsCard'

const News = () => {
    return (
        <div className="bg-[#F4F7FA]">
            <div className="grid grid-cols-12">
                <div className="col-start-3 col-span-8">
                    <div className="py-32">

                        <div className="text-center">
                            <div className="text-4xl font-bold">
                                News that helps
                            </div>
                            <div className="text-xl m-auto opacity-[0.7] mt-5">
                                Read many articles about jobs and how to get them easily .
                            </div>
                        </div>
                        <div className="mt-24">
                            <div className="grid grid-cols-3 gap-6">
                                <NewsCard category="Career" title="How to win any job you want. Get started with 5 steps." image="/assets/images/news1.png" />
                                <NewsCard category="Lifestyle" title="10 ways to reduce your office work depression." image="/assets/images/news2.png" />
                                <NewsCard category="Career" title="Why should you work as a team even on small projects." image="/assets/images/news3.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default News
