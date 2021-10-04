import React from 'react'
import WithEditWrapper from '../common/WithEditWrapper';



const PersonalInfo = () => {
    return (
        <WithEditWrapper title="Personal Information" onEditHandle={() => console.log('edit')}>

        </WithEditWrapper>
    )
}

export default PersonalInfo
