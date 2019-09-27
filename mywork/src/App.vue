<template>
  <div id="app">
     <div class="contanier">
       <my-header></my-header>
     </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header'
export default {
  name: 'App',
  components: {
    myHeader : Header
  }
}
</script>

<style>

</style>
