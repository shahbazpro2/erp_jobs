import Container from '@components/common/container/Container'
import React from 'react'
import DetailCard from './DetailCard'
import PlanCard from './PlanCard'

const Dashboard = () => {
    return (
        <div className="gray-bg">
            <Container>
                <div className="grid grid-cols-2">
                    <div className="py-14">
                        <div className="grid grid-cols-4 gap-5">

                            <DetailCard title="Total Job Ads" count="09" />
                            <DetailCard title="Active Ads" count="04" />
                            <DetailCard title="Inactive Ads" count="05" />
                            <PlanCard plan="Silver Package" cv="55" days="25" />

                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Dashboard
