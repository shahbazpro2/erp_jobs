import Container from '@components/common/container/Container'
import React from 'react'
import LeftSide from './leftside/LeftSide'
import RightSide from './rightside/RightSide'

const ProfileUser = () => {
    return (
        <div className="bg-[#F2F2F2]">
            <Container>
                <div className="grid lg:grid-cols-12 grid-cols-1 gap-6 py-16">
                    <div className="lg:col-span-8 xl:col-span-9">
                        <LeftSide />
                    </div>
                    <div className="lg:col-span-4 xl:col-span-3">
                        <RightSide />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default ProfileUser
