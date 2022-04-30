const fs = require('fs');
const path = require('path');
const User = require('../models/User');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const pathToKey = path.join(__dirname, '..','..', 'id_rsa_pub.pem');
const PUB_KEY = fs.readFileSync(pathToKey, 'utf8');

//TODO
const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey:PUB_KEY,
    algorithms: ['RS256']
};
const strategy = new JwtStrategy(options,(payload, done) =>{
    User.findOne({_id: payload.sub})
        .then((user) => {
            done(null,user)
        })
        .catch(err => done(err,null))
})

//TODO
module.exports = (passport) => {
    passport.use(strategy);
};