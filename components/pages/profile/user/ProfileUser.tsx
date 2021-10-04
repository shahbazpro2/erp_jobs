import Container from '@components/common/container/Container'
import React from 'react'
import LeftSide from './leftside/LeftSide'
import RightSide from './rightside/RightSide'

const ProfileUser = () => {
    return (
        <div className="bg-[#F2F2F2]">
            <Container>
                <div className="grid grid-flow-col gap-6 py-16">
                    <div className="col-span-9">
                        <LeftSide />
                    </div>
                    <div className="col-span-3">
                        <RightSide />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default ProfileUser
