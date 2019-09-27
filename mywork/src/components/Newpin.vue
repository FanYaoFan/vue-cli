<template>
    <div>
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
</template>
<script>

export default {
    data(){
        return {
            newPizza : {}
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
              let localdata  =   localStorage.setItem('data',JSON.stringify(data));
           
        }
    }
}
</script>