import React from 'react'
import WithEditWrapper from '../common/WithEditWrapper';
import GridFlow from './GridFlow';



const PersonalInfo = () => {
    return (
        <WithEditWrapper title="Personal Information" onEditHandle={() => console.log('edit')}>
            <div className="grid grid-cols-2 gap-4">
                <GridFlow title="Birth Date" value="10 May 1997" />
            </div>
        </WithEditWrapper>
    )
}

export default PersonalInfo
