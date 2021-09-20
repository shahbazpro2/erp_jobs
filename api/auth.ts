import responseApi from "./responseApi"
import { getUserUrl, loginUserUrl, registerUserUrl } from "./urls"

interface RegisterUser {
    username: string,
    first_name: string,
    last_name: string,
    password: string,
    password2: string,
    email: string
}
export const registerUser = async (data: RegisterUser) => {
    return responseApi(registerUserUrl, 'post', data)
}


interface LoginUser {
    password: string,
    username: string
}
export const loginUser = (data: LoginUser) => {
    return responseApi(loginUserUrl, 'post', data, false)
}

export const getUserApi = () => {
    return responseApi(getUserUrl, 'get')
}