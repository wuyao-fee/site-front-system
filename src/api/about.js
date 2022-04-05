import request from '@/utils/request.js';

/**
 * 获取关于页面的url
 */
export async function getAboutApi() {
  return await request.get('/api/about');
}
