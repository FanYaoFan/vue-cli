<template>
    <div>
       
       <div class="container">
        <div class="row">
            <div class="col-md-12">
                <img  :src="icon" alt="" class="center-block">
   
        <div class="input-group input-group-lg">
            <span class="input-group-addon" id="sizing-addon1">用户名</span>
            <input type="text" class="form-control" placeholder="Username" aria-describedby="sizing-addon1" v-model="username">
        </div><br>
         <div class="input-group input-group-lg">
            <span class="input-group-addon" id="sizing-addon1">密码</span>
            <input type="password" class="form-control"  aria-describedby="sizing-addon1" v-model="password">
         </div><br>
            <button @click="axiosLogin" type="button" class="btn btn-block btn-success">登录</button>

        

            </div>
        </div>

</div>

    </div>
</template>
<script>
import axios from 'axios'
import url from '@/serviceAPI.config.js'
export default {
    data(){
        return {
            icon : require('../assets/images/ic.jpg'),
            username : '',
            password : '',
        }
    },
    created(){
            if(localStorage.userInfo){
                    console.log('您已经登录')
                    this.$router.push('/')
            }
        },
    methods: {
       axiosLogin(){
           axios({
               url : url.loginUser,
               method: 'post',
               data : {
                  username : this.username,
                   password : this.password,
               }
           })
           .then( (response) => {
                if( response.status === 200){
                //    console.log('登录成功')
               }
               new Promise( (resolve,reject) =>{
                   localStorage.userInfo = {username : this.username}
                   setTimeout( ()=>{
                       resolve()
                   },500)
               }).then( () => {
                   console.log('登录成功')
               })
               .catch( (error) => {
                   console.log(error)
                   console.log ('登录状态保存失败')
               })
              
              
               })
           .catch( error => { 
               console.log('登录失败')
               console.log(error)
               })
               
        }
    }
    
}
</script>
<style scoped>
    img {
        border-radius: 60%;
        margin: 0 auto;
        margin-top: 10px;
        margin-bottom: 10px;
    }
</style>