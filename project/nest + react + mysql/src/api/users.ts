import { $fetch, HTTP_PREFIX } from '@/common/request'

/**
 * 用户登陆 
 *  
 * @param {*} params
 * @return {*} 
 */
export const handleUserLogin = (params: { email: string, password: string }) => {
    return $fetch.post(`${HTTP_PREFIX}/api/users/login`, params)
}

/**
 * 用户注册
 *  
 * @param {*} params
 * @return {*} 
 */
export const handleUserRegistration = (params: { username: string, email: string, password: string }) => {
    return $fetch.post(`${HTTP_PREFIX}/api/users/login`, params)
}

/**
 * 获取用户信息
 *  
 * @param {*} params
 * @return {*} 
 */
export const fetchCurrentUser = () => {
    return $fetch.post(`${HTTP_PREFIX}/api/user`)
}

/**
 * 更新用户信息
 *  
 * @param {*} params
 * @return {*} 
 */
export const updateUser = (params: { email: string, username: string, password: string, image: string, bio: string }) => {
    return $fetch.put(`${HTTP_PREFIX}/api/user`, params)
}

/**
 * 关注
 *  
 * @param {*} params
 * @return {*} 
 */
export const handleFollowUser = (username: string) => {
    return $fetch.post(`${HTTP_PREFIX}/api/profiles/${username}/follow`)
}

/**
 * 取消关注
 *  
 * @param {*} params
 * @return {*} 
 */
export const handleUnfollowUser = (username: string) => {
    return $fetch.delete(`${HTTP_PREFIX}/api/profiles/${username}/follow`)
}

/**
 * 获取用户信息
 *  
 * @param {*} params
 * @return {*} 
 */
 export const fetchUserInfo = (username: string) => {
    return $fetch.get(`${HTTP_PREFIX}/api/profiles/${username}`)
}

