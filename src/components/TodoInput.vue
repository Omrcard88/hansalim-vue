<template>
  <div >
    <div class="inputBox shadow">
      
        
      <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo" />
      <span class="addContainer" v-on:click="addTodo">
        <i class="fas fa-plus addBtn" ></i>
      </span>
    </div>
    <div >
          <textarea  v-model="newTodoContent" v-on:keyup.enter="addTodo"  >
            
          </textarea>
        
    </div>  
   
    
    <Modal v-if="showModal" @close="showModal = false">

      <h3 slot="header">경고!<i class="closeModalBtn fas fa-times" v-on:click="showModal = false"></i></h3>
      <h3 slot="body">할일 제목과 내용을 입력하세요.</h3>

      
    </Modal>
    
  </div>
</template>

<script>
import Modal from './common/Modal.vue'

export default {
  data(){//속성 메서드 축약
    return{
      newTodoItem:"",
      newTodoContent:"",
      showModal:false
    }
    
  },
  methods: {
    addTodo() {//속성 메서드 축약
      if(this.newTodoItem !== '' && this.newTodoContent !== ''){
        // this.$emit('addTodoItem' , this.newTodoItem, this.newTodoContent);
        
        const todoItem = {item : this.newTodoItem, content : this.newTodoContent }
        this.$store.commit("addOneItem", todoItem);
        this.clearInput();
        this.moveToListPage();
      }else{
        this.showModal = !this.showModal;
      }
      
    },
    clearInput() {//속성 메서드 축약
      this.newTodoItem = '';
      this.newTodoContent = '';
    },
    moveToListPage(){//속성 메서드 축약
        this.$router.push("/list");
    }
  },
  components: {
    Modal //속성명의 축약
  }
 
};
</script>

<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #6478fb, #8763fb);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
.closeModalBtn {
  color: #42b983;
}

</style>
