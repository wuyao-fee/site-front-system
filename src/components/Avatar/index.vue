<template>
  <img 
    class="avatar-img"
    :src="url" 
    :style="{
        width: size + 'px',
        height: size + 'px'
    }"
    alt="这是一个头像"
  >
</template>

<script>
export default {
    props: {
        url: {
            // type: String,
            required: true,
        },
        size: {
            type: Number,
            required: false,
            default: 150
        }
    }
}
</script>

<style lang="less" scoped>
.avatar-img {
    border-radius: 50%;
    object-fit: cover;      //调整图片比例进行填充
    display: block;
}
</style>