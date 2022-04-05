//@ 【组件混入】


export default function (refValue) {
    return {
        mounted() {
            this.$EventBus.$on('setMainScroll', this.handleSetMainScroll);
            this.$refs[refValue].addEventListener('scroll', this.handleMainScroll);
            
        },
        beforeDestory() {   
            this.$EventBus.$emit('mainScroll');
            this.$EventBus.$off('setMainScroll', this.handleSetMainScroll);
            this.$refs[refValue].removeEventListener('scroll', this.handleMainScroll);  
        },
        methods: {
            handleMainScroll() {
                this.$EventBus.$emit('mainScroll', this.$refs[refValue]);
            },
            handleSetMainScroll(scrollTop) {
                this.$refs[refValue].scrollTop = scrollTop;
            }
        }
    }
}