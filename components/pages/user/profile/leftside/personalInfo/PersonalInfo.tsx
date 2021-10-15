import capitalizeFirstLetter from '@components/functions/capitalizeFirstLetter';
import { url_userPersonalInformation } from '@components/functions/pageUrls';
import moment from 'moment';
import { useRouter } from 'next/router';
import React from 'react'
import WithEditWrapper from '../common/WithEditWrapper';
import GridFlow from '../common/GridFlow';



const PersonalInfo = ({ data, user }: any) => {
    const router = useRouter()
    return (
        <WithEditWrapper title="Personal Information" onEditHandle={() => router.push(url_userPersonalInformation)}>
            <div className="grid grid-cols-2 gap-4">
                <GridFlow title="Birth Date" value={data?.dateOfBirth && moment(new Date(data?.dateOfBirth)).format('DD MMM YYYY')} />
                <GridFlow title="Gender" value={user?.gender} />
                <GridFlow title="Experience" value={data ? `${data.yearOfExperience} Years` : ''} />
                <GridFlow title="Country" value={capitalizeFirstLetter(data?.residenceCountry)} />
                <GridFlow title="City" value={capitalizeFirstLetter(data?.city)} />
                <GridFlow title="Mobile" value={data?.phone} />
                <div className="col-span-2 md:col-span-1">

                    <GridFlow title="Address" value={data?.address} />
                </div>
            </div>
        </WithEditWrapper>
    )
}

export default PersonalInfo
