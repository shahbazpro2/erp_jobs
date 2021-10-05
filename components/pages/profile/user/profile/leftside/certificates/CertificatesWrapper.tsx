import { getUserCertificates } from '@api/Certificates'
import { RefetchApiContext } from '@context/RefetchApiContext'
import React, { useEffect, useState } from 'react'
import SimpleWrapper from '../common/SimpleWrapper'
import Certificates from './Certificates'

const CertificatesWrapper = () => {
    const [data, setData] = useState([])
    const [refetchApi, setRefetchApi] = useState(false)

    const contextValue = {
        setRefetch: () => {
            setRefetchApi(true)
        }
    }


    useEffect(() => {
        if (refetchApi) {
            getUserCertificatesApi()
        }
    }, [refetchApi])

    useEffect(() => {
        getUserCertificatesApi()
    }, [])


    const getUserCertificatesApi = async () => {
        const res = await getUserCertificates()
        if (!res?.error) {
            setData(res?.data)
            setRefetchApi(false)
        }
    }

    return (
        <RefetchApiContext.Provider value={contextValue}>
            <SimpleWrapper title="Certificates">
                <Certificates data={data} />
            </SimpleWrapper>
        </RefetchApiContext.Provider>
    )
}

export default CertificatesWrapper
