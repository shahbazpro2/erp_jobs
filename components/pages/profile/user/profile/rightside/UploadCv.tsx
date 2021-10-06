import BoxWrapper from '@components/common/boxWrapper/BoxWrapper'
import React from 'react'
import Image from 'next/image'

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

            </BoxWrapper>
        </div>
    )
}

export default UploadCv
