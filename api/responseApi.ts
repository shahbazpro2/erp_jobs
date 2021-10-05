import axios, { Method } from "axios"
import ObjectToArray from "../components/functions/ObjectToArray"


const responseApi = async (url: string, method: Method, data?: {}, header = true) => {
    if (!navigator.onLine)
        return {
            error: true,
            data: ["Oops! You're offline. Please check your network connection..."]
        }

    let token: any = localStorage.getItem('token')
    if (token)
        token = JSON.parse(token)

    let config = {
        authorization: token && `Token ${token}`,
    }

    try {
        const res = await axios({
            method,
            url,
            data,
            headers: header ? config : {}
        })

        if (res?.data)
            return { error: false, data: res.data }
    } catch (err: any) {
        let data
        if (err.response?.status === 404 || err.response?.status === 500) {
            data = { status: err.response?.status, data: ['Something went wrong.'] }
        }
        else if (err.response?.status !== 404 && err.response?.status !== 500) {

        } else if (err.message === "Network Error") {
            data = { status: 408, data: ['Server is not responding.'] }
        } else
            data = { status: err.response?.status, data: ObjectToArray(err.response?.data) }


        return { error: true, ...data }
    }

}

export default responseApi

