import axios from "axios"
import { registerUserUrl } from "./urls"

interface RegisterUser {
    username: string,
    first_name: string,
    last_name: string,
    password: string,
    password2: string,
    email: string
}
export const registerUser = async (data: RegisterUser) => {
    const res = await axios.post(registerUserUrl, data)
    return res

}