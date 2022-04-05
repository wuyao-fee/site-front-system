<template>
  <i class="icon-container iconfont" :class="fontClass"></i>
</template>

<script>
const classMap = {
    arrowUp: "icon-xiangshang",
    arrowDown: "icon-xiangxia",
    close: "icon-roundclose",
    error: "icon-error",
    blog: "icon-blog",
    weixin: "icon-weixin",
    qq: "icon-logo-qq",
    mail: "icon-youjian",
    chat: "icon-chat",
    info: "icon-info-circle",
    code: "icon-code",
    empty: "icon-kong",
    success: "icon-success",
    github: "icon-github",
    warn: "icon-warning",
    about: "icon-About",
    home: "icon-home-filling"
};
export const types = Object.keys(classMap);
export default {
    props: {
        type: {
            type: String,
            required: true,
        }
    },
    computed: {
        //计算图标样式
        fontClass() {
            return classMap[this.type];
        }
    }
}
</script>

<style lang="less" scoped>
@import '//at.alicdn.com/t/font_3264319_p3schdd909d.css';
.iconfont {
  color: inherit;
  font-size: inherit;
}
</style>