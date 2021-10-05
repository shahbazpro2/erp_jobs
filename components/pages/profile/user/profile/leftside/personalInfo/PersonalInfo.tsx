import React from 'react'
import WithEditWrapper from '../common/WithEditWrapper';
import GridFlow from './GridFlow';



const PersonalInfo = () => {
    return (
        <WithEditWrapper title="Personal Information" onEditHandle={() => console.log('edit')}>
            <div className="grid grid-cols-2 gap-4">
                <GridFlow title="Birth Date" value="10 May 1997" />
                <GridFlow title="Gender" value="Male" />
                <GridFlow title="Experience" value="1 Years" />
                <GridFlow title="Country" value="Pakistan" />
                <GridFlow title="Minimum Salary" value="2000 Euro" />
                <GridFlow title="Profile Visibility" value="Registered only" />
                <GridFlow title="City" value="Rawalpindi" />
                <GridFlow title="Mobile" value="+923365121663" />
                <GridFlow title="Email" value="shahbazrock0321@gmail.com" />
                <GridFlow title="Address" value="Street#15b House#12 Bahar Colony near Lakhan Chowk Chakri Road" />
            </div>
        </WithEditWrapper>
    )
}

export default PersonalInfo
