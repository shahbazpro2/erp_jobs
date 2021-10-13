import ContainerPx from '@components/common/container/ContainerPx'
import React from 'react'
import ClientCard from './ClientCard'

const Featured = () => {
    return (
        <div className="bg-white">
            <ContainerPx>
                <div className="flex items-center justify-center py-14 md:py-20 lg:py-32">
                    <div className="w-full">
                        <div className="text-4xl font-bold">
                            Featured Clients
                        </div>
                        <div className="text-xl w-[100%] md:w-[18rem] opacity-[0.7] mt-3">
                            Check out our featured clients and browse their latest jobs.
                        </div>
                        <div className="mt-16">
                            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-10 px-3">
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
            </ContainerPx>
        </div>
    )
}

export default Featured
