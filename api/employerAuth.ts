import { createAsyncThunk } from "@reduxjs/toolkit"
import responseApi from "./responseApi"
import { getUserUrl, loginEmployerUrl, registerEmployerUrl, } from "./urls"

interface Register {
    first_name: string,
    last_name: string,
    gender: string,
    password: string,
    password2: string,
    email: string
}
export const registerEmployer = async (data: Register) => {
    return responseApi(registerEmployerUrl, 'post', data)
}

interface Login {
    password: string,
    username: string
}

export const loginEmployer = (data: Login) => {
    return responseApi(loginEmployerUrl, 'post', data, false)
}

interface GetUserApi {
    data: any,
    status: number,
    error: boolean
}
export const getUserApi = createAsyncThunk("auth/getUserApi", async () => {
    return await responseApi(getUserUrl, 'get') as GetUserApi
})