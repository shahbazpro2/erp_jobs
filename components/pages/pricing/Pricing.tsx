import ContainerPx from '@components/common/container/ContainerPx'
import React from 'react'
import EnterpriseCard from './EnterpriseCard'
import PricingCard from './PricingCard'

const Pricing = () => {
    return (
        <div className="silver-bg py-24">
            <ContainerPx>
                <div className="text-center">
                    <div className="text-5xl font-bold">
                        Pricing & Plans
                    </div>
                    <div className="text-lg mt-7 w-[600px] m-auto opacity-70">
                        All our plans include all erp-job features from A-Z. Our pricing is easy and only depends on the amount of unlocks.
                    </div>
                    <div className="grid grid-cols-3 mt-24 gap-10">
                        <PricingCard list={['100£ Per Job', '50 CV Downloads', '30 Days Validation Period', 'Premium Support']} plan="silver" price="100" btnColor="secondary" />
                        <PricingCard list={['130£ Per Job', '80 CV Downloads', '30 Days Validation Period', 'Premium Support']} plan="GOLDEN" price="130" btnColor="error" />
                        <EnterpriseCard list={['130£ Per Job', '80 CV Downloads', '30 Days Validation Period', 'Premium Support']} />
                    </div>
                </div>

            </ContainerPx>
        </div>
    )
}

export default Pricing
