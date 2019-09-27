<template>
    <div>

      <div class="container">
        <div class="row">
           <div class="col-md-4 col-font">
               <div class="list-group">
                  <router-link to="/history"  class="list-group-item active">历史订单</router-link>
                  <router-link to="/contact"  class="list-group-item">联系我们</router-link>
                  <router-link to="/order"  class="list-group-item">点餐文档</router-link>
                  <router-link to="/dilibrary"  class="list-group-item">快递信息</router-link>
                </div>
           </div>
           <div class="col-md-8">
             <!-- 导航对应的内容 -->
                <router-view></router-view>
           </div>
        </div>
      </div>
     
       
    </div>
</template>
<style scoped>
   .col-font{
     font-size:22px;
   }
</style>