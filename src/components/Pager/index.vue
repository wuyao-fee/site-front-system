<template>
  <div class="pager-container" v-if="pageNumber > 1">
      <!-- 首页 -->
      <a
        @click="clickHandle(1)"
        :class="{ disabled : current === 1 }"
        class="long"
      >|&lt;&lt;</a>
      <!-- 上一页 -->
      <a
        @click="clickHandle(current-1)"
        :class="{ disabled : current === 1 }"
        class="long"
      >&lt;&lt;</a>
      <!-- 展示页 -->
      <a 
        v-for="(n, i) in numbers"
        :key="i"
        :class="{ active : n === current }"
        @click="clickHandle(n)"
      >{{ n }}</a>
      <!-- 下一页 -->
      <a
        :class="{ disabled : current === pageNumber }"
        @click="clickHandle(current+1)"
        class="long"
      >&gt;&gt;</a>
      <!-- 尾页 -->
      <a
        :class="{ disabled: current === pageNumber }"
        @click="clickHandle(pageNumber)"
        class="long"
      >&gt;&gt;|</a>
      <div class="totalNum">共 {{ total }} 条</div>
  </div>
</template>

<script>
export default {
    props: {
        current: {
            type: Number,
            required: false,
            default: 1,
        },
        limit: {
            type: Number,
            required: false,
            default: 10,
        },
        total: {
            type: Number,
            required: false,
            default: 0,
        },
        visibleNumber: {
            type: Number,
            required: false,
            default: 10,
        }
    },
    computed: {
        //总页数
        pageNumber() {
            return Math.ceil(this.total / this.limit);
        },
        //显示的最小页码
        visiableMin() {
            let min = this.current - Math.floor(this.visibleNumber / 2);
            if (min < 1) {
                min = 1;
            }
            return min;
        },
        //显示的最大页码
        visiableMax() {
            // let max = this.current + this.visibleNumber - 1;
            let max = this.visiableMin + this.visibleNumber - 1;
            if (max > this.pageNumber) {
                max = this.pageNumber;
            }
            return max;
        },
        //需要显示的页码
        numbers() {
            let nums = [];
            for (let i = this.visiableMin; i <= this.visiableMax; i++) {
                nums.push(i);
            }
            return nums;
        }
    },
    methods: {
        clickHandle(newPage) {
            if (newPage < 1) {
                newPage = 1;
            }
            if (newPage > this.pageNumber) {
                newPage = this.pageNumber;
            }
            if (newPage === this.current) {
                return;
            }
            //只抛出事件，不作处理
            this.$emit("pageChange", newPage);
        }
    }
}
</script>

<style lang="less" scoped>
@import '~@/styles/var.less';
.pager-container {
    display: flex;
    justify-content: center;
    margin: 20px 0;
    text-align: center;
    a {
        width: 30px;
        height: 30px;
        line-height: 30px;
        padding: 1px 10x;
        border-radius: 3px;
        background-color: #F0F0F0;
        box-sizing: border-box;
        color: #000;
        margin: 0 6px;
        cursor: pointer;
        &.disabled {
            color: @lightWords;
            cursor: not-allowed;
        }
        &.active {
            background-color: #1E90FF;
            color: #fff;
            font-weight: bold;
            cursor: text;
        }
    }
    a:hover {
        color: #fff;
        background-color: #87CEEB;
    }
    a.long {
        width: 45px;
        height: 30px;
        line-height: 30px;
        text-align: center;
    }
    div.totalNum {
        height: 30px;
        line-height: 30px;
        text-align: center;
        box-sizing: border-box;
        margin-left: 5px;
        font-size: 15px;
    }
}
</style>