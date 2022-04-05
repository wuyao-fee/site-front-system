<template>
  <pager
    :current="current"
    :total="total"
    @pageChange="pageChangeHandle($event)"
  />
</template>

<script>
import Pager from './index.vue';
export default {
    data() {
        return {
            current: 1,
            total: 302,
        }
    },
    components: {
        Pager,
    },
    methods: {
        pageChangeHandle(newPage) {
            this.current = newPage;
        }
    }
}
</script>

<style>

</style>