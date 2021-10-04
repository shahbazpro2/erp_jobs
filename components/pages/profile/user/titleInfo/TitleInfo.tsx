import React from 'react'
import BoxWrapper from '@components/common/boxWrapper/BoxWrapper'
import Container from '@components/common/container/Container'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinearProgress from '@mui/material/LinearProgress';
import LinearProgressWithLabel from '@components/common/linearProgressWithLabel/LinearProgressWithLabel';

const TitleInfo = () => {
    return (
        <div className="bg-[#F2F2F2]">
            <Container>
                <div className="grid grid-flow-col gap-6 py-16">
                    <div className="col-span-9">
                        <BoxWrapper>
                            <div className="grid grid-flow-col">
                                <div className="col-span-10">
                                    <div className="text-3xl font-bold">
                                        Muhammad Arslan Ali
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
                    </div>
                    <div className="col-span-3">
                        <BoxWrapper>
                            <div className="text-base font-bold">
                                Profile Completion
                            </div>
                            <LinearProgressWithLabel color="success" value={85} />
                        </BoxWrapper>
                    </div>
                </div>

            </Container>
        </div>

    )
}

export default TitleInfo
