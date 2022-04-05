<template>
  <div class="site-aside-container">
    <Avatar 
        class="avatar"
        :url="avatar"
        />
        
    <h1 class="title">{{ siteTitle }}</h1>
    <Menu class="menu"/>
    <Contact
        class="contact"
        :github="github"
        :githubText="githubName"
        :mail="mail"
        :mailText="mail"
        :qq="qq"
        :qqImg="qqQrCode"
        :weixin="weixin"
        :weixinImg="weixinQrCode"
    />
    <p class="footer">
        {{ icp }}
    </p>
  </div>
</template>

<script>
import Avatar from '@/components/Avatar';
import Menu from '@/components/Menu';
import Contact from '@/components/Contact';
export default {
    props: {
        avatar: {
            // type: String,
            required: true
        },
        siteTitle: {
            // type: String,
            required: true
        },
        github: {
            // type: String,
            required: true
        },
        githubName: {
            // type: String,
            required: true
        },
        mail: {
            // type: String,
            required: true
        },
        qq: {
            // type: String,
            required: true
        },
        qqQrCode: {
            // type: String,
            required: true
        },
        weixin: {
            // type: String,
            required: true
        },
        weixinQrCode: {
            // type: String,
            required: true
        },
        icp: {
            // type: String,
            required: true
        }
    },
    components: {
        Avatar,
        Menu,
        Contact,
    }
}
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.site-aside-container {
    width: 100%;
    height: 100%;
    background-color: @dark;
    padding: 20px 0;
    box-sizing: border-box;
    overflow-x: hidden;
    overflow-y: auto;
    .avatar {
        margin: 0 auto;
    }
    .title {
        text-align: center;
        color: #fff;
        font-size: 1.2em;
    }
    .menu {
        margin-top: 40px;
    }
    .contact {
        margin-top: 30px;
    }
    .footer {
        text-align: center;
        color: @words;
        font-weight: 700;
        font-size: 13px;
    }
}

</style>