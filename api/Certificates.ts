import responseApi from "./responseApi"
import { userCertificates } from "./urls"



interface AddCertificate {
    certificate_title: string,
    company: string,
    date: string,
}
export const addUserCertificate = async (data: AddCertificate) => {
    return responseApi(userCertificates, 'post', data)
}

export const updateUserCertificate = async (data: AddCertificate, id: string) => {
    return responseApi(`${userCertificates}${id}/`, 'put', data)
}

export const deleteCertificate = async (id: number) => {
    return responseApi(`${userCertificates}${id}/`, 'delete')
}

export const getUserCertificates = () => {
    return responseApi(userCertificates, 'get')
}


