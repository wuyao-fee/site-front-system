<template>
  <ul class="toc-list-container">
    <li v-for="(item, i) in tocList" :key="i">
      <span :class="{ active: item.isSelect }" @click="handleClick(item)">
        {{ item.name }}
      </span>
      <span
        v-if="item.aside"
        class="aside"
        :class="{ active: item.isSelect }"
        @click="handleClick(item)"
      >
        {{ item.aside }}
      </span>
      <!-- 组件递归 -->
      <TocList :tocList="item.children" @select="handleClick" />
    </li>
  </ul>
</template>

<script>
export default {
  name: "TocList",
  props: {
    tocList: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  methods: {
    handleClick(item) {
      if (!item.isSelect) {
        this.$emit("select", item);
      }
    }
  }
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.toc-list-container {
  list-style: none;
  padding: 0;
  .toc-list-container {
    margin-left: 1.2em;
  }
  li {
    min-height: 40px;
    line-height: 40px;
    font-size: 14px;
    cursor: pointer;
    .aside {
      font-size: 12px;
      margin-left: 1em;
      color: @gray;
    }
    .active {
      color: @warn;
      font-weight: bold;
    } 
  }
}
</style>
