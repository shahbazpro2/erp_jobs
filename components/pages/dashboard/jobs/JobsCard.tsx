import BoxWrapper from '@components/common/boxWrapper/BoxWrapper'
import React from 'react'
import Image from 'next/image'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import EditIcon from '@mui/icons-material/Edit';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { Button } from '@mui/material'

const JobsCard = () => {
    return (
        <BoxWrapper className="py-3 px-4">
            <div className="flex justify-between items-center">
                <div className="flex items-start">
                    <Image src="/assets/images/mailchimp.png" width="60%" height="60%" alt="image" />
                    <div className="ml-3 text-base">
                        <div className="font-semibold">
                            Lead Product Design
                        </div>
                        <div className="subtitle-clr space-x-1">
                            <span>
                                Jakarta, Indonesia
                            </span>
                            <LocationOnIcon sx={{ width: '18px' }} />
                        </div>
                        <div className="subtitle-clr">
                            Ad Expiry : 20 Aug
                        </div>
                    </div>

                </div>
                <div className="space-x-2 subtitle-clr">
                    <Button variant="outlined" sx={{ padding: '5px 10px', border: '1px solid #E2E2EA' }} color="inherit" startIcon={<PersonOutlineIcon fontSize="small" />}><span className="text-base">
                        10 Applicants</span></Button>
                    <Button variant="outlined" sx={{ padding: '5px 10px', border: '1px solid #E2E2EA' }} color="inherit" startIcon={<PersonOutlineIcon fontSize="small" />}><span className="text-base">4 Shortlisted</span></Button>
                    <Button variant="outlined" sx={{ padding: '5px 2px', border: '1px solid #E2E2EA' }} color="inherit"><span className="text-base"><EditIcon fontSize="small" /></span></Button>
                </div>

            </div>
        </BoxWrapper>
    )
}

export default JobsCard
