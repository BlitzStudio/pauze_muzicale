import axios from "axios"

const URL = (import.meta.env['VITE_DEV_ORIGIN'] ? import.meta.env['VITE_DEV_ORIGIN'] : import.meta.env['VITE_PROD_ORIGIN']) + "/api"


export default axios.create({
    baseURL: URL,
})