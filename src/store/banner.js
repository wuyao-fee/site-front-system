import { getBannerApi } from '@/api/banner.js';
import { SERVERURL } from '@/utils/urlConfig.js';

export default {
  namespaced: true,
	state: {
		loading: false,
		data: [],
	},
	mutations: {
		setLoading(state, payload) {
			state.loading = payload;
		},
		setData(state, payload) {
			state.data = payload;
		}
	},
	actions: {
		async fetchBanner(ctx) {
			// if (ctx.state.data.length) {
			// 	return;
			// }
			ctx.commit('setLoading', true);
			const res = await getBannerApi();
			// for (let item of res) {
			// 	item.midImg2 = `${SERVERURL}${item.midImg}`;
        	// 	item.bigImg2 = `${SERVERURL}${item.bigImg}`;
			// }
			ctx.commit('setData', null);
			ctx.commit('setData', res);
			ctx.commit('setLoading', false);
		}
	}
}