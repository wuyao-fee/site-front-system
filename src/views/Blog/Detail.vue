<template>
  <Layout>
    <div class="main-container" ref="mainContainer" v-loading="isLoading">
      <BlogDetail :blogData="data"  v-if="data"/>
      <BlogComment />
    </div>
    <template #right>
      <div class="right-container"  v-loading="isLoading">
        <BlogToc :tocList="data.toc"  v-if="data"/>
      </div>
    </template>
  </Layout>
</template>

<script>
import Layout from '@/components/Layout';
import BlogDetail from './components/BlogDetail.vue';
import BlogToc from './components/BlogToc.vue';
import { getBlogByIdApi } from '@/api/blog.js';
import BlogComment from './components/BlogComment.vue';
import toTop from '@/mixins/toTop.js';
export default {
  mixins: [toTop('mainContainer')],
  async created() {
    const res =  await this.fetchData();
    this.data = res;
    this.isLoading = false;
  },
  data() {
    return {
      data: {},
      isLoading: true,
    }
  },
  updated() {
    const hash = location.hash;
    location.hash = "";
    setTimeout(() => {
      location.hash = hash;
    }, 50);
  },
  components: {
    Layout,
    BlogDetail,
    BlogComment,
    BlogToc,
  },
  methods: {
    async fetchData() {
      const res = await getBlogByIdApi(this.$route.params.blogId);
      if (!res) {
        this.$router.push('/404');
        return;
      }
      return res;
    },
    //滚动条事件（传递到时间总线上）
    handleScroll() {
      this.$EventBus.$emit('mainScroll', this.$refs.mainContainer);
    },
    //设置滚动条处理事件
    handleSetMainScroll(scrollTop) {
      this.$refs.mainContainer.scrollTop = scrollTop;
    }
  }
}
</script>

<style lang='less' scoped>
.main-container {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  box-sizing: border-box;
  scroll-behavior: smooth;
  position: relative;
}

.right-container {
  position: relative;
  width: 300px;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
}
</style>