import BoxWrapper from '@components/common/boxWrapper/BoxWrapper'
import React from 'react'
import Image from 'next/image'
import { Button } from '@mui/material'

const UploadCv = () => {
    return (
        <div>
            <BoxWrapper className="px-4 py-5" >
                <div className="flex flex-grow-1 items-center space-x-3">
                    <Image src="/assets/images/file.svg" width="40%" height="40%" alt="file" />
                    <div className="text-base font-bold">
                        Upload CV Files
                    </div>
                </div>

                <div className="mt-7">
                    <Button variant="outlined" fullWidth>Add New</Button>
                </div>

            </BoxWrapper>
        </div>
    )
}

export default UploadCv
