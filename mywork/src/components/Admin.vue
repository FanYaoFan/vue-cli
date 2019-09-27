<template>
    <div>
        <div class="container">
            <div class="row">
           <div class="col-sm-12 co-md-8">
              <!-- //newpin组件 -->
            <form>
            <h3 class="text-muted my-5">添加</h3>
            <div class="row form-group">
                <label class="col-sm-1">品种</label>
                <div class="col-sm-11">
                    <input type="text" class="form-control" v-model="newPizza.name">
                </div>
            </div>
             <div class="row form-group">
                <label class="col-sm-1">描述</label>
                <div class="col-sm-11">
                    <textarea rows="5" class="form-control" v-model="newPizza.discription"></textarea>
                </div>
            </div>
            <p><strong>选项1</strong></p>
             <div class="row form-group">
                <label class="col-sm-1">尺寸</label>
                <div class="col-sm-11">
                    <input type="text" class="form-control" v-model="newPizza.size2">
                </div>
            </div>
             <div class="row form-group">
                <label class="col-sm-1">价格</label>
                <div class="col-sm-11">
                    <input type="text" class="form-control" v-model="newPizza.price2">
                </div>
            </div>
              <div class="from-group row">
                  <button type="button" class="btn btn-success btn-block" @click="addMenuItem">添加</button>
                  </div>        
        </form> 

           </div>

           <div class="col-sm-12 co-md-4">
               <h3 class="text-muted my-5">菜单</h3>
               <table class="table">
                   <thead class="table table-default">
                       <tr>
                           <th>品牌</th>
                           <th>删除</th>
                       </tr>
                   </thead>
                   <tbody v-for="item in newdata" :key="item.name">
                       <tr>
                           <td>{{item.name}}</td>
                           <td><button class="btn btn-danger btn-sm">x</button></td>
                       </tr>
                   </tbody>
               </table>
           </div>
       </div>
        </div>
       

    </div>
</template>
<script>
// import  Newpin from './Newpin.vue'
export default {
    data(){
        return {
            newPizza : {},
            newdata : [],
        }
    },
    methods: {
        addMenuItem(){
           
            let data = {
                name : this.newPizza.name,
                discription: this.newPizza.discription,
                options : [
                    {
                        size : this.newPizza.size2,
                        price : this.newPizza.price2
                    }
                ]
            }
              let localdata  =   localStorage.setItem('data',JSON.stringify(data))
                 let newdata = []
                this.newdata.push (JSON.parse(localStorage.getItem('data')))
        }
        
    }
}
</script>


