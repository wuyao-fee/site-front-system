<template>
  <div class="blog-comment-container">
    <CommentMessage
      title="评论列表"
      :subTitle="commentData.total"
      :list="commentData.rows"
      :isListLoading="isLoading"
      @submit="handleSubmit"
    />
  </div>
</template>

<script>
import CommentMessage from "@/components/CommentMessage";
import { getCommentByPageApi, submitCommentApi } from "@/api/comment.js";
import { SERVERURL } from "@/urlConfig.js";
export default {
  async created() {
    const res = await this.fetchData();
    // console.clear();
    for (let item of res.rows) {
      if (item.blog.id === this.blogId) {
        // item.avatar2 = `${SERVERURL}${item.avatar}`;
        this.commentData.rows.push(item);
        this.commentData.total++;
	    }	 
    }
    // this.commentData = res;
    console.log(this.commentData, "da");

    this.$EventBus.$on('mainScroll', this.handleScroll);
  },
  beforeDestory() {
    this.$EventBus.$off('mainScroll', this.handleScroll);
  },
  data() {
    return {
      page: 1,
      limit: 10,
      commentData: {
        //评论数据
        total: 0,
        rows: []
      },
      isLoading: true
    };
  },
  components: {
    CommentMessage
  },
  computed: {
    blogId() {
      return this.$route.params.blogId;
    },
    //判断是否能加载更多数据
    canFetchMore() {
      return this.commentData.rows.length < this.commentData.total;
    }
  },
  methods: {
    //请求评论数据
    async fetchData() {
	    console.clear();
	    console.log(this.$route, 'route');
      return await getCommentByPageApi(this.$route.params.blogId, this.page, this.limit);
    },
    //处理子组件传递的提交评论事件
    async handleSubmit(formData, callback) {
      console.log(formData, '父组件');
      const res = await submitCommentApi({
        blogId: this.blogId,
        ...formData,
      });
      this.commentData.rows.unshift(res);
      this.commentData.total++;
      callback('提交评论成功');
    },
    //加载更多数据（评论）
    async fetchMore() {
      if (!this.canFetchMore) {
        //没有更多数据可以加载了
        return;
      }
      this.isLoading = true;
      this.page++;
      const res = await this.fetchData();
      this.commentData.total = res.total;
      this.commentData.rows = this.commentData.rows.concat(res.rows);
      this.isLoading = false;
    },
    //处理滚动条事件
    handleScroll(dom) {
      if (this.isLoading || !dom) {
        return;
      }
      const range = 100;
      const diff = Math.abs(dom.scrollTop + dom.clientHeight - dom.scrollHeight);
      if (diff <= range) {
        this.fetchMore();
      }
    }
  }
};
</script>

<style lang='less' scoped>
.blog-comment-container {
	margin-top: 200px;
}
</style>
