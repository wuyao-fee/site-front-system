<template>
  <div class="test-container">
      <Empty />
  </div>
</template>

<script>
import Empty from './index.vue';
export default {
    components: {
        Empty,
    }
}
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
.test-container {
    width: 600px;
    height: 600px;
    border: 1px solid #000;
    .self-center();
}
</style>