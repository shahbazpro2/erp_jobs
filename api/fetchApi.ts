import axios from "axios"
import ObjectToArray from "../components/functions/ObjectToArray"

const fetchApi = (url: string, data: {}) => axios.post(url, data)
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

export default fetchApi

