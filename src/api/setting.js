import request from '@/utils/request.js';

/**
 * 获取全局配置
 */
export async function getSettingApi() {
  return await request.get('/api/setting');
}
