import CareerWrapper from './career/CareerWrapper'
import React from 'react'
import PersonalInfo from './personalInfo/PersonalInfo'
import Summary from './summary/SummaryWrapper'
import TitleInfo from './TitleInfo'
import EducationWrapper from './education/EducationWrapper'
import CertificatesWrapper from './certificates/CertificatesWrapper'
import Skills from './Skills'


const LeftSide = () => {
    let user = {
        name: "Muhammad Arslan Ali",
        subtitle: "UI/UX Designer"
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
