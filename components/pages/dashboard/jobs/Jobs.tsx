import BoxWrapper from '@components/common/boxWrapper/BoxWrapper'
import DualButton from '@components/common/dualButton/DualButton'
import { Divider, TextField } from '@mui/material'
import React from 'react'
import DetailCard from './DetailCard'
import JobsCard from './JobsCard'
import PlanCard from './PlanCard'

const Jobs = () => {
    return (
        <div>
            <div className="grid grid-cols-4 gap-10">
                <DetailCard title="Total Job Ads" count="09" />
                <DetailCard title="Active Ads" count="04" />
                <DetailCard title="Inactive Ads" count="05" />
                <PlanCard plan="Silver Package" cv="55" days="25" />
            </div>
            <div className="mt-14">
                <div className="grid grid-cols-6">
                    <div className="text-lg col-span-4 flex items-center">
                        Active Jobs
                    </div>
                    <div className="col-span-2">
                        <DualButton
                            first="Active Jobs"
                            second="Expired Jobs"
                            active="Active Jobs"
                            firstClick={() => console.log('click')}
                            secondClick={() => console.log('click')}
                        />
                    </div>
                </div>
            </div>
            <div className="my-5">
                <Divider />
            </div>
            <div className="grid grid-cols-8 gap-5 mb-5">
                <div className="col-span-4">
                    <TextField variant="outlined" sx={{
                        '.MuiInputBase-formControl': {
                            borderRadius: '7px', '.MuiOutlinedInput-notchedOutline': { borderColor: '#d6d6d6' }
                        }
                    }} placeholder="Search Job" fullWidth />
                </div>
                <div className="col-span-2">
                    <TextField sx={{
                        '.MuiInputBase-formControl': {
                            borderRadius: '7px', '.MuiOutlinedInput-notchedOutline': { borderColor: '#d6d6d6' }
                        }
                    }} placeholder="Search Job" type="date" fullWidth />
                </div>
                <div className="col-span-2">
                    <BoxWrapper className="py-[0.7rem] px-3">Sort by:</BoxWrapper>
                </div>

            </div>
            <div className="space-y-5">
                <JobsCard />
            </div>
        </div>
    )
}

export default Jobs
