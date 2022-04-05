import request from '@/utils/request.js';

/**
 * 获取首页标语
 */
export async function getBannerApi() {
  return await request.get('/api/banner');
}
