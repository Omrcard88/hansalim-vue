import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const storage={
    fetch(){
        const arr = [];
        if(localStorage.length >0){
            for(let i = 0 ; i < localStorage.length; i++){ //let변환 값이 증가
              if(localStorage.key(i) !== 'loglevel:webpack-dev-server' ){
                arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
              }
            }
          }
        return arr;
    }


};


export const store = new Vuex.Store({
    state:{
        headerText:'TODO it!',
        message: '',
        num: '',
        todoItems: storage.fetch(),
     
        
    },
    getters:{
        getTodoRate(state){
            let doItemCnt = state.todoItems.filter(todoItem => todoItem.completed).length;
            let regItemCnt = state.todoItems.length;
            return regItemCnt==0 ? 0 : Math.round( doItemCnt / regItemCnt* 100);
        },
     
        getRegItemCnt(state){
       
            return state.todoItems.length;
        },
        getDoItemCnt(state){
            return state.todoItems.filter(todoItem => todoItem.completed).length;
        }
    },
    mutations : {
        addOneItem(state, todoItem){//속성 메서드 축약
            const obj = {completed:false, item: todoItem.item, content:todoItem.content}; //const
            localStorage.setItem(todoItem.item, JSON.stringify(obj));
            state.regItemCnt ++;
            state.todoItems.push(obj);
        },
        removeOneItem(state, payLoad){//속성 메서드 축약

            localStorage.removeItem(payLoad.todoItem.item);
            state.regItemCnt --;
            state.todoItems.splice(payLoad.index, 1);
        },
        toggleOneItem(state, payLoad){//속성 메서드 축약
            state.todoItems[payLoad.index].completed = !state.todoItems[payLoad.index].completed;
            if(state.todoItems[payLoad.index].completed){
                state.doItemCnt ++;
            }else{
                state.doItemCnt --;
            }
            localStorage.removeItem(payLoad.todoItem.item);
            localStorage.setItem(payLoad.todoItem.item, JSON.stringify(payLoad.todoItem));
        },
        clearAllItems(state){ //속성 메서드 축약
            localStorage.clear();
            state.todoItems=[];
        },
        addRegItemCnt(state, payLoad){

        }
    }

});