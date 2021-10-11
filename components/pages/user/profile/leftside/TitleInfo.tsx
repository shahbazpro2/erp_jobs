import React from 'react'
import BoxWrapper from '@components/common/boxWrapper/BoxWrapper'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import capitalizeFirstLetter from '@components/functions/capitalizeFirstLetter';


const TitleInfo = ({ data, user }: any) => {

    return (
        <BoxWrapper>
            <div className="grid grid-flow-col">
                <div className="col-span-10">
                    <div className="text-3xl font-bold">
                        {`${capitalizeFirstLetter(user?.first_name)} ${capitalizeFirstLetter(user?.last_name)}`}
                    </div>
                    <div className="flex mt-2 space-x-2">
                        <div className="text-base subtitle-clr">
                            {data?.jobTitle.name ? capitalizeFirstLetter(data?.jobTitle.name) : 'Guest'}
                        </div> <div>|</div> <div className="subtitle-clr">{user.email}</div>
                    </div>

                    <div className="flex mt-4">
                        {data?.residenceCountry && <LocationOnIcon sx={{ width: 15 }} />}
                        <div className="ml-1">{capitalizeFirstLetter(data?.residenceCountry)}</div>
                        <div className="subtitle-clr ml-5 space-y-2">
                            <div className="flex items-center space-x-2">
                                <div className="rounded-lg w-2 h-2 bg-[#3DD598]">
                                </div>
                                <div>
                                    {data?.jobStatus}
                                </div>
                            </div>
                            <div className="flex items-center space-x-2">
                                <div className="rounded-lg w-2 h-2 bg-[#3DD598]">
                                </div>
                                <div>
                                    {data?.profileVisibility}
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
