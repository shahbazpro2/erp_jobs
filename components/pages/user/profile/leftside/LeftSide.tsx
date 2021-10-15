import CareerWrapper from './career/CareerWrapper'
import React from 'react'
import PersonalInfo from './personalInfo/PersonalInfo'
import Summary from './summary/SummaryWrapper'
import TitleInfo from './TitleInfo'
import EducationWrapper from './education/EducationWrapper'
import CertificatesWrapper from './certificates/CertificatesWrapper'
import Skills from './Skills'
import JobDetails from './jobDetails/JobDetails'



const LeftSide = ({ data, user }: any) => {

    return (
        <div className="space-y-5">
            <div className="hidden lg:block">
                <TitleInfo data={data?.loginCandidate} user={user?.user} />
            </div>
            <Summary />
            <PersonalInfo data={data?.loginCandidate} user={user?.user} />
            <JobDetails data={data?.loginCandidate} user={user?.user} />
            <CareerWrapper />
            <EducationWrapper />
            <Skills />
            <CertificatesWrapper />
        </div>
    )
}

export default LeftSide
