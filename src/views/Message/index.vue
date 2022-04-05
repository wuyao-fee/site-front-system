<template>
  <div class="message-container" ref="messageContainer">
    <CommentMesssage 
      title="留言板"
      :subTitle="data.total"
      :isListLoading="isLoading"
      :list="data.rows"
      @submit="handleSubmit"
    />
  </div>
</template>

<script>
import { getMessageByPageApi, addMessageApi } from '@/api/message.js';
import CommentMesssage from '@/components/CommentMessage';
import { SERVERURL } from '@/utils/urlConfig.js';
import toTop from '@/mixins/toTop.js';
export default {
  mixins: [toTop('messageContainer')],
  async created() {
    const r = await getMessageByPageApi();
    const res = await this.fetchData();
    this.data = res;
    this.isLoading = false;
    this.$EventBus.$on('mainScroll', this.handleScroll);
  },
  data() {
    return {
      data: {
        total: 0,
        rows: [],
      },
      page: 1,
      limit: 10,
      isLoading: true,
      messageTotal: 0,
    }
  },
  destoryed() {
    this.$EventBus.$off('mainScroll', this.handleScroll);
  },
  components: {
    CommentMesssage,
  },
  computed: {
    canGetMore() {
      return this.data.rows.length < this.data.total;
    }
  },
  methods: {
    async fetchData() {
      const res = await getMessageByPageApi(this.page, this.limit);
      // for (let item of res.rows) {
      //   item.avatar2 = `${SERVERURL}${item.avatar}`;
      // };
      return res;
    },
    async handleSubmit(data, callback) {
      const res = await addMessageApi(data);
      callback('感谢您的留言');
      // res.avatar2 = `${SERVERURL}${res.avatar}`;
      this.data.rows.unshift(res);
    },
    handleScroll(dom) {
      if (this.isLoading || !dom) {
        return;
      }
      const range = 100;
      const diff = Math.abs(dom.scrollTop + dom.clientHeight - dom.scrollHeight);
      if (diff <= range) {
        this.fetchMore();
      }
    },
    async fetchMore() {
      if (!this.canGetMore) {
        return;
      }
      this.isLoading = true;
      this.page++;
      const res = await this.fetchData();
      this.data.total = res.total;
      this.data.rows = this.data.rows.concat(res.rows);
      this.isLoading = false;
    }
  }
}
</script>

<style lang='less' scoped>
.message-container {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding: 25px 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}
.comment-message-container {
  width: 1000px;
  margin: 0 auto;
}
</style>