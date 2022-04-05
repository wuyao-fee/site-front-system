<template>
  <div class="empty-container">
      <Icon type="empty" class="empty-icon"/>
      <p>{{ text }}</p>
  </div>
</template>

<script>
import Icon from '@/components/Icon';
export default {
    props: {
        text: {
            type: String,
            required: false,
            default: "无数据",
        }
    },
    components: {
        Icon,
    }
}
</script>

<style lang="less" scoped>
@import '~@/styles/mixin.less';
@import '~@/styles/var.less';
.empty-container {
    .self-center();
    .empty-icon {
        font-size: 80px;
    }
    text-align: center;
    color: @gray;
}
</style>