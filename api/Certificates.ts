import { CertificateProps } from "@components/pages/user/profile/leftside/certificates/types"
import responseApi from "./responseApi"
import { userCertificates } from "./urls"




export const addUserCertificate = async (data: CertificateProps) => {
    return responseApi(userCertificates, 'post', data)
}

export const updateUserCertificate = async (data: CertificateProps, id: string) => {
    return responseApi(`${userCertificates}${id}/`, 'put', data)
}

export const deleteCertificate = async (id: number) => {
    return responseApi(`${userCertificates}${id}/`, 'delete')
}

export const getUserCertificates = () => {
    return responseApi(userCertificates, 'get')
}


