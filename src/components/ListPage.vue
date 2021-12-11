<template>
  <div  >
    <router-link  to="/write">할일 등록</router-link>  
    <TodoList   ></TodoList>
    <TodoFooter ></TodoFooter> 
    
  </div>
</template>



<script>


import TodoList from './TodoList.vue';
import TodoFooter from './TodoFooter.vue';



export default {
  // data(){//속성 메서드 축약
  //   return{
  //     todoItems:[]
  //   }
  // },
  methods:{
   
    // removeOneItem(todoItem, index){//속성 메서드 축약

    //   localStorage.removeItem(todoItem.item);
    //   this.todoItems.splice(index, 1);
    // },

    // toggleOneItem(todoItem, index){//속성 메서드 축약
    //   //todoItem.completed = !todoItem.completed;
    //    this.todoItems[index].completed = !this.todoItems[index].completed;
    //   localStorage.removeItem(todoItem.item);
    //   localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    // },
    // clearAllItems:function(){ //속성 메서드 축약
    //   localStorage.clear();
    //   this.todoItems=[];
    // }

  },
  created(){ //속성 메서드 축약
  //   if(localStorage.length >0){
  //     for(let i = 0 ; i < localStorage.length; i++){ //let변환 값이 증가
  //       if(localStorage.key(i) !== 'loglevel:webpack-dev-server' ){
  //         this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
  //       }
  //     }
  //   }

  },
  components: {
    TodoList, //속성명의 축약
    TodoFooter //속성명의 축약
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
