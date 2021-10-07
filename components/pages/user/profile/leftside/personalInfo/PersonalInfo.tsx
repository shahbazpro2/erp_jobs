import capitalizeFirstLetter from '@components/functions/capitalizeFirstLetter';
import { url_userPersonalInformation } from '@components/functions/pageUrls';
import moment from 'moment';
import { useRouter } from 'next/router';
import React from 'react'
import WithEditWrapper from '../common/WithEditWrapper';
import GridFlow from './GridFlow';



const PersonalInfo = ({ data, user }: any) => {
    const router = useRouter()
    return (
        <WithEditWrapper title="Personal Information" onEditHandle={() => router.push(url_userPersonalInformation)}>
            <div className="grid grid-cols-2 gap-4">
                <GridFlow title="Birth Date" value={data?.dateOfBirth && moment(new Date(data?.dateOfBirth)).format('DD MMM YYYY')} />
                <GridFlow title="Gender" value={data?.gender} />
                <GridFlow title="Experience" value={data ? `${data.yearOfExperience} Years` : ''} />
                <GridFlow title="Country" value={capitalizeFirstLetter(data?.residenceCountry)} />
                <GridFlow title="Minimum Salary" value={`${data ? data.minSalary : ''} ${data ? data.currency : ''}`} />
                {/*     <GridFlow title="Profile Visibility" value="Registered only" /> */}
                <GridFlow title="City" value={capitalizeFirstLetter(data?.city)} />
                <GridFlow title="Mobile" value={data?.phone} />
                {/*   <GridFlow title="Email" value={user?.email} /> */}
                <GridFlow title="Address" value={data?.address} />
            </div>
        </WithEditWrapper>
    )
}

export default PersonalInfo
