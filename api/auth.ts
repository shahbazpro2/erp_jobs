import { loginUserUrl, registerUserUrl } from "./urls"
import fetchApi from "./fetchApi"

interface RegisterUser {
    username: string,
    first_name: string,
    last_name: string,
    password: string,
    password2: string,
    email: string
}
export const registerUser = async (data: RegisterUser) => {
    return fetchApi(registerUserUrl, data)
}
interface LoginUser {
    password: string,
    username: string
}
export const loginUser = async (data: LoginUser) => {
    return fetchApi(loginUserUrl, data)
}