import { $fetch, HTTP_PREFIX } from '@/common/request'
import qs from 'qs'

/**
 * 文章列表 
 *  
 * @param {*} params
 * @return {*} 
 */
export const fetchArticlesList = (params: { tag: string, author: string, favorited: string, limit: number, offset: number }) => {
    return $fetch.get(`${HTTP_PREFIX}/api/articles?${qs.stringify(params)}`)
}

/**
 * 文章详情 
 *  
 * @param {*} params
 * @return {*} 
 */
export const fetchArticlesDetail = (slug: string) => {
    return $fetch.get(`${HTTP_PREFIX}/api/articles/${slug}`)
}

/**
 * 创建文章 
 *  
 * @param {*} params
 * @return {*} 
 */
export const createArticles = (params: { title: string, description: string, body: string, tagList: string[] }) => {
    return $fetch.post(`${HTTP_PREFIX}/api/articles`, params)
}

/**
 * 更新文章 
 *  
 * @param {*} params
 * @return {*} 
 */
export const updateArticles = (params: { slug: string, title: string, description: string, body: string, tagList: string[] }) => {
    return $fetch.put(`${HTTP_PREFIX}/api/articles`, params)
}


/**
 * 删除文章 
 *  
 * @param {*} params
 * @return {*} 
 */
export const deleteArticles = (slug: string) => {
    return $fetch.delete(`${HTTP_PREFIX}/api/articles/${slug}`)
}

/**
 * 获取文章评论
 *  
 * @param {*} params
 * @return {*} 
 */
export const fetchArticlesComments = (slug: string) => {
    return $fetch.delete(`${HTTP_PREFIX}/api/articles/${slug}/comments`)
}

/**
 * 添加评论
 *  
 * @param {*} params
 * @return {*} 
 */
export const addArticlesComment = (slug: string, body: string) => {
    return $fetch.post(`${HTTP_PREFIX}/api/articles/${slug}/comments`, body)
}

/**
 * 添加评论
 *  
 * @param {*} params
 * @return {*} 
 */
export const deleteArticlesComment = (slug: string) => {
    return $fetch.delete(`${HTTP_PREFIX}/api/articles/${slug}/comments`)
}

/**
 * 喜欢文章
 *  
 * @param {*} params
 * @return {*} 
 */
 export const handleFavorite = (slug: string) => {
    return $fetch.post(`${HTTP_PREFIX}/api/articles/${slug}/favorite`)
}

/**
 * 不喜欢文章
 *  
 * @param {*} params
 * @return {*} 
 */
export const handleUnfavorite = (slug: string) => {
    return $fetch.delete(`${HTTP_PREFIX}/api/articles/${slug}/favorite`)
}






