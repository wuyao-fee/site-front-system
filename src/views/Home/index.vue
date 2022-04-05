<template>
  <div v-loading="isLoading" class="home-container" ref="container" @wheel="handleWheel">
    <!-- 轮播单图 -->
    <ul 
      class="carousel-container"
      :style="{ marginTop, }"  
      @transitionend="handleTransitionEnd"
    >
      <li v-for="item in banners" :key="item.id">
        <Carousel :carousel="item"/>
      </li>
    </ul>
    <!-- 上箭头 -->
    <div v-show="index >= 1" class="icon icon-up" @click="turnTo(index - 1)">
      <Icon type="arrowUp" />
    </div>
    <!-- 下箭头 -->
    <div
      v-show="index < banners.length - 1"
      class="icon icon-down"
      @click="turnTo(index + 1)"
    >
      <Icon type="arrowDown" />
    </div>
    <!-- 索引指示器 -->
    <ul class="indicator">
      <li
        v-for="(item, i) in banners"
        :key="item.id"
        :class="{ active: i === index }"
        @click="turnTo(i)"
      ></li>
    </ul>
  </div>
</template>

<script>
import { getBannerApi } from "@/api/banner.js";
import { SERVERURL } from '@/urlConfig.js';
import Carousel from "./Carousel.vue";
import Icon from "@/components/Icon";
import { isTheMorningAtNoonOrEvening } from '@/utils/tools.js';
export default {
  async created() {
    const res = await this.fetchData();
    console.log(res, 'banner');
    if (isTheMorningAtNoonOrEvening() === 'morning') {
      this.banners = res;
    } else if(isTheMorningAtNoonOrEvening() === 'evening') {
      this.banners = res.reverse();
    } else {
      this.banners.push(res[1], res[2], res[0]);
    }
  },
  data() {
    return {
      banners: [],
      index: 0,
      containerHeight: 0,     //容器高度
      isScolling: false,      //是否正在滚动 
      isLoading: true,       //是否正在加载中
    };
  },
  mounted() {
    console.log(this.$refs.container.clientHeight);
    this.containerHeight = this.$refs.container.clientHeight;
  },
  components: {
    Carousel,
    Icon
  },
  computed: {
    marginTop() {
      return -this.index * this.containerHeight + "px";
    },
  },
  methods: {
    //请求数据
    async fetchData() {
      const res = await getBannerApi();
      // for (let item of res) {
      //   item.midImg2 = `${SERVERURL}${item.midImg}`;
      //   item.bigImg2 = `${SERVERURL}${item.bigImg}`;
      // }
      this.isLoading = false;
      return res;
    },
    //跳转到指定的索引值
    turnTo(i) {
      this.index = i;
    },
    //滚轮事件
    handleWheel(e) {
      if (this.isScolling) {
        return;
      }
      if (e.deltaY >= 125 && this.index < this.banners.length - 1) {
        //向下滚动
        this.isScolling = true;
        this.index++;
      } else if (e.deltaY <= -125 && this.index > 0) {
        //向上滚动
        this.isScolling = true;
        this.index--;
      }
    },
    //动画结束
    handleTransitionEnd() {
      this.isScolling = false;
    }
  }
};
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
.home-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;

  //测试
    // width: 60%;
    // height: 40%;
    // margin: 100px auto;
    // border: 2px solid #000;
    // overflow: visible;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
}

.icon {
    position: absolute;
    .self-center();
    font-size: 30px;
    transform: translateX(-50%);
    cursor: pointer;
    &.icon-up {
      top: 15px;
      animation: jump-up 2s infinite;
    }
    &.icon-down {
      top: auto;
      bottom: 15px;
      animation: jump-down 2s infinite;
    }
    @jump: 15px;
    @keyframes jump-up {
      0% {
        transform: translate(-50%, @jump);
      }
      50% {
        transform: translate(-50%, -@jump);
      }
      100% {
        transform: translate(-50%, @jump);
      }
    }
    @keyframes jump-down {
      0% {
        transform: translate(-50%, -@jump);
      }
      50% {
        transform: translate(-50%, @jump);
      }
      100% {
        transform: translate(-50%, -@jump);
      }
    }
}

.carousel-container {
  width: 100%;
  height: 100%;
  transition: 500ms;
  li {
    width: 100%;
    height: 100%;
  }
}

.indicator {
  .self-center();
  transform: translateY(-50%);
  left: auto;
  right: 20px;
  li {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    border: 1px solid #fff;
    background-color: #000;
    box-sizing: border-box;
    margin: 10px;
    cursor: pointer;
    &.active {
      background-color: red;
    }
  }
}
</style>
