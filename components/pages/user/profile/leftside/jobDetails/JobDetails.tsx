import { url_jobsDetails } from '@components/functions/pageUrls';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import WithEditWrapper from '../common/WithEditWrapper';
import GridFlow from '../common/GridFlow';
import { getUserJobDetails } from '@api/jobDetails';
import { JobProps } from '@components/pages/user/jobDetails/types';
import { initialJobStates } from '@components/pages/user/jobDetails/initialStates';

const JobDetails = () => {
    const router = useRouter()
    const [data, setData] = useState<JobProps>(initialJobStates)

    useEffect(() => {
        (async () => {
            const res = await getUserJobDetails();
            if (!res?.error) {
                if (res?.data.length) {
                    setData({ ...res?.data[0] })

                } else {
                    setData({ ...data, availability_date: '' })
                }
            }
        })()
    }, [])

    return (
        <WithEditWrapper title="Job Details" onEditHandle={() => router.push(url_jobsDetails)}>
            <div className="grid grid-cols-2 gap-4">
                <GridFlow title="Job Types" value={data?.job_type?.toString()} />
                <GridFlow title="Industries" value={data?.industry?.name} />
                <GridFlow title="Desired Job" value={data?.desire_job_title?.name} />
                <GridFlow title="Date Available" value={data?.availability_date} />
                <GridFlow title="Salary" value={`${data?.min_salary}-${data?.max_salary}`} />
            </div>
        </WithEditWrapper>
    )
}

export default JobDetails
