import axios from "axios"
import ObjectToArray from "../components/functions/ObjectToArray"


const responseApi = async (url: string, method: string, data?: {}, header = true) => {
    if (!navigator.onLine) return { error: true, data: ["Oops! You're offline. Please check your network connection..."] }
    let token: any = localStorage.getItem('token')
    if (token)
        token = JSON.parse(token)
    let config = {
        headers: {
            authorization: token && `Token ${token.token}`,
        }
    }
    let res
    try {
        if (method === 'post') {
            res = await axios.post(url, data, header ? config : {})
        } else if (method === 'get') {
            res = await axios.get(url, header ? config : {})
        }
        if (res?.data)
            return { error: false, data: res.data }
    } catch (err: any) {
        if (err.response?.data) {
            return { error: true, status: err.response?.status, data: ObjectToArray(err.response?.data) }
        } else if (err.message === "Network Error") {
            return { error: true, data: ['Server is not responding.'] }
        } else
            return { error: true, data: ['There is something went wrong.'] }
    }

}

export default responseApi

