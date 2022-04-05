import axios from 'axios';
import showMessage from './showMessage1';


//@ 1.创建axios实例
const service = axios.create(
    {
        // baseURL: process.env.VUE_APP_BASE_API,  //添加基础url
        // withCredentials: true,                  //跨域请求时发送cookies
        timeout: 5000                           //请求延时
    }
);

//@ 2.请求拦截器
service.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        console.log(error);
        return Promise.reject(error);
    }
);

//@ 3.响应拦截器
service.interceptors.response.use(
    (response) => {
        if (response.data.code !== 0) {
            showMessage({
                content: response.data.msg,
                type: 'error',
                duration: 1500,
            });
            return null;
        }
        return response.data.data;
    },
    (error) => {
        console.log(error);
        return Promise.reject(error);
    }
);

//@ 4.默认导出
export default service;
