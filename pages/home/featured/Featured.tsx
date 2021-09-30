import React from 'react'
import ClientCard from './ClientCard'

const Featured = () => {
    return (
        <div className="bg-white">
            <div className="grid grid-cols-12">
                <div className="col-start-3 col-span-8">
                    <div className="items-center py-32">
                        <div className="text-4xl font-bold">
                            Featured Clients
                        </div>
                        <div className="text-xl w-[18rem] opacity-[0.7] mt-3">
                            Check out our featured clients and browse their latest jobs.
                        </div>
                        <div className="mt-20">
                            <div className="grid grid-rows-2 grid-cols-4 gap-10 px-3">
                                <ClientCard title="Tokopedia" icon="/assets/images/tokopedia.png" />
                                <ClientCard title="Dropbox" icon="/assets/images/dropbox.png" />
                                <ClientCard title="Evernote" icon="/assets/images/evernote.svg" />
                                <ClientCard title="Mailchimp" icon="/assets/images/mailchimp.png" />
                                <ClientCard title="Airbnb" icon="/assets/images/airbnb.svg" />
                                <ClientCard title="Airbnb" icon="/assets/images/football.svg" />
                                <ClientCard title="Twitch" icon="/assets/images/twitch.svg" />
                                <ClientCard title="Amazon" icon="/assets/images/amazon.svg" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured
