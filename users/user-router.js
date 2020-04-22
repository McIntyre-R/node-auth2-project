const express = require('express');
const server = express.Router();
const users = require('./user-model.js')

server.get('/', (req,res) => {
    // console.log(req.decodedToken)
    const department = {department: req.decodedToken.department}
    users.findBy(department)
    .then( users => {
        res.status(200).json({users})
    })
})






module.exports = server


