<template>
  <div class="menu-container">
    <router-link 
      v-for="item in menuList" 
      :key="item.link" 
      :to="{ name: item.name }" 
      :exact="item.exact"
      active-class="selected"
      exact-active-class=""
    >
      <div class="icon">
        <Icon :type="item.icon" />
      </div>
      <span>{{ item.title }}</span>
    </router-link>
  </div>
</template>

<script>
import Icon from "@/components/Icon";
export default {
  data() {
    return {
      menuList: [
        {
          name: "Home",
          title: "首页",
          icon: "home",
          exact: true,
        },
        {
          name: "Blog",
          title: "文章",
          icon: "blog",
          exact: false, //激活状态是否需要精确匹配
        },
        {
          name: "Project",
          title: "项目&效果",
          icon: "code",
          exact: true,
        },
        {
          name: "Message",
          title: "留言板",
          icon: "chat",
          exact: true,
        },
        {
          name: "About",
          title: "关于我",
          icon: "about",
          exact: true,
        }
      ]
    };
  },
  components: {
    Icon
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
@import "~@/styles/mixin.less";
.menu-container {
  list-style: none;
  color: @gray;
  a {
    display: block;
    display: flex;
    height: 45px;
    line-height: 45px;
    text-decoration: none;
    color: @gray;
    align-items: center;
    padding: 0 50px;
    &:hover {
      background-color: #696969;
      color: #fff;
    }
    &.selected {
      background-color: darken(@words, 3%);
    }
    .icon {
      color: @gray;
      width: 22px;
      font-size: 20px;
    }
    span {
      margin-left: 15px;
    }
  }
}
</style>
