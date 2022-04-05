<template>
  <div class="app-container">
    <Layout>
      <template #left>
        <div class="aside">
          <SiteAside 
            :avatar="data.avatar"
            :siteTitle="data.siteTitle"
            :github="data.github"
            :githubName="data.githubName"
            :mail="data.mail"
            :mailText="data.mail"
            :qq="data.qq"
            :qqQrCode="data.qqQrCode"
            :weixin="data.weixin"
            :weixinQrCode="data.weixinQrCode"
            :icp="data.icp"
          />
        </div>
      </template>
      <template #default>
        <router-view></router-view>
      </template>
    </Layout>
    <ToTop />
  </div>
</template>

<script>
import { getSettingApi } from "@/api/setting.js";
import { SERVERURL } from '@/utils/urlConfig.js';
import Layout from "@/components/Layout";
import SiteAside from "@/components/SiteAside";
import ToTop from '@/components/ToTop';
export default {
  async created() {
    const res = await getSettingApi();
    console.clear();
    console.log(res, 'app');
    this.data = res;
    // this.data.avatar2 = `${SERVERURL}${res.avatar}`;
    // this.data.qqQrCode2 = `${SERVERURL}${res.qqQrCode}`;
    // this.data.weixinQrCode2 = `${SERVERURL}${res.weixinQrCode}`;
  },
  data() {
    return {
      data: {}
    };
  },
  components: {
    Layout,
    SiteAside,
    ToTop,
  },
};
</script>

<style lang="less">
@import "~@/styles/mixin.less";
.app-container {
  .self-fill(fixed);
  .aside {
    width: 250px;
    height: 100%;
  }
}
</style>
