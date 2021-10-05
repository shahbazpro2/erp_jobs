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


const LeftSide = () => {
    const [loginCandidate, { data }] = useLazyQuery(LoginCandidate)

    useEffect(() => {
        loginCandidate()
    }, [])
    console.log('data', data)
    let user = {
        name: `${data?.loginCandidate.user.firstName} ${data?.loginCandidate.user.lastName}`,
        subtitle: `${data?.loginCandidate.jobTitle.name}`
    }

    return (
        <div className="space-y-5">
            <TitleInfo user={user} />
            <Summary />
            <PersonalInfo />
            <CareerWrapper />
            <EducationWrapper />
            <Skills />
            <CertificatesWrapper />
        </div>
    )
}

export default LeftSide
