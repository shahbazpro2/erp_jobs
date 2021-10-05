import responseApi from "./responseApi"
import { userSkills } from "./urls"



interface AddSkills {
    skills: string[],
}
export const addUserSkills = async (data: AddSkills) => {
    return responseApi(userSkills, 'post', data)
}

export const updateUserSkills = async (data: AddSkills, id: string) => {
    return responseApi(`${userSkills}${id}`, 'put', data)
}

export const getUserSkills = () => {
    return responseApi(userSkills, 'get')
}


