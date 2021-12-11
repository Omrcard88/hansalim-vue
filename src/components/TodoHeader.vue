<template>
  <!-- html -->
  <header>
    <!-- <h1>TODO it!</h1> -->
    <h1> {{ this.$store.state.headerText}}</h1>

    <div>
       <span>등록건수 : {{this.$store.getters.getRegItemCnt}}  완료건수 : {{this.$store.getters.getDoItemCnt}}  완료율 : <span v-bind:class= "compliteRateColor">{{this.$store.getters.getTodoRate}}</span></span> 
    </div>

  </header>
</template>
<script>


export default ({
  computed:{
    compliteRateColor(){
      const rate = this.$store.getters.getTodoRate;
      if(rate <40){
        return "doNot";
      }else if(rate <80){
        return "ing";
      }else{
        return "completed";
      }
    }
  }
});
</script>



<style scoped>
h1 {
  color: #2f3b52;
  font-weight: 900;
  margin: 2.5rem 0 1.5rem;
}

.completed{
  color: green;
}
.ing{
  color: orange;
}
.doNot{
  color:red;
}
</style>
