<template>
  <div class="clearAllContainer">
    <span class="clearAllBtn" v-on:click="clearTodo">Clear All({{this.$store.getters.getRegItemCnt}}Items)</span>
  </div>
</template>

<script>
export default {
  methods: {
    clearTodo() {//속성 메서드 축약
      // this.$emit('clearAll');
      this.$store.commit('clearAllItems');
    }
  }
};
</script>

<style scoped>
.clearAllContainer {
  width: 8.5rem;
  height: 50px;
  line-height: 50px;
  background-color: white;
  border-radius: 5px;
  margin: 0 auto;
}
.clearAllBtn {
  color: #e20303;
  cursor: pointer;
  display: block;
}
</style>
