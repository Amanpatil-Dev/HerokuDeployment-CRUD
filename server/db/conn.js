const mongoose=require('mongoose')

const ConnectDB=async()=>{
    try {
        const con= await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
            useFindAndModify:false,
            useCreateIndex:true,
            useUnifiedTopology:true,
            // useMongoClient:true
        })
        console.log(`mongoDb Conect :${con.connection.host}`)
    } catch (error) {
        console.log(error)
        process.exit(1)

        
    }
} 
module.exports=ConnectDB