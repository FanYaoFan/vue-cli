# mywork

## 购物车原理的小demo

# [预览图](https://github.com/FanYaoFan/vue-cli/blob/master/mywork/gif/b.gif)

### 学习点
1 过滤器的使用
// 两个相等代表 这个里面已经拥有了  
 //过滤出的东西长度>0,对其里面的对象的quantity进行累加    
     let result = this.barsket.filter ( (newBarsket) => {  
    return (newBarsket.name === item.name && newBarsket.price === options.price )
            }) 
 
             if(result != null && result.length >0 ){
                    result[0].quantity ++
                }else{
                    this.barsket.push(newBarsket)
                }
                
            }else{
                 this.barsket.push(newBarsket)
            }
2 父子组件的传值 (可以改用vuex)  
3 注册是利用了一部分koa2+mongodb (只写注册到了数据库中) 基本配置 这里只是对koa(node.js的一次尝试)  
基本了解了koa的路由配置和跨域(koa2-cors)以及post/get传递数据的不同 koa2中post出传统数据要用到koa-bodyparser    
*--service
  *-init.js   
   *|--database   
   *|--appAPI
      *|--User.js  
   *|--Schema  
      *|--user.js  
  *--index.js  
  ### 服务器实现代码   
  index.js  (中要挂载所有子路由模块 引入子路由)
 * index.js   
    ` const Koa = require ('koa') `       
    ` const Router = require ('koa-router')   `   
    ` const app = new Koa()    
    ` const bodyParser = require ('koa-bodyparser')`    
    ` const cors = require ('koa2-cors')    
    ` app.use(bodyParser())  `  
   ` app.use(cors()) `  
// 引入init.js文件
    const {connect , initSchemas} = require('./database/init.js')
    `;(async () => { 
      await connect()
       initSchemas()
    })() `

// 挂载所有子路由
// 引入子路由
    let user =  require ('./database/appAPI/User.js')
// 创建路由对象
    let router = new Router()  
// 使用路由,并添加父级路由
    `router.use('/user', user.routes())`  
    `app.use(bodyParser())`  
    `app.use(router.routes())`  
   `app.use(router.allowedMethods())`

    app.use( async (ctx) => {
     // ctx.body = ctx.request.body
     ctx.body = 'hello'
    })
     // 服务器开启
     app.listen(3005, () => {
     console.log('server is running') 
     }  ) 
*init.js (连接数据库代码)       
   ` const mongoose = require ('mongoose')`  
     `const glob = require ('glob')`  
   `const {resolve} = require ('path')`
`mongoose.connect ( "mongodb://localhost/demo"  ,{autoIndex : false})`
`mongoose.set('useNewUrlParser', true)`
`let maxConnectTimes = 0`
     `exports.initSchemas = () =>{
      glob.sync(resolve(__dirname,'./schema/','**/*.js')).forEach(require)
      }`
   ` let db = mongoose.connection`
      exports.connect = () => {
       return new Promise(  (resolve, reject) => {
           //  连接数据库
         db.on ('disconnected' , ()  => {
            console.log('数据库断开')  
            if ( maxConnectTimes <= 3){  
                maxConnectTimes++  
                mongoose.connect("mongodb://localhost/demo")    
            }else{  
                reject()  
                throw new Error('数据库重连次数超过最大值')  
            }  
        }),
        db.on('error', () => {  
            console.log('数据库错误')  
            mongoose.connect("mongodb://localhost/demo")  
        })  
        db.once( 'open', () => {  
            console.log('Mongodb Connected successfully')  
            resolve()  
        })  
     })
    }


     
    
 *appAPI ->user.js
    `const Router = require ('koa-router')`  
    `const mongoose = require ('mongoose')`  
    `let router = new Router()`  
    `router.get( '/', async (ctx) => {
    ctx.body = '用户操作首页'
    })`  

    router.post('/register' ,  async (ctx) => {
    //     console.log(ctx.request.body)
    //    ctx.body = ctx.request.body

//  1 取得model
     `const User = mongoose.model('User')`
//    2 把从前端获取到的post数据封装成一个新的user对象
     let newuser = new User( ctx.request.body)
        // 用mongoose的save方法保存
     
    await newuser.save().then( () => {
        //成功返回code=200;并返回成功信息
        ctx.body = {
            code : 200,
            message : '注册成功了'
        }

    })
    .catch( (error) => {
        ctx.body = {
            code : 500,
            message : error
        }
        console.log(error)
    })

    })
       // router.get('/login' , async (ctx) => {
     //     ctx.body = 'hello login'
    // })
    // 登录  
     router.post('/login' , async (ctx) => {
    let loginUser = ctx.request.body
    let username = loginUser.username
    let password = loginUser.passworsd
    // 引入user的model
    const User = mongoose.model('User')
  
    // 查找用户名是否存在
    await User.findOne( {username : username}).exec()
    .then( async(result) => {
        console.log(result)
        if(result){
            if(password ===  result.passworsd ){
                ctx.body = {code : 200}
                console.log('登录成功')
            }
        }else{
            ctx.body = {code : 200, message : '账号或密码错误'}
        }
    })
    .catch((error) => {
        ctx = {
            code : 500,
            message : error
        }
    })
    })
    module.exports = router  
*Schema -> user.js
    const mongoose = require ('mongoose')
    const Schema = mongoose.Schema
    var ObjectId = Schema.Types.ObjectId //声明object类型

    const userSchema = new Schema({
    UserId : { type : ObjectId},
    username : {unique : true, type : String},
    // username : { type : String},
    password : String,
    createAt : { type : Date, default : Date.now()},
    lastLogin : { type : Date, default : Date.now()},
    })
    module.exports = mongoose.model('User',userSchema)




