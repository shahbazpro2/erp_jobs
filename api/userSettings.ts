import responseApi from "./responseApi"
import { changePassword } from "./urls"

interface PasswordChange {
    old_password: string,
    new_password1: string,
    new_password2: string,
}

export const apiPasswordChange = async (data: PasswordChange) => {
    return responseApi(changePassword, 'post', data)
}


