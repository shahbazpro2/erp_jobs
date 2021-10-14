import ContainerPx from '@components/common/container/ContainerPx'
import React from 'react'
import SubscriptionForm from './SubscriptionForm'

const Subscription = () => {
    return (
        <div className="bg-white py-20">
            <ContainerPx>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="md:text-3xl text-2xl">
                        Subscribe to our newsletter to get latest jobs on your inbox.
                    </div>
                    <div className="subscribe">
                        <SubscriptionForm />
                    </div>
                </div>
            </ContainerPx>
        </div>
    )
}

export default Subscription
