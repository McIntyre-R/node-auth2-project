require('dotenv').config()
const express = require('express');
const cors = require("cors");
const userRouter = require('../users/user-router.js');
const authRouter = require('../auth/auth-router.js')
const { authenticator } = require('../middleware/middleware.js')

const server = express();


server.use(express.json());
server.use(cors());
server.use('/api/users', authenticator, userRouter);
server.use('/api/auth', authRouter);
module.exports = server;