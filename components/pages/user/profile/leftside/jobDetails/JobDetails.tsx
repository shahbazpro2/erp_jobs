import capitalizeFirstLetter from '@components/functions/capitalizeFirstLetter';
import { url_jobsDetails, url_userPersonalInformation } from '@components/functions/pageUrls';
import moment from 'moment';
import { useRouter } from 'next/router';
import React from 'react'
import WithEditWrapper from '../common/WithEditWrapper';
import GridFlow from '../common/GridFlow';



const JobDetails = ({ data, user }: any) => {
    const router = useRouter()
    return (
        <WithEditWrapper title="Job Details" onEditHandle={() => router.push(url_jobsDetails)}>
            <div className="grid grid-cols-2 gap-4">
                <GridFlow title="Job Types" value={"React js"} />
                <GridFlow title="Industries" value={"Project management."} />
                <GridFlow title="Desired Job" value={"React js, Node js, Python, C++"} />
                <GridFlow title="Date Available" value={"2021-10-20"} />

            </div>
        </WithEditWrapper>
    )
}

export default JobDetails
