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