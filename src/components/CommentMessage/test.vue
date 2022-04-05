<template>
  <div class="test-container">
		<CommentMessage />
  </div>
</template>

<script>
import CommentMessage from './index.vue';
import { getCommentByPageApi } from '@/api/comment.js';
export default {
	async created() {
		const res = await fetchData();
		console.log(res);
	},
	components: {
		CommentMessage,
	},
	methods: {
		async fetchData() {
			return await getCommentByPageApi('60f8ca03c7517f1c080b2075');
		}
	}
}
</script>

<style lang='less' scoped>
.test-container {
	width: 900px;
	height: 800px;
	border: 1px solid #000;
	margin: 100px auto;
}
</style>