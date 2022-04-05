import request from '@/utils/request.js';

/**
 * 分页获取评论
 */
export async function getCommentByPageApi(blogId, page = 1, limit = 10, keyword = '') {
  return await request.get('/api/comment', {
    blogId,
    page,
    limit,
    keyword,
  });
}

/**
 * 提交评论
 * @param {*} data 
 * @returns 
 */
export async function submitCommentApi(data) {
  return await request.post('/api/comment', data);
}
