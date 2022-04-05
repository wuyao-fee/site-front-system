import { getProjectListApi } from '@/api/project.js';
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
		async fetchProject(ctx) {
			if (ctx.state.data.length) {
				return;
			}
			ctx.commit('setLoading', true);
			const res = await getProjectListApi();
			// for (let item of res) {
			// 	item.thumb2 = `${SERVERURL}${item.thumb}`;
			// }
			console.log(res, 'projectRes');
			ctx.commit('setData', res);
			ctx.commit('setLoading', false);
			console.log(ctx.state, 'state');
		},
	},
}