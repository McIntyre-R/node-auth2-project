const express = require('express');
const server = express.Router();
const bcrypt = require('bcryptjs');
const users = require('../users/user-model.js')
const { generateToken } = require('../middleware/middleware.js')



server.post('/register', (req, res) => {
    let newUser = req.body

    const hash = bcrypt.hashSync( newUser.password, 12)
    newUser.password = hash
    users.registerUser(newUser)
    .then(user => {
        res.status(201).json({user})
    })
})

server.post('/login', (req, res) => {
    
    let {user_name, password} = req.body
    // console.log(req.body)
    users.findBy({ user_name })
    .then(found => {
        if(found && bcrypt.compareSync(password, found[0].password)) {
            const token = generateToken(found[0])
            res.status(201).json({ message: "Woah dude nice", token: token})
        } else {
            res.status(401).json({ message: "woah dude can't find that info"})
        }
    }) 
    .catch(err => { console.log(err)
        res.status(500).json({error: err})})
})






module.exports = server
