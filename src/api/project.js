import request from '@/utils/request.js';

/**
 * 获取项目列表
 */
export async function getProjectListApi() {
    return await request('/api/project');
}