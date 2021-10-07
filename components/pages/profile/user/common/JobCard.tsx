import BoxWrapper from '@components/common/boxWrapper/BoxWrapper'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import React from 'react'
import Image from 'next/image'
import { Button } from '@mui/material'


interface Props {
    saved?: boolean
}

const JobCard = ({ saved = false }: Props) => {
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
                            {saved ? 'Saved' : 'Applied'} : 20 Aug
                        </div>
                    </div>

                </div>
                {!saved ? <Button variant="outlined" disabled>Applied</Button> :
                    <div className="space-x-5">
                        <Button variant="outlined">Apply Now</Button>
                        <DeleteOutlineIcon className="cursor-pointer danger-clr-hover" sx={{ width: '27px', height: '27px' }} />
                    </div>
                }
            </div>
        </BoxWrapper>
    )
}

export default JobCard
