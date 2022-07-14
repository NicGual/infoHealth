const crypto = require('crypto');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const path = require('path');
const sidebarData = require('../utils/SidebarData');


const login = async (req, res) => {

        const {email, password} = req.body 
        const user = await User.findOne({email: email});
        const REFRESH_PRIV_KEY = process.env.REFRESH_TOKEN_SECRET;
        const ACCESS_PRIV_KEY = process.env.ACCESS_TOKEN_SECRET;
        console.log(user)
        if(!user) {
            res.json({user: 'Not Found'});// OJO
        }  
        else { 
            console.log(user.password)
            const match = await user.matchPassword(password,user.password);
            console.log(match);
            if(match) {
                // no es correcto poner [user.role] por que la funcion SidebarData esta hecha para un solo valor no array
                const userInfo = {"role": [user.role], "id": user._id, "name": user.name};                
                const refreshToken =jwt.sign({userInfo}, REFRESH_PRIV_KEY, {expiresIn: '30s'});
                const accessToken =  jwt.sign({ userInfo } , ACCESS_PRIV_KEY, { expiresIn: '10s' });
                bearerAccessToken = "Bearer " + accessToken;
                bearerRefreshToken = "Bearer " + refreshToken;
                user.refreshToken = bearerRefreshToken;
                const userSidebar = sidebarData(user.role)
                await user.save();
                res.cookie('jwt', bearerRefreshToken, { httpOnly: true,secure: true, sameSite: 'None', maxAge: 24 * 60 * 60 * 1000 });
                res.json({userInfo,bearerAccessToken,userSidebar,status:'Correct Password'})                   
            }
            else {
                res.json({status: 'Incorrect Password'})
            }
        }    
};
const singup = async(req, res) => {
    const {identification_type,identification,name,lastname,sec_lastname,date_of_birth,gender,blood_type,
        rh,marital_status,EPS,home_phone,mobile_phone,work_phone,address,city,department,email,
        password,confirm_password,contact_name,contact_lastname,contact_sec_lastname,contact_relationship,contact_phone
        } = req.body
        let {role} = req.body;
        console.log(req.body)
        console.log(password)
    
    const roles ={
        Paciente: '2001',
        Laboratorista: '2002',   
        Medico: '2003',
        Admin: '2004'
    }
    const validation = await User.findOne({email: email})
    if (password.length <4 ) {
        console.log('password must have at least 4 characters ')
        
    }
    if (password != confirm_password) {
        console.log('password does not match ')

    }
    if (password == '') {
        console.log('Please Write a Password')

    }
    
    if (roles[role]) {
        role = roles[role]
        console.log('valid user')
    }else{
        res.json({status: 'invalid user role'})
    }
    if (!validation) { 

        data={identification_type,identification,name,lastname,sec_lastname,date_of_birth,gender,blood_type,
            rh,marital_status,EPS,home_phone,mobile_phone,work_phone,address,city,department,role,email,
            password,contact_name,contact_lastname,contact_sec_lastname,contact_relationship,contact_phone};
        const newUser =  new User (data)
        newUser.password = await newUser.encryptPassword(password)
        await newUser.save();
        res.json({name, email, password, role, status: 'User Created'})

    }
    else {
        
        res.json({status:'Email allready in use'})

    }
};

const singupGet = (req, res) => {
    res.json({usuario: 'creado'})
}
module.exports = {singup,login, singupGet}