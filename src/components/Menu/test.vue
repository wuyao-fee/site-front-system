<template>
  <div class="test-container">
      <Menu/>
  </div>
</template>

<script>
import Menu from './index.vue';
export default {
    components: {
        Menu,
    }
}
</script>

<style lang="less" scoped>
.test-container {
    width: 400px;
    height: 600px;
    background-color: #000;
    margin: 0 auto;
}
</style>