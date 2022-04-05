<template>
  <div class="test-container">
    <TocList :tocList="tocList" @select="handleSelect"/>
  </div>
</template>

<script>
import TocList from "./TocList.vue";
export default {
  data() {
    return {
      tocList: [
        { 
            name: "a", 
            isSelect: false 
        },
        { 
            name: "b", 
            isSelect: true, 
            children: [
                {
                    name: 'b-1',
                    isSelect: false,
                },
                {
                    name: 'b-2',
                    isSelect: true,
                },
                {
                    name: 'b-3',
                    isSelect: false,
                },
            ] 
        },
        { 
            name: "c", 
            isSelect: false 
        }
      ]
    };
  },
  components: {
    TocList
  },
  methods: {
    handleSelect(item) {
      console.log(item);
    }
  }
  
};
</script>

<style></style>
