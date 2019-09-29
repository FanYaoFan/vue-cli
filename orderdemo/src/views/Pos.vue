<template>
  <div class="pos">
    <el-row>
      <el-col :span="7" id="orderlist" class="pos-order">
        <el-tabs>
          <el-tab-pane label="点餐">
            <el-table :data="tableData" border style="wdith:100%">
              <el-table-column prop="goodsName" label="商品名称"></el-table-column>
              <el-table-column prop="count" label="数量" width="50"></el-table-column>
              <el-table-column prop="price" label="金额" width="70"></el-table-column>
              <el-table-column prop="operation" label="操作" width="100" fixed="right">

                <el-button type="danger" >-</el-button>
               
              </el-table-column>
            </el-table>
            <div class="total">数量 : {{totalCount}}; &nbsp; 金额: {{totalMoney}}元</div>
            <div class="btnBox">
              <el-button type="warning">挂单</el-button>
              <el-button type="danger" @click="delAllGoods()">删除</el-button>
              <el-button type="success" @click="checkout()">下单</el-button>
            </div>
          </el-tab-pane>
          <el-tab-pane label="挂单"></el-tab-pane>
          <el-tab-pane label="外卖"></el-tab-pane>
        </el-tabs>
      </el-col>
      <el-col :span="17">
        <div class="often">
          <div class="title">常用商品</div>
          <div class="oftenList">
            <ul>
              <li v-for="goods in oftenGoods" :key="goods.id" @click=" addOrderList(goods)">
                <span>{{goods.goodsName}}</span>
                <span class="o-price">￥{{goods.price}}</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="goods-type">
          <el-tabs>
            <el-tab-pane label="汉堡">
              <div class="goods-type">
                <ul class="cookList">
                  <li v-for="goods in type0Goods" :key="goods.id">
                    <span class="foodName">{{goods.goodsName}}</span>
                    <span class="foodPrice">￥{{goods.price}}</span>
                  </li>
                </ul>
              </div>
            </el-tab-pane>
            <el-tab-pane label="小食">
              <div class="goods-type">
                <ul class="cookList">
                  <li v-for="goods in type1Goods" :key="goods.id">
                    <span class="foodImg">
                      <img :src="goods.goodsImg" width="100%" />
                    </span>
                    <span class="foodName">{{goods.goodsName}}</span>
                    <span class="foodPrice">￥{{goods.price}}</span>
                  </li>
                </ul>
              </div>
            </el-tab-pane>
            <el-tab-pane label="饮料">
              <div class="goods-type">
                <ul class="cookList">
                  <li v-for="goods in type2Goods" :key="goods.id">
                    <span class="foodImg">
                      <img :src="goods.goodsImg" width="100%" />
                    </span>
                    <span class="foodName">{{goods.goodsName}}</span>
                    <span class="foodPrice">￥{{goods.price}}</span>
                  </li>
                </ul>
              </div>
            </el-tab-pane>
            <el-tab-pane label="套餐">
              <div class="goods-type">
                <ul class="cookList">
                  <li v-for="goods in type3Goods" :key="goods.id">
                    <span class="foodImg">
                      <img :src="goods.goodsImg" width="100%" />
                    </span>
                    <span class="foodName">{{goods.goodsName}}</span>
                    <span class="foodPrice">￥{{goods.price}}</span>
                  </li>
                </ul>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Pos",
  data() {
    return {
      tableData: [],
      oftenGoods: [
        {
          goodsId: 1,
          goodsName: "香辣鸡腿堡",
          price: 18
        },
        {
          goodsId: 2,
          goodsName: "田园鸡腿堡",
          price: 15
        },
        {
          goodsId: 3,
          goodsName: "和风汉堡",
          price: 15
        },
        {
          goodsId: 4,
          goodsName: "大包薯条",
          price: 18
        },
        {
          goodsId: 5,
          goodsName: "脆皮炸鸡腿",
          price: 20
        },
        {
          goodsId: 6,
          goodsName: "魔法鸡块",
          price: 20
        },
        {
          goodsId: 7,
          goodsName: "可乐大杯",
          price: 10
        },
        {
          goodsId: 8,
          goodsName: "雪顶咖啡",
          price: 18
        },
        {
          goodsId: 9,
          goodsName: "儿童欢乐套餐",
          price: 25
        },
        {
          goodsId: 10,
          goodsName: "快乐全家桶",
          price: 99
        }
      ],
      type0Goods: [
        {
          goodsId: 1,

          goodsName: "香辣鸡腿堡",
          price: 18
        },
        {
          goodsId: 2,

          goodsName: "田园鸡腿堡",
          price: 15
        },
        {
          goodsId: 3,

          goodsName: "和风汉堡",
          price: 15
        }
      ],
      type1Goods: [
        {
          goodsId: 4,

          goodsName: "大包薯条",
          price: 18
        },
        {
          goodsId: 5,

          goodsName: "脆皮炸鸡腿",
          price: 20
        },
        {
          goodsId: 6,

          goodsName: "魔法鸡块",
          price: 20
        }
      ],
      type2Goods: [
        {
          goodsId: 7,

          goodsName: "可乐大杯",
          price: 10
        },
        {
          goodsId: 8,

          goodsName: "雪顶咖啡",
          price: 18
        }
      ],
      type3Goods: [
        {
          goodsId: 9,

          goodsName: "儿童欢乐套餐",
          price: 25
        },
        {
          goodsId: 10,

          goodsName: "快乐全家桶",
          price: 99
        }
      ],
      totalCount: 0,
      totalMoney: 0
    };
  },
  methods: {
    
    //添加订单列表的方法
    addOrderList(goods) {
      this.totalCount = 0; //汇总数量清0
      this.totalMoney = 0;
       let newGoods = {
          goodsId: goods.goodsId,
          goodsName: goods.goodsName,
          price: goods.price,
          count: 1
        };
      let isHave = false;
      //判断是否这个商品已经存在于订单列表
      for (let i = 0; i < this.tableData.length; i++) {
        console.log(this.tableData[i].goodsId);
        if (this.tableData[i].goodsId == goods.goodsId) {
          isHave = true; //存在
        }
      }
      //根据isHave的值判断订单列表中是否已经有此商品
      if (isHave) {
        //存在就进行数量添加
        let arr = this.tableData.filter(o => o.goodsId == goods.goodsId);
        arr[0].count++;
        //console.log(arr);
      } else {
        //不存在就推入数组
       
        this.tableData.push(newGoods);
      }
      //进行数量和价格的汇总计算
      this.tableData.forEach(element => {
        this.totalCount += element.count;
        this.totalMoney = this.totalMoney + element.price * element.count;
      });
    },
    //  //删除单个商品
    // remove() {
      
    //    if(this.tableData.length > 0){
    //      console.log(this.tableData)
          
    //       // this.tableData.
    //    }
      
    // },
    //删除所有商品
    delAllGoods() {
      this.tableData = [];
      this.totalCount = 0;
      this.totalMoney = 0;
    },
    checkout() {
      if (this.totalCount != 0) {
        this.tableData = [];
        this.totalCount = 0;
        this.totalMoney = 0;
        this.$message({
          message: "下单成功!",
          type: "success"
        });
      } 
    }
  },
  // 由于Easymock老挂,写死数据了
  // created() {
  //   axios
  //     .get(
  //       "http://localhost:3000/often"
  //     )
  //     .then(res => {
  //       console.log(res);
  //       this.oftenGoods = res.data;
  //       console.log(res.data)
  //       console.log( this.oftenGoods)
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     }),
  //     axios
  //       .get(
  //         "http://localhost:3000/type"
  //       )
  //       .then(res => {
  //         this.type0Goods = res.data[0];
  //         this.type1Goods = res.data[1];
  //         this.type2Goods = res.data[2];
  //         this.type3Goods = res.data[3];
  //       })
  //       .catch(err => {
  //         console.log(err);
  //       });
  // },

  mounted() {
    // 等数据全部渲染完.改变其高度
    let orderHeight = document.body.clientHeight; //获得高度
    document.getElementById("orderlist").style.height = orderHeight + "px";
  },

  // 点餐一系列方法

  computed: {
    // 计算:
    total() {
      totalMoney = 0;
      totalCount = 0;
      // this.tableData.forEach( ele => {
      //   this.totalCount += ele.count
      //   this.totalMoney = this.totalMoney + ele.price * ele.count
      // })
      for (let goods in this.tableData) {
        totalMoney += this.tableData[goods].count * this.tableData[goods].price;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.pos-order {
  background-color: #f9fafc;
  border-right: 1px solid #c0ccda;
}
.btnBox {
  margin-top: 10px;
}
.title {
  height: 20px;
  border-bottom: 1px solid #d3dce6;
  background-color: #f9fafc;
  padding: 10px;
}
.oftenList ul li {
  list-style: none;
  float: left;
  border: 1px solid #e5e9fc;
  padding: 10px;
  margin: 10px;
  background-color: #fff;
}
.o-price {
  color: #58b7ff;
}
.goods-type {
  //清除浮动
  clear: both;
}
.cookList li {
  list-style: none;
  width: 23%;
  border: 1px solid #e5e9f2;
  height: auot;
  overflow: hidden;
  background-color: #fff;
  padding: 2px;
  float: left;
  margin: 2px;
  cursor: pointer;
}
.cookList li span {
  display: block;
  float: left;
}
.total {
  background-color: #fff;
  padding: 10px;
  border-bottom: 1px solid #ccc;
}
.foodImg {
  width: 40%;
}
.foodName {
  font-size: 18px;
  padding-left: 10px;
  color: brown;
}
.foodPrice {
  font-size: 16px;
  padding-left: 10px;
  padding-top: 10px;
}
</style>