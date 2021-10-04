import responseApi from "./responseApi"
import { getCertificates } from "./urls"


export const getUserCertificates = () => {
    return responseApi(getCertificates, 'get')
}