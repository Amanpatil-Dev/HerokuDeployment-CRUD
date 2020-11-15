const axios=require('axios')

// console.log(process.env)
exports.homeRoute=(req,res)=>{
    // get request to api/users
    axios.get(`http://localhost:${process.env.PORT}/api/users`)
    .then(function (response){
    
        res.render('index',{
            users:response.data
        })

    })
    .catch(err=>{
        res.send(err)
    })
    
  
}

exports.addUser=(req,res)=>{
    res.render('add_user')
}

exports.updateUser=(req,res)=>{
    axios.get(`http://localhost:${process.env.PORT}/api/users`,{params:{id:req.query.id}})
    .then(function(userdata){
        res.render('update_user',{
            user:userdata.data
        })
    })
    .catch(err=>{
        res.send(err)
    })
   
}