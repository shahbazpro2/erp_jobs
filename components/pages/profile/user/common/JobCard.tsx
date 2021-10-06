import BoxWrapper from '@components/common/boxWrapper/BoxWrapper'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import React from 'react'
import Image from 'next/image'
import { Button } from '@mui/material'

const JobCard = () => {
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
                            Applied : 20 Aug
                        </div>
                    </div>

                </div>
                <Button variant="outlined" disabled>Applied</Button>
            </div>
        </BoxWrapper>
    )
}

export default JobCard
