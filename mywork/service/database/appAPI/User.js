const Router = require ('koa-router')
const mongoose = require ('mongoose')
let router = new Router()
router.get( '/', async (ctx) => {
    ctx.body = '用户操作首页'
})

router.post('/register' ,  async (ctx) => {
//     console.log(ctx.request.body)
//    ctx.body = ctx.request.body

//  1 取得model
const User = mongoose.model('User')
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