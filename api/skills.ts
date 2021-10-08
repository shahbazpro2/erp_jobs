import responseApi from "./responseApi"
import { userSkills } from "./urls"

type AllSkill = {
    user: string,
    skills: number[]
}


export const addUserSkills = async (data: AllSkill) => {
    return responseApi(userSkills, 'post', data)
}

export const updateUserSkills = async (data: AllSkill, id: string) => {
    return responseApi(`${userSkills}${id}`, 'put', data)
}

export const getUserSkills = () => {
    return responseApi(userSkills, 'get')
}


