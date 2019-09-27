const Koa = require ('koa')
const Router = require ('koa-router')
const app = new Koa()
const bodyParser = require ('koa-bodyparser')
const cors = require ('koa2-cors')
// app.use(bodyParser())
app.use(cors())
// 引入init.js文件
const {connect , initSchemas} = require('./database/init.js')
;(async () => { 
   await connect()
   initSchemas()
})() 

// 挂载所有子路由
// 引入子路由
let user =  require ('./database/appAPI/User.js')
// 创建路由对象
let router = new Router()  
// 使用路由,并添加父级路由
router.use('/user', user.routes())
app.use(bodyParser())
app.use(router.routes())
app.use(router.allowedMethods())

app.use( async (ctx) => {
  // ctx.body = ctx.request.body
  ctx.body = 'hello'
})

app.listen(3000, () => {
  console.log('server is running') 
}) 