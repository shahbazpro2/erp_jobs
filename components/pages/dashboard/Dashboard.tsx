import BoxWrapper from '@components/common/boxWrapper/BoxWrapper'
import Container from '@components/common/container/Container'
import DualButton from '@components/common/dualButton/DualButton'
import RouterCard from '@components/common/routerCard/RouterCard'
import { Button } from '@mui/material'
import router from 'next/router'
import React from 'react'
import DetailCard from './DetailCard'
import PlanCard from './PlanCard'

const Dashboard = () => {
    return (
        <div className="gray-bg">
            <Container>
                <div className="grid grid-cols-6 px-10 py-14 gap-10">
                    <div className="col-span-4">
                        <div className="grid grid-cols-4 gap-10">
                            <DetailCard title="Total Job Ads" count="09" />
                            <DetailCard title="Active Ads" count="04" />
                            <DetailCard title="Inactive Ads" count="05" />
                            <PlanCard plan="Silver Package" cv="55" days="25" />
                        </div>
                        <div className="mt-14">
                            <div className="grid grid-cols-6">
                                <div className="text-lg col-span-4 flex items-center">
                                    Active Jobs
                                </div>
                                <div className="col-span-2">
                                    <DualButton
                                        first="Active Jobs"
                                        second="Expired Jobs"
                                        active="Active Jobs"
                                        firstClick={() => console.log('click')}
                                        secondClick={() => console.log('click')}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2">
                        <BoxWrapper className="text-center py-5">
                            <Button variant="contained" className="w-[85%]">Add A New Job +</Button>
                        </BoxWrapper>
                        <div className="mt-7 space-y-3">
                            <RouterCard image="/assets/images/my-jobs-purple.png" content="My Jobs" onHandleClick={() => router.push('/')} active={true} />
                            <RouterCard image="/assets/images/cv-search-blue.png" content="CV Search" onHandleClick={() => router.push('/')} />
                            <RouterCard image="/assets/images/cv-folder-blue.png" content="CV Folders" onHandleClick={() => router.push('/')} />
                            <RouterCard image="/assets/images/recrtmnt-pkgs-blue.png" content="Recruitment Packages" onHandleClick={() => router.push('/')} />
                            <RouterCard image="/assets/images/setting-blue.png" content="Setting" onHandleClick={() => router.push('/')} />
                            <RouterCard image="/assets/images/logout-blue.png" content="Logout" onHandleClick={() => router.push('/')} />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Dashboard
