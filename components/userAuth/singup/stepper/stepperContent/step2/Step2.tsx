import React, { Dispatch, SetStateAction, useState } from 'react'
import BasicInformation from './BasicInformation'
import Career from './career/Career'
import Education from './Education'

interface Props {
    setActiveStep: Dispatch<SetStateAction<number>>
}

const Step2 = ({ setActiveStep }: Props) => {
    const [active, setActive] = useState('basic')

    const showItems = () => {
        switch (active) {
            case 'basic':
                return <BasicInformation setActive={setActive} />
            case 'career':
                return <Career setActive={setActive} />
            case 'education':
                return <Education setActive={setActive} />
        }
    }
    return (
        <div>
            {showItems()}
        </div>
    )
}

export default Step2
