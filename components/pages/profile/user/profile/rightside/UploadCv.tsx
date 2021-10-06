import BoxWrapper from '@components/common/boxWrapper/BoxWrapper'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Button, Input } from '@mui/material'
import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload';
import ClearIcon from '@mui/icons-material/Clear';
import { getCv, uploadCv } from '@api/CVUpload';
import FeedbackApi from '@components/common/feedback/FeedbackAPi';
import LoadingButton from '@mui/lab/LoadingButton';

const UploadCv = () => {
    const [loading, setLoading] = useState(false)
    const [apiSuccess, setApiSuccess] = useState<string[]>([])
    const [apiError, setApiError] = useState<string[]>([])


    useEffect(() => {
        (async () => {
            const res = await getCv();
            console.log('res', res)
        })()
    }, [])

    const onUploadCv = async (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoading(true)
        const formData = new FormData()

        if (e.target.files) {
            formData.append('file', e.target.files[0])
        }

        const res = await uploadCv(formData)

        if (res?.error) {
            setApiError(res?.data)
            return
        }
        setLoading(false)
        setApiSuccess(['File uploaded successfully'])

    }



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
                <div>
                    <label htmlFor="contained-button-file">
                        <Input onChange={onUploadCv} id="contained-button-file" sx={{ display: 'none' }} type="file" />
                        <LoadingButton variant="outlined" loading={loading} component="span" fullWidth>Add New</LoadingButton>
                    </label>
                </div>

            </BoxWrapper>
            <FeedbackApi setApiError={setApiError} setApiSuccess={setApiSuccess} apiError={apiError} apiSuccess={apiSuccess} />
        </div>
    )
}

export default UploadCv
