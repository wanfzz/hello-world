import { $fetch, HTTP_PREFIX } from '@/common/request'

/**
 * 获取标签 
 *  
 * @param {*} params
 * @return {*} 
 */
export const fetchTags = () => {
    return $fetch.get(`${HTTP_PREFIX}/api/tags`)
}

