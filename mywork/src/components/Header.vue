<template>
  

        <header> 
   <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand mybrand" href="#">手机品牌</a>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
            <router-link to="/" class="nav-link">主页</router-link>
        </li>
        <li class="nav-item">
            <router-link to="/menu">菜单</router-link> 
        </li>
        <li> <router-link to="/admin" class="nav-link">管理</router-link></li>
        <li> <router-link to="/about" class="nav-link">关于我们</router-link></li>
        </ul>
        <ul class="navbar-nav  navbar-right">
            <!-- <li> <router-link to="/login" class="nav-link" v-show="islogin">登录</router-link></li> -->
            <li> <router-link to="/login" class="nav-link">登录</router-link></li>
            <li> <router-link to="/register" class="nav-link" >注册</router-link></li>
            <!-- <li> <router-link to="/register" class="nav-link" v-show="!islogin">注册</router-link></li> -->
        </ul>
   </div>
    </nav>
   </div>
        </header>

  
</template>
<script>
export default {
    
        data () {
            return {
                icon : require('../assets/images/icon.png'),
                // islogin : false
            }
        },
       
}
</script>
<style scoped>
    ul {
        list-style: none;
    }
    .mybrand  {
         height : 40px ;
         line-height: 10px !important; 
    }
   .navbar a {
        color:black;
        font-size: 18px;
        padding-left: 30px;
        padding-right: 12px;
        height : 40px;
        line-height: 40px
    }
</style>