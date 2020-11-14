const expres=require('express')
const router=expres.Router()
const services=require('../services/render')
const controller=require('../controller/controller')

router.get('/',services.homeRoute)

router.get('/add_user',services.addUser)

router.get('/update_user',services.updateUser)


// api
router.post('/api/users',controller.create)
router.get('/api/users',controller.find)
router.put('/api/users/:id',controller.update)
router.delete('/api/users/:id',controller.delete)


module.exports=router