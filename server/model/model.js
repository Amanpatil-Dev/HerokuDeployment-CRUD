const mongosse=require('mongoose')

const userschema=new mongosse.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    gender:String,
    status:String

})

const Userdb=mongosse.model('userdb',userschema)

module.exports=Userdb