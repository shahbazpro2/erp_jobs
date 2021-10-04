import React from 'react'
import SubscriptionForm from './SubscriptionForm'

const Subscription = () => {
    return (
        <div className="bg-white py-20">
            <div className="grid grid-cols-12">
                <div className="col-start-3 col-span-8">
                    <div className="grid grid-cols-2">
                        <div className="text-3xl">
                            Subscribe to our newsletter to get latest jobs on your inbox.
                        </div>
                        <div className="subscribe">
                            <SubscriptionForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Subscription