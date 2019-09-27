<template>
    <div>

           <div id="home" class="row text-center">
               <div class="col-md-12">
                   <h1>欢迎大家</h1>
                   <h2>这里有你喜欢的东西</h2>
                   <button  @click="letGo" class="btn btn-success"><h3>Lets GO!</h3></button>
               </div>
           </div>
      

    </div>
</template>
<script>
export default {
       data(){
           return {}
       },
    //    created(){
    //        this.letGo()
    //    },
       methods: {
           letGo(){
               this.$router.replace('/order')
           }
       }
}
</script>
<style scoped>
  #home{
      background-image: url('../assets/images/code.png');
      height: 85vh;
      background-size: cover;
      padding-top: 7%;
       color : #fff;
  }
  h1 h2{
      margin: 0 auto;
  }
</style>