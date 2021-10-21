import Container from '@components/common/container/Container'
import React from 'react'
import EnterpriseCard from './EnterpriseCard'
import PricingCard from './PricingCard'

const Pricing = () => {
    return (
        <div className="silver-bg pt-24 pb-40">
            <Container>
                <div className="text-center xl:px-40">
                    <div className="text-5xl font-bold">
                        Pricing & Plans
                    </div>
                    <div className="text-lg mt-7 md:w-[600px] m-auto opacity-70">
                        All our plans include all erp-job features from A-Z. Our pricing is easy and only depends on the amount of unlocks.
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-24 gap-10">
                        <PricingCard list={['100£ Per Job', '50 CV Downloads', '30 Days Validation Period', 'Premium Support']} plan="silver" price="100" btnColor="secondary" />
                        <PricingCard list={['130£ Per Job', '80 CV Downloads', '30 Days Validation Period', 'Premium Support']} plan="golden" price="130" btnColor="error" />
                        <EnterpriseCard list={['130£ Per Job', '80 CV Downloads', '30 Days Validation Period', 'Premium Support']} />
                    </div>
                </div>

            </Container>
        </div>
    )
}

export default Pricing
