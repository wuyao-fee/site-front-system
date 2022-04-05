<template>
  <div v-show="isShow" class="to-top-container" @click="handleClick">top</div>
</template>

<script>
export default {
	created() {
		this.$EventBus.$on('mainScroll', this.handleScroll);
	},
	data() {
		return {
			isShow: false,
		}
	},
	destoryed() {
		this.$EventBus.$off('mainScroll', this.handleScroll);
	},
	methods: {
		//监听主区域滚动条事件
		handleScroll(dom) {
			if (!dom) {
				console.log('not dom');
				this.isShow = false;
				return;
			}
			this.isShow = dom.scrollTop >= 300;
		},
		//处理点击事件（提交给其它组件处理）
		handleClick() {
			this.$EventBus.$emit('setMainScroll', 0);
		}
	}
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.to-top-container {
  position: fixed;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: @primary;
  z-index: 99;
  right: 50px;
  bottom: 50px;
  line-height: 50px;
  text-align: center;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 2px;
  cursor: pointer;
}
</style>
