const jwt = require ('jsonwebtoken');
require('dotenv').config();

const verifyJWT = (req, res, next) => {
    const authHeader = req.headers.authorization || req.headers.Authorization;
    console.log(authHeader);
    console.log(typeof(authHeader))
    if (!authHeader?.startsWith("Bearer ")) return res.sendStatus(401) 
    const token = authHeader.split(' ')[1];
    console.log(token);
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET,
        (err, decoded) => {
            console.log(decoded);
            if (err) return res.sendStatus(403);
            req.user = decoded.userInfo.name;
            req.role = decoded.userInfo.role;
            next()
        })
}
module.exports = verifyJWT