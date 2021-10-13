import Container from '@components/common/container/Container'
import ContainerPx from '@components/common/container/ContainerPx'
import ArrowForward from '@mui/icons-material/ArrowForward'
import React from 'react'
import CategoryCard from './CategoryCard'

const Category = () => {
    return (
        <div className="bg-[#161C2D] text-white">
            <ContainerPx>
                <div className="items-center py-14 md:py-20 lg:py-32">
                    <div className="text-4xl font-bold">
                        Jobs by category
                    </div>
                    <div className="text-xl md:w-[28rem] opacity-[0.7] mt-3">
                        We daily update new jobs so that you can find the best ones.
                    </div>
                    <div className="text-lg flex float-right text-[#68D585]">
                        <div className="transition duration-500 ease-in-out hover:-translate-x-2 hover:scale-100 cursor-pointer mr-1">
                            Explore all categories

                        </div>
                        <div>
                            <ArrowForward fontSize="inherit" />
                        </div>
                    </div>
                    <div className="mt-20">
                        <div className="grid grid-rows-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-3">
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
            </ContainerPx>
        </div>
    )
}

export default Category
