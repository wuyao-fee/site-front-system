import request from '@/utils/request.js';

/**
 * 分页获取博客列表
 * @param {*} page 
 * @param {*} limit 
 * @param {*} keyword 
 * @param {*} categoryId 
 * @returns 
 */
export async function getBlogByPageApi(page = 1, limit = 10, categoryId = -1, keyword = '') {
    return await request('/api/blog', {
        params: {
            page,
            limit,
            categoryId,
            keyword,
        }
    });
}

/**
 * 获取博客分类
 * @returns 
 */
export async function getBlogTypeApi() {
    return await request('/api/blogtype');
}

/**
 * 通过id获取单篇博客
 * @param {*} id 
 */
export async function getBlogByIdApi(id) {
    return await request(`/api/blog/${id}`);
}

/**
 * 分页获取评论
 * @param {*} page 
 * @param {*} limit 
 * @param {*} blogid 
 * @param {*} keyword 
 */
export async function getCommentByPage(page = 1, limit = 10, blogid = -1) {
    return await request('/api/comment', {
        page,
        limit,
        blogid,
        keyword,
    });
}