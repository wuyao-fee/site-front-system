<template>
  <div class="blog-toc-container">
    <h2>目录</h2>
    <TocList :tocList="toWithSelect" @select="handleSelect"/>
  </div>
</template>

<script>
import TocList from './TocList.vue';
import { debounceFn } from '@/utils/tools.js';
export default {
  props: {
    tocList: {
      // type: Array,
      required: true,
    }
  },
  created() {
    this.setSelectDebounce = debounceFn(this.setSelect, 50);
    this.$EventBus.$on('mainScroll', this.setSelectDebounce);
  },
  destory() {
    this.$$EventBus.$off('mainScroll', this.setSelectDebounce);
  },
  data() {
    return {
      activeAnchor: '',       //激活的锚点
    }
  },
  components: {
    TocList,
  },
  computed: {
    //得到完整的带有isSelect的toc数组
    toWithSelect() {
      const getTocArr = (toc = []) => {
        return toc.map((item) => ({
          ...item,
          isSelect: item.anchor === this.activeAnchor,
          children: getTocArr(item.children),
        }));
      };
      return getTocArr(this.tocList);
    },
    //根据toc数组得到对应的DOM元素数组
    getDomArr() {
      const doms = [];
      const addToDoms = (toc) => {
        for (const item of toc) {
          doms.push(document.getElementById(item.anchor));
          if (item.children && item.children.length) {
            addToDoms(item.children);
          }
        }
      }
      addToDoms(this.tocList);
      // console.log(doms);
      return doms;
    }
  },
  methods: {
    handleSelect(item) {
      console.log(item, 'item');
      location.hash = item.anchor;
    },
    //设置选中
    setSelect(scrollDom) {
      // console.log(1);
      if (!scrollDom) {
        return;
      }
      //清空状态
      this.activeAnchor = '';
      const HeightRange = 200;
      for (const dom of this.getDomArr) {
        //判断当前dom是否被选中
        if (!dom) {
          continue;
        }
        //得到元素里视口顶部的距离
        const top = dom.getBoundingClientRect().top;
        // console.log(top, 'top');
        if (top > 0 && top <= HeightRange) {
          //h标题刚好在0 - 200的高度中间
          this.activeAnchor = dom.id;
          return;
        } else if (top > HeightRange) {
          //h标题在规定矩形的下方
          return;
        } else {
          //h标题在规定矩形的上方
          this.activeAnchor = dom.id; //先假设自己是激活的
        }
      }
    }
  }
}
</script>

<style lang='less' scoped>
.blog-toc-container {
  h2 {
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 1em;
    margin: 0;
  }
}
</style>