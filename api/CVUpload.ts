import responseApi from "./responseApi"
import { userCv } from "./urls"



export const uploadCv = async (data: FormData) => {
    return responseApi(userCv, 'post', data)
}


export const deleteCv = async (id: number) => {
    return responseApi(`${userCv}${id}/`, 'delete')
}

export const getCv = () => {
    return responseApi(userCv, 'get')
}


