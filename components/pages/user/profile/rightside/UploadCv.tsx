import BoxWrapper from '@components/common/boxWrapper/BoxWrapper'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Input } from '@mui/material'
import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload';
import ClearIcon from '@mui/icons-material/Clear';
import { deleteCv, getCv, uploadCv } from '@api/CVUpload';
import FeedbackApi from '@components/common/feedback/FeedbackAPi';
import LoadingButton from '@mui/lab/LoadingButton';
import stringShort from '@components/functions/stringShort';
import { saveAs } from 'file-saver';
import DialogAlert from '@components/common/alerts/DialogAlert';

interface CV {
    id: number,
    name: string,
    file: string
}

const UploadCv = () => {
    const [loading, setLoading] = useState(false)
    const [allCv, setAllCv] = useState<CV[]>([])
    const [apiSuccess, setApiSuccess] = useState<string[]>([])
    const [apiError, setApiError] = useState<string[]>([])
    const [delId, setDelId] = useState<number>(-1)


    useEffect(() => {
        (async () => {
            const res = await getCv();
            let data: CV[] = []
            if (!res?.error) {
                res?.data?.map((cv: any) => {
                    const name = cv.file?.split('/')
                    if (name.length) {
                        data.push({
                            id: cv.id,
                            name: name.pop(),
                            file: cv.file
                        })
                    }
                })
            }
            setAllCv(data)
        })()
    }, [apiSuccess])

    const onUploadCv = async (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoading(true)
        const formData = new FormData()

        if (e.target.files) {
            formData.append('file', e.target.files[0])
        }

        const res = await uploadCv(formData)

        if (res?.error) {
            setApiError(res?.data)
            setLoading(false)
            return
        }
        setLoading(false)
        setApiSuccess(['File uploaded successfully'])

    }

    const onDelete = async () => {
        const id = delId
        setDelId(-1)
        const res = await deleteCv(id)
        if (!res?.error) {
            setApiSuccess(['Cv deleted successfully'])
            return
        }

        setApiError(res?.data)
    }


    return (
        <div>
            <BoxWrapper className="px-4 py-5 space-y-7" >
                <div className="flex flex-grow-1 items-center space-x-3">
                    <Image src="/assets/images/file.svg" width="40%" height="40%" alt="file" />
                    <div className="sm:text-base text-sm font-bold">
                        Upload CV Files
                    </div>
                </div>

                <div className="space-y-4">
                    {allCv.map((cv, index) => (
                        <div key={index} className="flex items-center justify-between">
                            <div className="sm:text-base text-sm subtitle-clr">
                                {stringShort(cv.name, 20)}
                            </div>
                            <div className="action subtitle-clr space-x-2">
                                <SimCardDownloadIcon onClick={() => saveAs(cv.file, cv.name)} className="cursor-pointer success-clr-hover" sx={{ width: '18px' }} />
                                <ClearIcon onClick={() => setDelId(cv.id)} className="cursor-pointer danger-clr-hover" />
                            </div>
                        </div>
                    ))}
                </div>


                <div>
                    <label htmlFor="contained-button-file">
                        <Input onChange={onUploadCv} id="contained-button-file" sx={{ display: 'none' }} type="file" />
                        <LoadingButton variant="outlined" loading={loading} component="span" fullWidth>Add New</LoadingButton>
                    </label>
                </div>

            </BoxWrapper>
            <DialogAlert open={delId < 0 ? false : true} title="Are to sure to delete cv?" handleClose={() => setDelId(-1)} handleAccept={onDelete} />
            <FeedbackApi setApiError={setApiError} setApiSuccess={setApiSuccess} apiError={apiError} apiSuccess={apiSuccess} />
        </div>
    )
}

export default UploadCv
