import BoxWrapper from '@components/common/boxWrapper/BoxWrapper'
import Container from '@components/common/container/Container'
import { url_dashboardEditCompanyDetails, url_dashboardJobs } from '@components/functions/pageUrls'
import { Button } from '@mui/material'
import React from 'react'
import EditCompanyDetails from './editCompanyDetails/EditCompanyDetails'
import Jobs from './jobs/Jobs'
import SideMenu from './SideMenu'

interface Props {
    active: string
}


const Dashboard = ({ active }: Props) => {

    const showContent = () => {
        switch (active) {
            case url_dashboardJobs:
                return <Jobs />
            case url_dashboardEditCompanyDetails:
                return <EditCompanyDetails />

            default:
                break;
        }
    }

    return (
        <div className="gray-bg">
            <Container>
                <div className="grid grid-cols-6 px-10 py-14 gap-10">
                    <div className="col-span-4">
                        {showContent()}
                    </div>
                    <div className="col-span-2">
                        <BoxWrapper className="text-center py-5">
                            <Button variant="contained" className="w-[85%]">Add A New Job +</Button>
                        </BoxWrapper>
                        <SideMenu active={active} />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Dashboard
