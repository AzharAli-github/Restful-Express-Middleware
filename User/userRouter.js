const {Router} = require('express')
const express = require('express')
const routes = express.Router()

const userController = require('./userController')

routes.get("/", (req, res)=>{
    try {
        userController.getUsers((err, results) => {
            if(err){
                return res.status(400).send(err)
            }
            return res.status(200).send({status: "OK", data: results})
        })
    } catch (err) {
        
        return res.status(500).send("Try after some time")
    }
})

routes.get('/:userid', (req, res) => {
    try {
        
        const userId = req.params.userid;
        userController.getUserById(userId, (err,result)=>{
            if(err){
                return res.status(400).send(err)
            }
            return res.status(200).send({status:"ok", data:result})
        })
    } catch (error) {
        
        return res.status(500), send('Unexpected Error Try after sometime')
    }
})


routes.put("/:userId",(req, res) => {
    try {
        const userId = req.params.userId
        const userName = req.body.userName
        userController.updateUserdetails(userId, userName, (err, result)=> {
            if(err){
                return res.status(400).send(err)
            }
            return res.status(200).send({status:"ok", data:result})
        })
    } catch (err) {
        return res.status(500), send('Unexpected Error Try after sometime')
    }
})

module.exports = routes