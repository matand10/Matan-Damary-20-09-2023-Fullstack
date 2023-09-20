import axios, { AxiosResponse } from 'axios'
import { EndPoints } from '../config/config'

export interface AppRequest<T> {
    status: string
    content: T
}

export const LOCAL = `${EndPoints.HTTP_PROTOCOL}${EndPoints.LOCAL_HOST}`
export const SERVER = `${EndPoints.HTTPS_PROTOCOL}`
export const BASE_URL = process.env.NODE_ENV === 'production' ? SERVER : LOCAL

export const httpService = {
    get(endpoint: string, data: any) {
        return ajax(endpoint, 'GET', data)
    },
    post(endpoint: string, data: any) {
        return ajax(endpoint, 'POST', data)
    },
    put(endpoint: string, data: any) {
        return ajax(endpoint, 'PUT', data)
    },
    delete(endpoint: string, data: any) {
        return ajax(endpoint, 'DELETE', data)
    }
}

async function ajax(endpoint: string, method = 'GET', data = null) {
    try {
        const URL = `${BASE_URL}${endpoint}`
        const res: AxiosResponse = await axios({
            url: URL,
            method,
            data,
            params: (method === 'GET') ? data : null,
        })
        return res.data
    } catch (err) {
        throw err
    }
}