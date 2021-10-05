import { getUserCertificates } from '@api/Certificates'
import React, { useEffect, useState } from 'react'
import SimpleWrapper from '../common/SimpleWrapper'
import Certificates from './Certificates'

const CertificatesWrapper = () => {
    const [data, setData] = useState([])

    useEffect(() => {

        //allCareers()
        (async () => {
            const res = await getUserCertificates()
            if (!res?.error) {
                setData(res?.data)
            }
        })()
    }, [])

    return (
        <SimpleWrapper title="Certificates">
            <Certificates data={data} />
        </SimpleWrapper>
    )
}

export default CertificatesWrapper
