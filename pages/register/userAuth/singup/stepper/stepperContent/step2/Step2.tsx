import React, { useState } from 'react'
import BasicInformation from './basic/BasicInfo'
import CareerWrapper from './CareerWrapper'
import EducationWrapper from './EducationWrapper'
import Skills from './Skills'

const Step2 = () => {
    const [active, setActive] = useState('basic')

    const showItems = () => {
        switch (active) {
            case 'basic':
                return <BasicInformation setActive={setActive} />
            case 'career':
                return <CareerWrapper setActive={setActive} />
            case 'education':
                return <EducationWrapper setActive={setActive} />
            case 'skills':
                return <Skills setActive={setActive} />
        }
    }
    return (
        <div>
            {showItems()}
        </div>
    )
}

export default Step2
