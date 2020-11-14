const express= require('express')
const dotenv=require('dotenv')
const moragn=require('morgan')
const bodyParser=require('body-parser')
const path=require('path')
const app=express()
const route=require('./server/route/router')
const ConnectDb=require('./server/db/conn')
const PORT = process.env.PORT || 3000
dotenv.config({path:'congif.env'})

// console.log request
app.use(moragn('tiny'))

// mongodb connection
ConnectDb()


// Parse request to bodyparser
app.use(bodyParser.urlencoded({extended:true}))

// set view engne
app.set('view engine','ejs')

// load assets
app.use('/css',express.static(path.resolve(__dirname,'assets/css')))
// const addr=path.resolve(__dirname,'assets/css')
// console.log(addr)
//css/style.css

app.use('/js',express.static(path.resolve(__dirname,'assets/js')))

app.use('/img',express.static(path.resolve(__dirname,'assets/img')))

// node routers
app.use(route)


console.log(process.env.MONGO_URI)
app.listen(PORT,()=>{
    console.log('running server')
})