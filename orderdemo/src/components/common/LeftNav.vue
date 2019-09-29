<template>
    <div  class="leftNav">
        <ul>
            <li>
               <i class="iconfont icon-shouyin myicon"></i>
                <div>收银</div>
            </li>
            <li>
                <i class="iconfont  icon-gouwuchekong myicon"></i>
                 <div>店铺</div>
            </li>
            <li>
                <i class="iconfont icon-caidan myicon"></i>
                <div>商品</div>
            </li>
            <li>
                <i class="iconfont icon-huiyuan myicon"></i>
                <div>会员</div>
            </li>
            <li>
                <i class="iconfont icon-shezhi myicon"></i>
                <div>设置</div>
            </li>
        </ul>
      


    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss">
    .leftNav{
        color: #fff;
        font-size: 24px;
        height: 100%;
        background-color:#1D8CE0;
        float: left;
        width:5%;
    }
    .leftNav ul {
        padding : 0px;
        margin : 0;
    }
    .leftNav li {
        list-style: none;
        text-align: center;
        border-bottom : 1px solid #20a0ff;
        padding : 10px;
    }
    .myicon{
        font-size: 25px;
    }
</style>