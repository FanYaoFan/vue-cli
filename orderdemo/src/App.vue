<template>
  <div id="app">
    <LeftNav></LeftNav>
  <div class="main"> 
     <router-view></router-view>
  </div>
  </div>
</template>
<script>
import LeftNav from './components/common/LeftNav'
export default {
     name:'app',
     components: {
      LeftNav
     }
}
</script>

<style lang="scss" scoped>
  #app{
   text-align: center;
   color : #2c3e50;
  }
  .main{
    float: right;
    width: 95%;
    background-color: #fff;
    height: 100%;
    overflow: hidden;
  }
</style>
