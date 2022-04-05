<template>
  <div class="carousel-container" 
    ref="container" 
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
  >
    <div class="carousel-img" ref="image" :style="imagePosition">
      <ImageLoader
        :src="carousel.bigImg"
        :placeholder="carousel.midImg"
        @load="showText"
      />
    </div>
    <div class="title" ref="title">{{ carousel.title }}</div>
    <div class="description" ref="description">{{ carousel.description }}</div>
  </div>
</template>

<script>
import ImageLoader from "@/components/ImageLoader";
export default {
  props: ["carousel"],
  data() {
    return {
      titleWidth: 0,
      descWidth: 0,
      containerSize: null, //外层容器尺寸
      imageSize: null, //图片尺寸
      mouseX: 0,
      mouseY: 0
    };
  },
  mounted() {
    this.titleWidth = this.$refs.title.clientWidth;
    this.descWidth = this.$refs.description.clientWidth;
    this.setSize();
    this.mouseX = this.center.x;
    this.mouseY = this.center.y;
    //添加监听事件
    window.addEventListener("resize", this.setSize);
  },
  destoryed() {
    window.removeEventListener("resize", this.setSize);
  },
  components: {
    ImageLoader
  },
  computed: {
    //计算图片位置
    imagePosition() {
      if (!this.containerSize || !this.imageSize) {
        return;
      }
      const extraWidth = this.imageSize.width - this.containerSize.width;
      const extraHeight = this.imageSize.height - this.containerSize.height;
      const left = (-extraWidth / this.containerSize.width) * this.mouseX;
      const top = (-extraHeight / this.containerSize.height) * this.mouseY;
      return {
        transform: `translate(${left}px, ${top}px)`
      };
    },
    //图片居中显示
    center() {
      return {
        x: this.containerSize.width / 2,
        y: this.containerSize.height / 2
      };
    }
  },
  methods: {
    //展示文字
    showText() {
      this.$refs.title.style.opacity = 1;
      this.$refs.title.style.width = 0;
      //强制渲染
      this.$refs.title.clientWidth;
      this.$refs.title.style.transition = "2s";
      this.$refs.title.style.width = this.titleWidth + "px";

      this.$refs.description.style.opacity = 1;
      this.$refs.description.style.width = 0;
      //强制渲染
      this.$refs.description.clientWidth;
      this.$refs.description.style.transition = "2s 2s";
      this.$refs.description.style.width = this.descWidth + "px";
    },
    //尺寸变化时设置
    setSize() {
      this.containerSize = {
        width: this.$refs.container.clientWidth,
        height: this.$refs.container.clientHeight
      };
      this.imageSize = {
        width: this.$refs.image.clientWidth,
        height: this.$refs.image.clientHeight
      };
    },
    //计算鼠标位置
    handleMouseMove(e) {
      const rect = this.$refs.container.getBoundingClientRect();
      this.mouseX = e.clientX - rect.left;
      this.mouseY = e.clientY - rect.top;
    },
    handleMouseLeave() {
      this.mouseX = this.center.x;
      this.mouseY = this.center.y;
    }
  }
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.carousel-container {
  position: relative;
  width: 100%;
  height: 100%;
  color: #fff;
  overflow: hidden;

  .carousel-img {
    width: 120%; //100
    height: 120%; //100
    position: absolute;
    left: 0;
    top: 0;
    transition: 0.3s;
  }
  .title,
  .description {
    position: absolute;
    color: #fff;
    left: 30px;
    text-shadow: 1px 0 0 rgb(0, 0, 0, 0.5), -1px 0 0 rgb(0, 0, 0, 0.5),
      0 1px 0 rgb(0, 0, 0, 0.5), 0 -1px 0 rgb(0, 0, 0, 0.5);
    white-space: nowrap;
    overflow: hidden;
    opacity: 0;
  }
  .title {
    top: calc(50% - 60px);
    font-size: 2em;
  }
  .description {
    top: calc(50% + 20px);
    font-size: 1.2em;
    color: lighten(@gray, 20%);
    margin-left: 50px;
  }
}
</style>
