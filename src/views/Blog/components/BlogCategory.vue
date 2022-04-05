<template>
  <div class="blog-category-container" v-loading="isLoading">
    <h2>博客分类</h2> 
    <TocList :tocList="tocList" @select="handleSelect"/>
  </div>
</template>

<script>
import TocList from './TocList.vue';
import { getBlogTypeApi } from '@/api/blog.js';
export default {
  async created() {
    const res = await this.fetchData();
    this.data = res;
    this.isLoading = false;
  },
  data() {
    return {
      data: [],
      isLoading: true,
    }
  },
  components: {
    TocList,
  },
  computed: {
    categoryId() {
      return this.$route.params.categoryId || -1;
    },
    limit() {
      return +this.$route.query.limit || 10;
    },
    //修改成博客分类需要的数据
    tocList() {
      //添加一个总数total
      const total = this.data.reduce((a, b) => a + b.articleCount, 0);
      const result = [
        { name: '全部', id: -1, articleCount: total },
        ...this.data,
      ];
      //添加isSelect选中和aside篇数
      const res = result.map((item) => ({
        ...item,
        isSelect: item.id === this.categoryId,
        aside: `${item.articleCount}篇`
      }));
      // console.log(res);
      return res;
    }
  },
  methods: {
    //获取数据
    async fetchData() {
      return await getBlogTypeApi();
    },
    handleSelect(item) {
      // console.log(item.name);
      // const query = {
      //   page: 1,
      //   limit: this.limit,
      // };
      if (item.id === -1) {
        this.$router.push({
          name: "Blog",
          query: {
            page: 1,
            limit: this.limit,
          },
        });
      } else {
        this.$router.push({
          name: 'BlogCategory',
          query: {
            page: 1,
            limit: this.limit,
            keyword: item.name,
          },
          params: {
            categoryId: item.id,
          }
        });
      }
    }
  }
}
</script>

<style lang='less' scoped>
.blog-category-container {
  position: relative;
  width: 300px;
  height: 100%;
  box-sizing: border-box;
  padding: 20px;
  overflow-y: auto;
  h2 {
    font-size: 1em;
    font-weight: bold;
    letter-spacing: 2px;
    margin: 0;
  }
}
</style>