const express=require('express')
const router=express.Router()
const { getUsers,addUser,getUser,deleteUser,updateUser,loginUser }= require('../controllers/users')

router.post('/login',loginUser)
router.get('/',getUsers)
router.post('/',addUser)
router.get('/:id',getUser)
router.delete('/:id',deleteUser)
router.patch('/:id',updateUser)

module.exports = router;