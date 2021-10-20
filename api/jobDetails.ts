import { JobProps } from "@components/pages/user/jobDetails/types"
import responseApi from "./responseApi"
import { userJobDetails } from "./urls"

interface ApiJobProps extends Omit<JobProps, 'industry' | 'desire_job_title'> {
    industry: number,
    desire_job_title: number
}

export const addUserJobDetails = async (data: ApiJobProps) => {
    return responseApi(userJobDetails, 'post', data)
}


export const getUserJobDetails = () => {
    return responseApi(userJobDetails, 'get')
}


