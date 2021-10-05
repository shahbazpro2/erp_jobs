import capitalizeFirstLetter from '@components/functions/capitalizeFirstLetter';
import moment from 'moment';
import { useRouter } from 'next/router';
import React from 'react'
import WithEditWrapper from '../common/WithEditWrapper';
import GridFlow from './GridFlow';



const PersonalInfo = ({ data }: any) => {
    const router = useRouter()
    return (
        <WithEditWrapper title="Personal Information" onEditHandle={() => router.push('/profile/user/personal-information')}>
            <div className="grid grid-cols-2 gap-4">
                <GridFlow title="Birth Date" value={moment(new Date(data?.dateOfBirth)).format('DD MMM YYYY')} />
                <GridFlow title="Gender" value={data?.gender} />
                <GridFlow title="Experience" value={`${data?.yearOfExperience} Years`} />
                <GridFlow title="Country" value={capitalizeFirstLetter(data?.residenceCountry)} />
                <GridFlow title="Minimum Salary" value={`${data?.minSalary} ${data?.currency}`} />
                <GridFlow title="Profile Visibility" value="Registered only" />
                <GridFlow title="City" value={capitalizeFirstLetter(data?.city)} />
                <GridFlow title="Mobile" value={data?.phone} />
                <GridFlow title="Email" value={data?.email} />
                <GridFlow title="Address" value={data?.address} />
            </div>
        </WithEditWrapper>
    )
}

export default PersonalInfo
