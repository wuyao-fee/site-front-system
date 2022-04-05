<template>
  <div class="test-container">
      <Layout>
          <template #left>
              <div class="left">
                  左侧边栏
              </div>
          </template>
          <div class="main">
              主区域
          </div>
          <template #right>
              <div class="right">
                  右侧边栏
              </div>
          </template>
      </Layout>
  </div>
</template>

<script>
import Layout from './index.vue';
export default {
    components: {
        Layout,
    }
}
</script>

<style lang="less" scoped>
.test-container {
    width: 80%;
    height: 600px;
    border: 2px solid #000;
    margin: 0 auto;
    white-space: nowrap;
    .left {
        width: 200px;
        height: 100%;
        background-color: red;
    }
    .main {
        width: 100%;
        height: 100%;
        background-color: lightcoral;
    }
    .right {
        width: 150px;
        height: 100%;
        background-color: blueviolet;
    }
}
</style>