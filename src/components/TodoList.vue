<template>
  <div>
    
    <transition-group name="list" tag="ul">
      <li v-for="(todoItem, index) in this.$store.state.todoItems" v-bind:key="todoItem.item" class="shadow">
        <i class="checkBtn fas fa-check" v-bind:class="{checkBtnCompleted: todoItem.completed}"  v-on:click="toggleComplete(todoItem, index)"></i>
        <span v-bind:class="{textCompleted: todoItem.completed}" @click="showInfoModal(todoItem, index)" >{{ todoItem.item }}</span>
        <span class="removeBtn" v-on:click="removeTodo(todoItem, index)">
          <i class="fas fa-trash-alt"></i>
        </span>

      </li>
    </transition-group>
      
      <Modal v-if="showModal" @close="showModal = false">
        <h3 slot="header" >{{modalTitle}}<i class="closeModalBtn fas fa-times" v-on:click="showModal = false"></i></h3>
        <h3 slot="body"  > {{modalContent}}</h3>
      </Modal>     
    
  </div>
</template>

<script>
import Modal from './common/Modal.vue'
export default {
  data(){//속성 메서드 축약
    return{
      showModal:false,
      modalTitle:'',
      modalContent:''
    
    }
  },
  // props: ['propsdata'],
  methods: {
    removeTodo(todoItem, index){//속성 메서드 축약
      // this.$emit('removeItem', todoItem, index);
      const obj = {
          todoItem,
          index
      };
      this.$store.commit('removeOneItem', obj);
   
    },
    toggleComplete(todoItem, index){//속성 메서드 축약
      // this.$emit('toggleItem', todoItem, index);
      const obj = {
          todoItem,
          index
      };
      this.$store.commit('toggleOneItem', obj);
    },
    showInfoModal(todoItem, index){//속성 메서드 축약
   
      this.modalTitle= todoItem.item;
      this.modalContent= todoItem.content;
      this.showModal = !this.showModal;
    }
    
  },
  components: {
    Modal //속성명의 축약
  }
  
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}
.checkBtn {
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
}
.checkBtnCompleted {
  color: #b3adad;
}
.textCompleted {
  text-decoration: line-through;
  color: #b3adad;
}
.removeBtn {
  margin-left: auto;
  color: #de4343;
}
/* transition css */
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>
