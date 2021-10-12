import React from 'react'
import BoxWrapper from '@components/common/boxWrapper/BoxWrapper'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import capitalizeFirstLetter from '@components/functions/capitalizeFirstLetter';


const TitleInfo = ({ data, user }: any) => {

    return (
        <BoxWrapper>
            <div className="grid grid-flow-col">
                <div className="col-span-10">
                    <div className="flex md:justify-start justify-center md:text-left text-center">
                        <div>
                            <div className="text-3xl font-bold">
                                {`${capitalizeFirstLetter(user?.first_name)} ${capitalizeFirstLetter(user?.last_name)}`}
                            </div>
                            <div className="flex mt-2 space-x-2 md:justify-start justify-center">
                                <div className="text-base subtitle-clr">
                                    {data?.jobTitle.name ? capitalizeFirstLetter(data?.jobTitle.name) : 'Guest'}
                                </div> <div>|</div> <div className="subtitle-clr">{user.email}</div>
                            </div>

                            <div className="grid md:grid-cols-12 grid-cols-1 mt-4">
                                <div className="col-span-1 flex md:mx-0 mx-auto">
                                    {data?.residenceCountry && <LocationOnIcon sx={{ width: 15 }} />}
                                    <div className="ml-1">{capitalizeFirstLetter(data?.residenceCountry)}</div>
                                </div>
                                <div className="subtitle-clr md:ml-5 flex col-span-6">
                                    <div className="space-y-1">
                                        {data?.jobStatus && <div className="flex space-x-2">
                                            <span className="rounded-lg w-2 h-2 mt-2 bg-[#3DD598]">
                                            </span>
                                            <div>
                                                {data?.jobStatus}
                                            </div>
                                        </div>}
                                        {data?.profileVisibility && <div className="flex space-x-2">
                                            <span className="rounded-lg w-2 h-2 mt-2 bg-[#3DD598]">
                                            </span>
                                            <div>
                                                {data?.profileVisibility}
                                            </div>
                                        </div>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-2">
                </div>
            </div>

        </BoxWrapper>

    )
}

export default TitleInfo
