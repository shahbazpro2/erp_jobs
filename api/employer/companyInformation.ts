import { empCompanyInformation } from "@api/urls"
import responseApi from "../responseApi"


export const addCompanyInformation = async (data: FormData) => {
    return responseApi(empCompanyInformation, 'post', data)
}

export const getCompanyInformation = async () => {
    return responseApi(empCompanyInformation, 'get')
}



