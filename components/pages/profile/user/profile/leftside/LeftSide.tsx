import CareerWrapper from './career/CareerWrapper'
import React, { useEffect } from 'react'
import PersonalInfo from './personalInfo/PersonalInfo'
import Summary from './summary/SummaryWrapper'
import TitleInfo from './TitleInfo'
import EducationWrapper from './education/EducationWrapper'
import CertificatesWrapper from './certificates/CertificatesWrapper'
import Skills from './Skills'
import { useLazyQuery } from '@apollo/client'
import { LoginCandidate } from '@graphql/queries/LoginCandidate'
import { useAppSelector } from '@redux/Store'


const LeftSide = () => {
    const user: any = useAppSelector(state => state.authReducer)
    const [loginCandidate, { data }] = useLazyQuery(LoginCandidate)

    useEffect(() => {
        loginCandidate()
    }, [])

    return (
        <div className="space-y-5">
            <TitleInfo data={data?.loginCandidate} user={user?.user} />
            <Summary />
            <PersonalInfo data={data?.loginCandidate} user={user?.user} />
            <CareerWrapper />
            <EducationWrapper />
            {/*   <Skills /> */}
            <CertificatesWrapper />
        </div>
    )
}

export default LeftSide
