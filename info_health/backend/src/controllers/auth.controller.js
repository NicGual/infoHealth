const crypto = require('crypto');
const User = require('../models/User')
const login = async (req, res) => {
        const {email, password} = req.body 
        const user = await User.findOne({email: email});
        console.log(user);
        if(!user) {
            res.json({user: 'Not Found'});
        }  
        else { 
            console.log(user.password)
            const match = await user.matchPassword(password,user.password);
            console.log(match);
            if(match) {
                res.json({user:user,status:'Correct Password'})
            }
            else {
                res.json({status: 'Incorrect Password'})
            }
        }
    
};
const singup = async(req, res) => {
    const {name, email, password, confirmpassword, usertype} = req.body
    const validation = await User.findOne({email: email})
    if (password.length <4 ) {
        console.log('password must have at least 4 characters ')
        
    }
    if (password != confirmpassword) {
        console.log('password does not match ')

    }
    if (password == '') {
        console.log('Please Write a Password')

    }
    if (['patient','doctor', 'laboratorist'].includes(usertype)) {
        console.log('valid user ')

    }
    if (!validation) { 

        const newUser =  new User ({name, 
            email, 
            password, 
            usertype})
        newUser.password = await newUser.encryptPassword(password)
        await newUser.save();
        res.json({name, email, password, usertype})

    }
    else {
        
        res.json({response:'Email allready in use'})

    }
};

const singupGet = (req, res) => {
    res.json({usuario: 'creado'})
}
module.exports = {singup,login, singupGet}