import axios from 'axios'
import qs from 'qs'

let instance = axios.create({
    baseURL: '/',
    timeout: 10000,
    headers: {
        'content-type': 'application/x-www-form-urlencoded'
    }
})

// 请求拦截器
instance.interceptors.request.use(config => {
    config.data = qs.stringify(Object.assign(config.data || {}, {
        _timestamp: new Date().getTime()
    }))
    return config
}, err => {
    return Promise.reject(err)
})

// 响应拦截器
instance.interceptors.response.use(response => {
    return response.data
}, error => {
    return Promise.reject(error)
})

/**
 * 默认接口前缀
 */
export const HTTP_PREFIX = process.env.NODE_ENV === 'development' ? '/api' : '/release_api'

export const Interface = instance