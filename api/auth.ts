import axios from "axios"
import { registerUserUrl } from "./urls"
import ObjectToArray from '../components/functions/ObjectToArray'

interface RegisterUser {
    username: string,
    first_name: string,
    last_name: string,
    password: string,
    password2: string,
    email: string
}
export const registerUser = async (data: RegisterUser) => {
    const res = axios.post(registerUserUrl, data)
        .then(res => {
            return { error: false, data: res.data }
        })
        .catch(err => {
            if (err.response?.data) {
                return { error: true, data: ObjectToArray(err.response?.data) }
            } else if (err.message === "Network Error") {
                return { error: true, data: ['There was a network error.'] }
            } else
                return { error: true, data: ['There is something went wrong.'] }
        })
    return res

}