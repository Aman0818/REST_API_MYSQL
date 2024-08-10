const { query } = require('express')
const poolConnection=require('../config/mysql.js')

function createUser(data,callback) {
    poolConnection.query(`insert into users(id,firstName,lastName,age,email,password) values(?,?,?,?,?,?)`,
        [
            data.id,
            data.firstName,
            data.lastName,
            data.age,
            data.email,
            data.password
        ],
        (error,result)=>{
            if (error) {
                callback(error,null)
            }
            else callback(null,result)
        }
    )
}

function getAllUsers(callback) {
    poolConnection.query(`select firstName,lastName,age,email from users `,[],
        (error,result)=>{
            if (error) {
                callback(error,null)
            }
            else callback(null,result)
        }
    )
}

function getUserById(id,callback) {
    poolConnection.query(`select firstName,lastName,age,email from users where id=? `,[id],
        (error,result)=>{
            if (error) {
                callback(error,null)
            }
            else callback(null,result)
        }
    )
}

function deleteUserById(id,callback) {
    poolConnection.query(`delete from users where id=? `,[id],
        (error,result)=>{
            if (error) {
                callback(error,null)
            }
            else callback(null,result)
        }
    )
}

function updateUserById(data,id,callback) {
    const feildName=Object.keys(data).map((key)=>`${key}=?`).join(', ')
    poolConnection.query(`update users set ${feildName} where id=? `,[...Object.values(data),id],
        (error,result)=>{
            if (error) {
                callback(error,null)
            }
            else callback(null,result)
        }
    )
}
module.exports={
    createUser,getAllUsers,getUserById,deleteUserById,updateUserById
}