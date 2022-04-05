//事件总线EventBus

// const listeners = {};

// export default {
//     /**
//      * 监听事件
//      * @param {String} eventName    事件名称 
//      * @param {Function} handle     处理函数
//      */
//     $on(eventName, handle) {
//         //没有就初始化
//         if (!listeners[eventName]) {
//             listeners[eventName] = new Set();
//         }
//         //有就添加新的处理函数
//         listeners[eventName].add(handle);
//     },
//     /**
//      * 销毁事件
//      * @param {String} eventName    事件名称 
//      * @param {Functino} handle     处理函数
//      */
//     $off(eventName, handle) {
//         //没有就直接返回
//         if (!listeners[eventName]) {
//             return;
//         }
//         //有就移出处理函数
//         listeners[eventName].delete(handle);
//     },
//     /**
//      * 触发事件
//      * @param {String} eventName    事件名称 
//      * @param  {...any} args        数据参数
//      */
//     $emit(eventName, ...args) {
//         //没有就直接返回
//         if (!listeners[eventName]) {
//             return;
//         }
//         //有就逐个执行数组中的处理函数
//         for (const handle of listeners[eventName]) {
//             handle(...args);
//         }
//     }
// }


import Vue from 'vue';
/**
 * 事件名：mainScroll
 * 含义：主区域滚动条位置变化后触发
 * 参数：
 *      - 滚动的dom元素，如果为undefined，则表示dom元素已经不存在。
 * 
 * 
 * 事件名：setMainScroll
 * 含义：需要设置主区域滚动条位置时触发
 * 参数：
 *      - 滚动高度
 */
const app = new Vue({});
Vue.prototype.$EventBus = app;
export default app;