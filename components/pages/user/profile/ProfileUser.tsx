/* eslint-disable react-hooks/exhaustive-deps */
import { useLazyQuery } from '@apollo/client'
import Container from '@components/common/container/Container'
import { LoginCandidate } from '@graphql/queries/LoginCandidate'
import { useAppSelector } from '@redux/Store'
import React, { useEffect } from 'react'
import LeftSide from './leftside/LeftSide'
import RightSide from './rightside/RightSide'

const ProfileUser = () => {
    const user: any = useAppSelector(state => state.authReducer)
    const [loginCandidate, { data }] = useLazyQuery(LoginCandidate)

    useEffect(() => {
        loginCandidate()
    }, [])
    return (
        <div className="bg-[#F2F2F2]">
            <Container>
                <div className="grid lg:grid-cols-12 grid-cols-1 grid-flow-row gap-6 py-16">
                    <div className="lg:col-span-8 xl:col-span-9">
                        <LeftSide data={data} user={user} />
                    </div>
                    <div className="lg:col-span-4 xl:col-span-3 order-first lg:order-last">
                        <RightSide data={data} user={user} />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default ProfileUser
