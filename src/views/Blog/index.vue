<template>
  <Layout>
    <BlogList />
    <template #right>
      <BlogCategory />
    </template>
  </Layout>
</template>

<script>
import Layout from '@/components/Layout';
import BlogList from './components/BlogList.vue';
import BlogCategory from './components/BlogCategory.vue';
import { getBlogByPageApi, getBlogTypeApi, getBlogByIdApi, getCommentByPage } from '@/api/blog.js';
export default {
  async created() {
    // const res1 = await getBlogByPageApi();
    // console.log(res1, '分页获取博客列表');

    // const res2 = await getBlogTypeApi();
    // console.log(res2, '获取博客分类');

    // //需要出入博客id
    // const res3 = await getBlogByIdApi('60d6bb63a214c8473c32ae29');
    // console.log(res3, '获取单篇博客');

    // //分页获取评论
    // const res4 = await getCommentByPage();
    // console.log(res4, '分页获取评论');
  },
  components: {
    Layout,
    BlogList,
    BlogCategory,
  }
}
</script>

<style>

</style>