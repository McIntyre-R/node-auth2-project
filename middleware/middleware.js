
const jwt = require('jsonwebtoken')
const { jwtSecret } = require('../api/sercrets')


function  generateToken(user){
    // the data
    const payload = {
        userId: user.id,
        username: user.user_name,
        department: user.department
    }
    const secret = process.env.JWT_SECRET || jwtSecret;
    const options = {
        expiresIn: '1d'
    }
    console.log(payload)
    return jwt.sign(payload, secret, options)

}




function  authenticator(req,res,next){
    const token =  req.headers.authorization
    if(token) {
    jwt.verify(token, process.env.JWT_SECRET, (error, decodedToken) => {
    if(error) {
        res.status(401).json({message: "owo notices error"})
    } else {
        console.log(decodedToken)
        req.decodedToken = decodedToken
        next();
    }
    })
} else {
    res.status(401).json({message: "sign in dude"})
}
};


module.exports = { generateToken, authenticator}