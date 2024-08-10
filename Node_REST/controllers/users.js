const { v4: uuidv4 } = require('uuid');
const {genSaltSync,hashSync}=require('bcrypt')
const {createUser,getAllUsers,getUserById,deleteUserById, updateUserById}=require('../models/user.js')

const getUsers=(req,res)=>{
    getAllUsers((error,result)=>{
        if (error) {
            res.status(404).send({success:0, message: error });
        } else {
            res.status(200).send({success:1, data: result });
        }
    })
}

const addUser=(req,res)=>{
    createUser({...req.body,id:uuidv4(),password:hashSync(req.body.password,genSaltSync(10))},(error,result)=>{
        if (error) {
            res.status(404).send({success:0, message: error });
        } else {
            res.status(200).send({success:1, data: result });
        }
    })
}

const getUser=(req,res)=>{
    getUserById(req.params.id,
        (error,result)=>{
            if (error) {
                res.status(404).send({success:0, message: error });
            } else {
                res.status(200).send({success:1, data: result });
            }
        }
    )
}

const deleteUser=(req,res)=>{
    deleteUserById(req.params.id,
        (error,result)=>{
            if (error) {
                res.status(404).send({success:0, message: error });
            } else {
                res.status(200).send({success:1, data: result });
            }
        }
    )
}

const updateUser=(req,res)=>{
    if ('password' in req.body) {
        updateUserById({...req.body,password:hashSync(req.body.password,genSaltSync(10))},req.params.id,(error,result)=>{
            if (error) {
                res.status(404).send({success:0, message: error });
            } else {
                res.status(200).send({success:1, data: result });
            }
        })
    } else {
        updateUserById(req.body,req.params.id,(error,result)=>{
            if (error) {
                res.status(404).send({success:0, message: error });
            } else {
                res.status(200).send({success:1, data: result });
            }
        })
    }
}

const loginUser=(req,res)=>{
    res.send("user logged in")
}

module.exports = {
    getUsers,
    addUser,
    getUser,
    deleteUser,
    updateUser,
    loginUser
}