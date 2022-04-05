import { getAboutApi } from '@/api/about.js';


export default {
  namespaced: true,
	state: {
    loading: false,
    data: "",
  },
  mutations: {
    setLoading(state, payload) {
      state.loading = payload;
    },
    setData(state, payload) {
      state.data = payload;
    },
  },
  actions: {
    async fetchAbout(ctx) {
      ctx.commit("setData", 'http://wuyao-fee.gitee.io/resume-cv/');
      if (ctx.state.data) {
        return;
      }
      ctx.commit("setLoading", true);
      const res = await getAboutApi();
      console.log(res);
			console.log(res, 'resAbout');
			ctx.commit("setData", res);
      // console.log(ctx.state.data);
      // ctx.commit("setData", '');
      ctx.commit("setLoading", false);
    },
  },
}