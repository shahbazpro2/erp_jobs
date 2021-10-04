import React, { Dispatch, SetStateAction, useState } from 'react'
import BasicInformation from './basic/BasicInfo'
import Skills from './Skills'


const Step2 = () => {
    const [active, setActive] = useState('basic')

    const showItems = () => {
        switch (active) {
            case 'basic':
                return <BasicInformation setActive={setActive} />
        }
    }
    return (
        <div>
            {showItems()}
        </div>
    )
}

export default Step2
