<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    
    
    <router-view ></router-view>
    
    
    
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue';

export default {
  
  components: {
    TodoHeader //속성명의 축약
  },
  created(){ //속성 메서드의 축약
    
   
    this.$router.push("/list");
    
    
  }

};
</script>

<style>
body {
  text-align: center;
  background-color: #f6f6f8;
}
input {
  border-style: groove;
  width: 200px;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>
