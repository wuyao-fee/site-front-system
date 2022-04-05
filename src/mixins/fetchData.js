//@【组件混入】


/**
 * 公共远程获取数据（使用时需要提供一个fetchData方法）
 * @param {*} defauDataValue 
 */
export default function (defauDataValue = null) {
    return {
        async created() {
            this.data = await this.fetchData();
            this.isLoading = false;
        },
        data() {
            return {
                isLoading: true,
                data: defauDataValue,
            }
            
        }
    };
}

