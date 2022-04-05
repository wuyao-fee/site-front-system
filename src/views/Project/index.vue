<template>
  <div class="project-container" ref="projectContainer">
    <div class="project-item" v-for="item in data" :key="item.id" v-loading="loading">
      <!-- 项目图片 -->
      <a
        :href="
          item.url ? item.url : `javascript:alert('该项目无法通过外网访问')`
        "
        :target="item.url ? '_blank' : '_self'"
      >
        <img v-lazy="item.thumb" class="thumb" alt="" />
      </a>
      <!-- 项目信息 -->
      <div class="info">
        <!-- 标题 -->
        <h2>
          <a
            :href="
              item.url ? item.url : `javascript:alert('该项目无法通过外网访问')`
            "
            :target="item.url ? '_blank' : '_self'"
            >{{ item.name }}</a
          >
        </h2>
        <!-- github地址 -->
        <p>
          <span class="text">GitHub: </span>
          <a v-if="item.github" :href="item.github" class="github">{{ item.github }}</a>
        </p>
        <p>
          <span class="text">效果展示: </span>
          <a v-if="item.url" :href="item.url" target="_blank" class="url">{{ item.url }}</a>
        </p>
        <!-- 描述 -->
        <p v-for="(desc, i) in item.description" :key="i" class="desc">
          {{ desc }}
        </p>
      </div>
    </div>
    <Empty v-if="data.length === 0 && !loading" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import toTop from '@/mixins//toTop.js';
import Empty from '@/components/Empty';
export default {
  mixins: [toTop('projectContainer')],
  created() {
    this.$store.dispatch("project/fetchProject");
  },
  components: {
    Empty,
  },
  computed: mapState("project", ["loading", "data"])
};
</script>

<style lang="less" scoped>
@import '~@/styles/var.less';
.project-container {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  box-sizing: border-box;
  padding: 20px;
  background-color: lighten(#f5f5dc, 4%) ;
  scroll-behavior: smooth;
  .project-item {
    display: flex;
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 8px;
    background-color: #f5f5dc;
    box-shadow: 1px 1px 3px #000;
    &:hover {
      color: inherit;
      box-shadow: -2px 2px 5px #000;
      transform: scale(1.03) translate(3px -3px);
      background-color: darken(#f5f5dc, 3%);
    }
    .thumb {
      width: 200px;
      height: 200px;
      flex: 0 0 auto;
      object-fit: cover;
      border-radius: 5px;
      margin-right: 35px;
      border: 1px solid #000;
    }
    .info {
      line-height: 1.7;
      flex: 1 1 auto;
      h2 {
        margin: 0;
      }
    }
    .text {
      font-weight: bold;
    }
    .github,
    .url {
      margin-left: 10px;
      font-size: 14px;
      color: @primary;
    }
    .desc {
      font-size: 14px;
    }
  }
}
</style>
