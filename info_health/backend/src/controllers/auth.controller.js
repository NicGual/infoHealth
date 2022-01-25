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
    const {identification_type,identification,name,lastname,sec_lastname,date_of_bird,gender,blood_type,
        rh,marital_status,EPS,home_phone,mobile_phone,work_phone,address,city,department,role,email,
        password,confirm_password,contact_name,contact_lastname,contact_sec_lastname,contact_relationship,contact_phone
        } = req.body
    /*const {name, email, password, confirmpassword, role} = req.body*/
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
    if (['Paciente','Empleado', 'Medico', 'Admin'].includes(role)) {
        console.log('valid user ')

    }
    if (!validation) { 

        data={identification_type,identification,name,lastname,sec_lastname,date_of_bird,gender,blood_type,
            rh,marital_status,EPS,home_phone,mobile_phone,work_phone,address,city,department,role,email,
            password,contact_name,contact_lastname,contact_sec_lastname,contact_relationship,contact_phone};
        const newUser =  new User (data)
        newUser.password = await newUser.encryptPassword(password)
        await newUser.save();
        res.json({name, email, password, role})

    }
    else {
        
        res.json({response:'Email allready in use'})

    }
};

const singupGet = (req, res) => {
    res.json({usuario: 'creado'})
}
module.exports = {singup,login, singupGet}