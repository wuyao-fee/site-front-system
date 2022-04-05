<template>
  <div class="test-container">
    <contact 
      class="contact"
      :github="data.github"
      :githubText="data.githubName"
      :mail="data.mail"
      :mailText="data.mail" 
      :qq="data.qq"
      :qqImg="data.qqQrCode"
      :weixin="data.weixin"
      :weixinImg="data.weixinQrCode"
    />
  </div>
</template>

<script>
import Contact from './index.vue';
export default {
    created() {
        this.fetchData();
    },
    data() {
        return {
            data: {

            }
        }
    },
    components: {
        Contact,
    },
    methods: {
        fetchData() {
            //模拟请求数据
            const resData = {
                avatar: "http://www.duyiedu.com/source/img/logo.png",
                siteTitle: "袁进的空间",
                github: "https://github.com/DuYi-Edu",
                qq: "3263023350",
                qqQrCode: "https://gitee.com/wuyao-fee/images-bed/raw/master/qqQrCode.jpg",
                weixin: "yh777bao",
                weixinQrCode: "https://gitee.com/wuyao-fee/images-bed/raw/master/weixinQrCode.jpg",
                mail: "3263023350@qq.com",
                icp: "黑ICP备17001719号",
                githubName: "DuYi-Edu",
                favicon: "http://mdrs.yuanjin.tech/Fs4CDlC6mwe_WXLMIiXcmSJLHO4f",
                id: "60855b153f14710597577f1a"
            };
            this.data = resData;
            console.log(this.data);
        }
    }
}
</script>

<style lang="less" scoped>
.test-container {
  width: 400px;
  height: 600px;
  background-color: #000;
  margin: 0 auto;
  .contact {
    padding-top: 100px;
  }
}
</style>
