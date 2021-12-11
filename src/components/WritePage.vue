<template>
  <div >
    
    <TodoInput ></TodoInput>
    <router-link  to="/list">할일 목록</router-link>
  </div>
</template>



<script>
import TodoInput from './TodoInput.vue';

export default {
  // data(){//속성 메서드 축약
  //   return{
  //     todoItems:[]
  //   }
  // },
  // methods:{
  //   // addOneItem(todoItem, todoContent){//속성 메서드 축약
  //   //   const obj = {completed:false, item: todoItem, content:todoContent}; //const
  //   //   localStorage.setItem(todoItem, JSON.stringify(obj));
  //   // //   this.todoItems.push(obj);
  //   //   this.moveToListPage();
      
  //   // },
    

  // },
  components: {
    TodoInput //속성명의 축약
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
