import axios from 'axios'
import env from '../env'
import { getStorage } from '../utils'

const http = axios.create({
    baseURL: env.servidor.host
})

http.interceptors.request.use((config) => {
    let token = getStorage('token')
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`
    }

    return config
}, error => {
    return Promise.reject(error)
})

export default http