<template>
    <div>

        <div class="container">
             <div class="row">
                 <div class="col-md-9 col-sm-12">
          <table class="table table-hover">
            <thead>
              <tr>
                <th>尺寸</th>
                <th>价格</th>
                <th>加入</th>
              </tr>
            </thead>
            <tbody v-for = 'item in  getMenuItems' :key="item.name">
                <tr><strong>{{item.name}}</strong></tr>
                <tr v-for="options in item.options" :key="options.size">
                    <td>{{options.size}}</td>
                    <td>${{options.price}}</td>
                    <td><button class="btn btn-sm btn-success" @click="addToBarsket(item,options)">+</button></td>
              </tr>
            </tbody>
          </table>
                 </div>

                 <div class="col-md-3 col-sm-12">
                    <div v-if="barsket.length > 0">
                        <div class="panel panel-success ">
                         <div class="panel-heading"> <h2>购物车</h2></div>
                         <div class="panel-body">
                             <table>
                                 <thead>
                                     <tr>
                                        <th>数量</th>
                                        <!-- <th>品牌</th>  -->
                                        <th>大小</th>
                                        <th>价格</th>
                                     </tr>
                                 </thead>
                                <tbody v-for="item in barsket" :key="item.name">
                                    <tr >
                                        <td>
                                            <button @click="descrease(item)" class="btn btn-sm">-</button>
                                            <span>{{item.quantity}}</span>
                                            <button @click="increase(item)" class="btn btn-sm">+</button>
                                        </td>
                                        <td>{{item.name}}</td>
                                        <td>{{item.size}}</td>
                                        <td></td>
                                        <td>${{item.price * item.quantity}}</td>
                                    </tr>
                               </tbody>  
                             </table>
                          <p>总价 : ${{total}} </p>
                          <button class="btn btn-success btn-block">提交</button>
                        </div>
                     </div> 
                    </div>
                    <div v-else>{{barsketElse}}</div>
                   
                  </div>
             </div>
        </div>
     
    </div>
</template>
<script>
export default {
    data(){
        return {
            getMenuItems: {
                1 :{
                    'name' : 'oppo',
                    'disciption' : '这是喜欢oppo手机的最佳选择',
                    'options' : [{
                        'size' : 9,
                        'price' :500,
                    }]
                },
                2 : {
                    'name' : 'vivo',
                    'disciption' : '这是喜欢vivo手机的最佳选择',
                    'options' : [{
                        'size' : 9,
                        'price' :500,
                    }]
                },
                3 : {
                    'name' : 'apple',
                    'disciption' : '这是喜欢apple手机的最佳选择',
                    'options' : [{
                        'size' : 9,
                        'price' : 500,
                    }]
                }
            },
            barsket:[],
            barsketElse : '购物车没有任何商品',
            numList:''
        }
    },
    computed: {
        total(){
            let totalCost = 0
            for (let index in this.barsket){
                totalCost += this.barsket[index].quantity * this.barsket[index].price
            }
            return totalCost
        }
    },
    methods: {
        addToBarsket(item,options){
            let newBarsket = {
                name : item.name,
                size : options.size,
                price : options.price,
                quantity : 1
            }
            if(this.barsket.length > 0) {
            //  过滤
           let result = this.barsket.filter ( (newBarsket) => {
                // 两个相等代表 这个里面已经拥有了
                return (newBarsket.name === item.name && newBarsket.price === options.price )

            }) 
             //过滤出的东西长度>0,对其里面的对象的quantity进行累加
                if(result != null && result.length >0 ){
                    result[0].quantity ++
                }else{
                    this.barsket.push(newBarsket)
                }
            
                
            }else{
                 this.barsket.push(newBarsket)
            }
        }
        ,
        increase(item){
            item.quantity++
        },
        descrease(item){
             item.quantity--
             if(item.quantity <= 0){
             item.quantity = 0
             }
        },
             
    }
}
</script>