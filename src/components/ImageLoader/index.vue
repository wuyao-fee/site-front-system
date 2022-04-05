<template>
  <div class="image-loader-container">
      <!-- 原始图片 -->
      <img 
        :src="src"
        :style="{ opacity: originOpacity, transition: `${duration}ms` }"
        alt=""
        @load="loadedHandle">
      <!-- 占位图片 -->
      <img 
        v-if="!everythiingDone"
        :src="placeholder" 
        class="placeholderImg"
        alt=""
      >
  </div>
</template>

<script>
export default {
    props: {
        src: {
            type: String,
            required: true
        },
        placeholder: {
            type: String,
            required: true,
        },
        duration: {
            type: Number,
            required: false,
            default: 500,
        }
    },
    data() {
        return {
            originLoaded: false,            //原始图片是否加载完成
            everythiingDone: false,         //所有事情是否全部完成
        }
    },
    computed: {
        //原始图片的透明度
        originOpacity() {
            return this.originLoaded ? 1 : 0;
        }
    },
    methods: {
        //原始图片加载完成
        loadedHandle() {
            console.log('原始图片加载完成');
            this.originLoaded = true;
            setTimeout(() => {
                this.everythiingDone = true;
                this.$emit('load');
            }, this.duration);
        }
    }

}
</script>

<style lang="less" scoped>
@import '~@/styles/mixin.less';
.image-loader-container {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    img {
        .self-fill();
        object-fit: cover;
    }
    .placeholderImg {
        filter: blur(2vh);
    }
}
</style>