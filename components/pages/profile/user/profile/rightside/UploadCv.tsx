import BoxWrapper from '@components/common/boxWrapper/BoxWrapper'
import React from 'react'
import Image from 'next/image'
import { Button } from '@mui/material'
import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload';
import ClearIcon from '@mui/icons-material/Clear';

const UploadCv = () => {
    return (
        <div>
            <BoxWrapper className="px-4 py-5 space-y-7" >
                <div className="flex flex-grow-1 items-center space-x-3">
                    <Image src="/assets/images/file.svg" width="40%" height="40%" alt="file" />
                    <div className="text-base font-bold">
                        Upload CV Files
                    </div>
                </div>
                <div className="space-y-3">
                    <div className="flex items-center justify-between">
                        <div className="text-base subtitle-clr">
                            Roxie Ward
                        </div>
                        <div className="action subtitle-clr space-x-2">
                            <SimCardDownloadIcon className="cursor-pointer success-clr-hover" sx={{ width: '18px' }} />
                            <ClearIcon className="cursor-pointer danger-clr-hover" />
                        </div>
                    </div>
                </div>
                <Button variant="outlined" fullWidth>Add New</Button>

            </BoxWrapper>
        </div>
    )
}

export default UploadCv
