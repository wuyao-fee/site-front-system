<template>
  <div class="test-container">
    <SiteAside 
        :avatar="data.avatar"
        :siteTitle="data.siteTitle"
        :github="data.github"
        :githubName="data.githubName"
        :mail="data.mail"
        :qq="data.qq"
        :qqQrCode="data.qqQrCode"
        :weixin="data.weixin"
        :weixinQrCode="data.weixinQrCode"
    />
  </div>
</template>

<script>
import SiteAside from "./index.vue";
export default {
  created() {
    this.fetchData();
  },
  data() {
    return {
      data: {}
    };
  },
  components: {
    SiteAside
  },
  methods: {
    fetchData() {
      const resData = {
        avatar: "https://gitee.com/wuyao-fee/images-bed/raw/master/logo.jpg",
        siteTitle: "个人空间",
        github: "https://github.com/wuyao-fee",
        qq: "2466822404",
        qqQrCode:
        "https://gitee.com/wuyao-fee/images-bed/raw/master/qqQrCode.jpg",
        weixin: "wy18171707162",
        weixinQrCode:
        "https://gitee.com/wuyao-fee/images-bed/raw/master/weixinQrCode.jpg",
        mail: "wuyao.fee@gmail.com",
        icp: "黑ICP备17001719号",
        githubName: "wuyao-fee",
        favicon: "https://gitee.com/wuyao-fee/images-bed/raw/master/logo.jpg",
        id: "60855b153f14710597577f1a"
      };
      this.data = resData;
    }
  }
};
</script>

<style lang="less" scoped>
.test-container {
  width: 250px;
  height: 600px;
  border: 2px solid #000;
  margin: 0 auto;
}
</style>
