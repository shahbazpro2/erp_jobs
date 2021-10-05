import React from 'react'
import BoxWrapper from '@components/common/boxWrapper/BoxWrapper'
import LocationOnIcon from '@mui/icons-material/LocationOn';


const TitleInfo = ({ user }: any) => {
    return (

        <BoxWrapper>
            <div className="grid grid-flow-col">
                <div className="col-span-10">
                    <div className="text-3xl font-bold">
                        {user.name}
                    </div>
                    <div className="text-base subtitle-clr">
                        UI/UX Designer
                    </div>
                    <div className="flex mt-4">
                        <LocationOnIcon sx={{ width: 15 }} />
                        <div className="ml-1">Pakistan</div>
                        <div className="subtitle-clr ml-5 space-y-2">
                            <div className="flex items-center space-x-2">
                                <div className="rounded-lg w-2 h-2 bg-[#3DD598]">
                                </div>
                                <div>
                                    Working but looking for new opportunities
                                </div>
                            </div>
                            <div className="flex items-center space-x-2">
                                <div className="rounded-lg w-2 h-2 bg-[#3DD598]">
                                </div>
                                <div>
                                    Last Active: Monday
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-2">
                    profile
                </div>
            </div>

        </BoxWrapper>

    )
}

export default TitleInfo
