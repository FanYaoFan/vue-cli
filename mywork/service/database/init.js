const mongoose = require ('mongoose')
const glob = require ('glob')
const {resolve} = require ('path')
mongoose.connect ( "mongodb://localhost/demo"  ,{autoIndex : false})
mongoose.set('useNewUrlParser', true)
let maxConnectTimes = 0
exports.initSchemas = () =>{
    glob.sync(resolve(__dirname,'./schema/','**/*.js')).forEach(require)
  }
let db = mongoose.connection
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

