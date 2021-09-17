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
export const registerUser = (data: RegisterUser) => {
    axios.post(registerUserUrl, data)
        .then(res => console.log(res.data))
        .catch(err => console.log(err))

}