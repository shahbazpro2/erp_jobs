import React from 'react'
import CategoryCard from './CategoryCard'

const Category = () => {
    return (
        <div className="bg-[#161C2D] text-white">
            <div className="grid grid-cols-12">
                <div className="col-start-3 col-span-8">
                    <div className="items-center py-32">
                        <div className="text-4xl font-bold">
                            Jobs by category
                        </div>
                        <div className="text-xl w-[18rem] opacity-[0.7] mt-3">
                            We daily update new jobs so that you can find the best ones.
                        </div>
                        <div className="mt-20">
                            <div className="grid grid-rows-3 grid-cols-3 gap-10 px-3">
                                <CategoryCard title="Design" count="47" />
                                <CategoryCard title="Marketing" count="51" />
                                <CategoryCard title="Engineering" count="89" />
                                <CategoryCard title="Mangement" count="16" />
                                <CategoryCard title="Finance" count="23" />
                                <CategoryCard title="Customer Support" count="34" />
                                <CategoryCard title="Software Engineer" count="16" />
                                <CategoryCard title="IT" count="23" />
                                <CategoryCard title="UI/UX" count="34" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category
