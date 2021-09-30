import React from 'react'
import ClientCard from './ClientCard'

const Featured = () => {
    return (
        <div className="bg-white">
            <div className="grid grid-cols-12">
                <div className="col-start-3 col-span-8">
                    <div className="flex items-center h-[40rem]">
                        <div className="w-full">
                            <div className="text-4xl font-bold">
                                Featured Clients
                            </div>
                            <div className="text-xl w-[18rem] opacity-[0.7] mt-3">
                                Check out our featured clients and browse their latest jobs.
                            </div>
                            <div className="mt-14">
                                <div className="grid grid-rows-2 grid-cols-4 gap-10 px-3">
                                    <ClientCard title="Tokopedia" icon="" />
                                    <ClientCard title="Dropbox" icon="" />
                                    <ClientCard title="Evernote" icon="" />
                                    <ClientCard title="Mailchimp" icon="" />
                                    <ClientCard title="Airbnb" icon="" />
                                    <ClientCard title="Airbnb" icon="" />
                                    <ClientCard title="Twitch" icon="" />
                                    <ClientCard title="Amazon" icon="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Featured
