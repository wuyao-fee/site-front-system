<template>
  <div class="blog-detail-container">
    <!-- 博客内容 -->
    <h1>{{ blogData.title }}</h1>
    <div class="aside">
      <span>日期: {{ timestampToTime(blogData.createDate) }}</span>
      <span>浏览: {{ blogData.scanNumber }}</span>
      <a href="#comment-form">
        <span>评论: {{ blogData.commentNumber }}</span>
      </a>
      <router-link
        :to="{
          name: 'BlogCategory',
          params: {
            categoryId: blogData.category.id
          },
          query: {
            page: 1,
            limit: 10,
            keyword: blogData.category.name
          }
        }"
      >
        <span>分类: {{ blogData.category.name }}</span>
      </router-link>
    </div>
    <div v-html="blogData.htmlContent" class="markdown-body"></div>
  </div>
</template>

<script>
// import "highlight.js/styles/github.css";
import "highlight.js/styles/dark.css";
import "@/styles/markdown.css";
import { timestampToTime } from "@/utils/tools.js";
export default {
  props: {
    blogData: {
      type: Object,
      required: true,
      default: () => {}
    }
  },
  methods: {
    timestampToTime
  }
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.blog-detail-container {
  padding: 20px;
  .aside {
    width: 500px;
    font-size: 12px;
    color: @gray;
    span {
      margin-right: 15px;
    }
  }

  .markdown-body {
    margin: 2em 0;
  }
}
</style>
