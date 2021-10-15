import { JobProps } from "@components/pages/user/jobDetails/types"
import responseApi from "./responseApi"
import { userJobDetails } from "./urls"


export const addUserJobDetails = async (data: JobProps) => {
    return responseApi(userJobDetails, 'post', data)
}


export const getUserJobDetails = () => {
    return responseApi(userJobDetails, 'get')
}


