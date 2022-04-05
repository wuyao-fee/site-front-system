<template>
  <div class="blog-list-container" v-loading="isLoading" ref="mainContainer">
    <ul class="list-container">
      <li v-for="item in data.rows" :key="item.id">
        <router-link
          :to="{
            name: 'Detail',
            params: {
              blogId: item.id
            }
          }"
          v-if="item.thumb"
          class="img-container"
        >
          <img class="thumb" v-lazy="item.thumb" alt="" />
        </router-link>
        <div class="info-container">
          <router-link :to="{
            name: 'Detail',
            params: {
                blogId: item.id,
            }              
          }">
            <h2 class="title">{{ item.title }}</h2>
          </router-link>
          
          <p class="aside">
            <span class="createDate">日期: {{ item.createDate }}</span>
            <span class="scanNumber">浏览: {{ item.scanNumber }}</span>
            <span class="commentNumber">评论: {{ item.commentNumber }}</span>
            <router-link :to="{
              name: 'BlogCategory',
              params: {
                categoryId: item.category.id,
              },
              query: {
                page: 1,
                limit: routeInfo.limit,
                keyword: item.category.name,
              }
            }">
              <span class="categoryName">分类: {{ item.category.name }}</span>
            </router-link>
            
          </p>
          <div class="description">
            {{ item.description }}
          </div>
        </div>
      </li>
    </ul>
    <Empty v-if="data.rows.length === 0 && !isLoading" />
    <Pager
      class="pager"
      v-if="data.total"
      :current="routeInfo.page"
      :limit="routeInfo.limit"
      :total="data.total"
      :visibleNumber="10"
      @pageChange="handlePageChange"
    />
  </div>
</template>

<script>
import Pager from "@/components/Pager";
import { getBlogByPageApi, getBlogTypeApi } from "@/api/blog.js";
import { SERVERURL } from "@/urlConfig.js";
import { timestampToTime } from "@/utils/tools.js";
import toTop from '@/mixins/toTop.js';
import Empty from '@/components/Empty';
export default {
  mixins: [toTop('mainContainer')],
  async created() {
    await this.fetchData();
  },
  data() {
    return {
      data: {
        total: 0,
        rows: [],
      },
      isLoading: true,
    };
  },
  components: {
    Pager,
    Empty,
  },
  computed: {
    //获取路由信息
    routeInfo() {
      const categoryId = this.$route.params.categoryId || -1;
      const page = +this.$route.query.page || 1;
      const limit = +this.$route.query.limit || 10;
      const keyword = this.$route.query.keyword || "";
      return {
        categoryId,
        page,
        limit,
        keyword
      };
    }
  },
  methods: {
    //请求数据
    async fetchData() {
      if (this.routeInfo.categoryId === -1) {
        const res = await getBlogByPageApi(
          this.routeInfo.page,
          this.routeInfo.limit,
          this.routeInfo.categoryId,
          this.routeInfo.keyword
        );
        this.data = res;
        for (let item of this.data.rows) {
          item.createDate = timestampToTime(item.createDate);
          // if (item.thumb) {
          //   item.thumb2 = `${SERVERURL}${item.thumb}`;
          // }
        }
        this.isLoading = false;
        return this.data;
      } else {
        const resTotal = await getBlogByPageApi();
        const totalNum = resTotal.total;
        const res = await getBlogByPageApi(
          this.routeInfo.page,
          totalNum,
          this.routeInfo.categoryId,
        );
        this.data = {
          total: 0,
          rows: [],
        };
        
        for (let item of res.rows) {
          if(item.category.id === this.routeInfo.categoryId) {
            item.createDate = timestampToTime(item.createDate);
            // if (item.thumb) {
            //   item.thumb2 = `${SERVERURL}${item.thumb}`;
            // }
            this.data.rows.push(item);
            this.data.total++;
          }
        }
        this.isLoading = false;
        return this.data;
      }
    },
    //页码变化
    handlePageChange(newPage) {
      const query = {
        page: newPage,
        limit: this.routeInfo.limit
      };
      //判断当前是否有cate分类
      if (this.routeInfo.categoryId === -1) {
        //  /blog?page=${newPage}&limit=${this.routeInfo.limit}
        this.$router.push({
          name: "Blog",
          query
        });
      } else {
        //  /blog/cate/${this.routeInfo.categoryId}?page=${newPage}&limit=${this.routeInfo.limit}
        this.$router.push({
          name: "BlogCategory",
          query,
          params: {
            categoryId: this.routeInfo.categoryId
          }
        });
      }
    },
  },
  watch: {
    //监听路由变化
    async $route() {
      this.isLoading = true;
      this.$refs.mainContainer.scrollTop = 0;
      this.data = await this.fetchData();
      this.isLoading = false;
    }
  }
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.blog-list-container {
  width: 100%;
  height: 100%;
  position: relative;
  padding: 20px;
  overflow-y: scroll;
  scroll-behavior: smooth;
  box-sizing: border-box;
  // ul列表
  ul.list-container {
    list-style: none;
    margin: 0;
    padding: 0;
    margin-right: 25px;
    margin-bottom: 50px;
    li {
      display: flex;
      padding: 15px 0;
      padding-left: 20px;
      border-bottom: 1px solid @gray;
      background-color: #f5f5dc;
      // background-color: lighten(#f5f5dc, 5%);
      // background-color: darken(#f5f5dc, 2%);
      border-radius: 15px;
      margin-bottom: 10px;
      box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.5), -1px 0 1px rgba(0, 0, 0, 0.5);
    }
    .img-container {
      img {
        display: block;
        width: 180px;
        object-fit: cover;
        height: 130px;
        border-radius: 10px;
      }
    }
    .info-container {
      // flex: 1 1 auto;
      margin-left: 10px;
      padding-left: 20px;
      .title {
        padding: 0;
        margin-top: 5px;
        margin-bottom: 5px;
      }
      .aside {
        width: 500px;
        height: 30px;
        line-height: 30px;
        padding: 0;
        margin: 0;
        color: @gray;
        font-size: 12px;
        span {
          margin-right: 15px;
        }
      }
      .description {
        margin: 8px 0;
        font-size: 14px;
        height: 25px;
        line-height: 25px;
      }
    }
  }

  //pager分页器
  .pager {
    margin: 0 auto;
    margin-top: 30px;
    margin-bottom: 80px;
  }
}
</style>
