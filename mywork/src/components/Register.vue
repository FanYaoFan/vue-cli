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
          <div class="input-group input-group-lg">
            <span class="input-group-addon" id="sizing-addon1">确认密码</span>
            <input type="password" class="form-control"  aria-describedby="sizing-addon1" v-model="confirmpassword">
         </div><br>
            <button @click="axiosRegister" type="button" class="btn btn-block btn-success">注册</button>
    
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
            confirmpassword : '',
        }
    },

    methods: {
       axiosRegister(){
            axios({
                url : url.registerUser,
                method : 'post',
                data : {
                    username : this.username,
                    password : this.password,
                },
               
            })
            .then( (response) => {
                // console.log(response)
                if(response.status === 200 && this.password === this.confirmpassword){
                    console.log('注册成功')
                    this.$router.push('/')
                    // console.log(response + '2')
                }else{
                    console.log('注册失败')
                }
            })
            .catch( error => {
                console.log(error)
            })
        },
    },
    
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