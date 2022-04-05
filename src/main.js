import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/global.less';
import '@/mock';              //模拟数据
import showMessage from '@/utils/showMessage.js';
import '@/utils/EventBus.js';

Vue.config.productionTip = false

//注入消息提示
Vue.prototype.$showMessage = showMessage;

//全局注册-自定义指令
import vLoading from '@/directives/loading';
import vLazy from '@/directives/lazy';
Vue.directive('loading', vLoading);
Vue.directive('lazy', vLazy);

store.dispatch('setting/fetchSetting');


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
