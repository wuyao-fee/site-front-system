<template>
  <ul class="contact-container">
    <!-- github -->
    <li>
      <a :href="github" target="_blank">
        <!-- 图标 -->
        <div class="icon github">
          <Icon type="github" />
        </div>
        <!-- 文字 -->
        <span class="text">{{ githubText }}</span>
      </a>
    </li>
    <!-- 邮箱 -->
    <li>
      <a :href="mailto">
        <!-- 图标 -->
        <div class="icon mail">
          <Icon type="mail" />
        </div>
        <!-- 文字 -->
        <span class="text">{{ mailText }}</span>
      </a>
    </li>
    <!-- qq -->
    <li>
      <a :href="tencentQQ">
        <!-- 图标 -->
        <div class="icon qq">
          <Icon type="qq" />
        </div>
        <!-- 文字 -->
        <span class="text">{{ qq }}</span>
        <!-- 弹出层 -->
        <div class="pop">
            <img :src="qqImg" alt="">
        </div>
      </a>
    </li>
    <!-- 微信 -->
    <li>
      <a href="">
        <!-- 图标 -->
        <div class="icon weixin">
          <Icon type="weixin"/>
        </div>
        <!-- 文字 -->
        <span class="text">{{ weixin }}</span>
        <!-- 弹出层 -->
        <div class="pop">
            <img :src="weixinImg" alt="">
        </div>
      </a>
    </li>
  </ul>
</template>

<script>
import Icon from "@/components/Icon";
export default {
  props:{
    github: {
      // type: String,
      required: true,
    }, 
    githubText: {
      // type: String,
      required: true,
    }, 
    mail: {
      // type: String,
      required: true,
    }, 
    mailText: {
      // type: String,
      required: true,
    }, 
    qq: {
      // type: String,
      required: true,
    }, 
    qqImg: {
      // type: String,
      required: true,
    }, 
    weixin: {
      // type: String,
      required: true,
    }, 
    weixinImg: {
      // type: String,
      required: true,
    }, 
  },
  created() {
    this.mailto = `mailto:${this.mail}`;
    this.tencentQQ = `tencent://message/?Menu=yes&uin=${this.qq}&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45`;
  },
  data() {
    return {
      mailto: '',           //可以直接调用的邮件地址
      tencentQQ: '',        //可以弹出qq的完整地址
    }
  },
  components: {
    Icon
  }
};
</script>

<style lang="less" scoped>
@import '~@/styles/var.less';
.contact-container {
  color: @gray;
  list-style: none;
  padding: 10px 45px;
  margin: 0;
  a {
    display: flex;
    text-decoration: none;
    font-size: 14px;
    cursor: pointer;
    align-items: center;
    color: @gray;
    &:hover {
      color: @primary;
      span {
        color: @primary;
      }
    }
  }
  .icon {
    width: 36px;
    font-size: 22px;
    align-items: center;
    &.github {
      font-size: 28px;
      text-indent: -1px;
    }
    &.mail {
      font-size: 25px;
      text-indent: 1px;
    }
    &.qq {
      font-size: 28px;
      text-indent: -1px;
      
    }
    &.weixin {
      font-size: 24px;
      text-indent: 0px;
    }
  }
  li {
    position: relative;
    display: flex;
    width: 100%;
    height: 30px;
    line-height: 30px;
    margin: 10px 0;
    &:hover {
      color: @primary;
      .pop {
        transform: scaleY(1);
      }
    }
  }
  .text {
    margin-left: 8px;
    font-weight: 300;
    font-size: 13px;
    color: #fff;
  }
  .pop {
    position: absolute;
    left: 0;
    bottom: 35px;
    padding: 10px 15px;
    background-color: #fff;
    border-radius: 8px;
    transform: scaleY(0);
    &::after {
      content: "";
      position: absolute;
      width: 8px;
      height: 8px;
      background-color: #fff;
      left: 50%;
      bottom: -4px;
      transform: translateX(-50%) rotate(45deg);
      transform-origin: center bottom;
      transition: 0.3s;
    }
    img {
      width: 150px;
      height: 150px;
    }
  }
}
</style>
