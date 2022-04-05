import request from '@/utils/request.js';

/**
 * 分页获取留言
 */
export async function getMessageByPageApi(page = 1, limit = 10, keyword = '') {
  return await request.get('/api/message', {
    page,
    limit,
    keyword,
  });
}


/**
 * 提交留言
 */
 export async function addMessageApi(data) {
  return await request.post('/api/message', data);
}
