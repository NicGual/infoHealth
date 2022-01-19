const {Schema, model} = require('mongoose');
const bcrypt = require ('bcrypt')

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,     
    },
    email: {
        type: String,
        required: true,
        trim: true,   
    },
    password: {
        type: String,
        required: true,
        trim: true,   
    },
    usertype: {
        type: String,
        required: true,
        trim: true,   
    }
},{timestamps: true});

userSchema.methods.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)
    return hash
}

userSchema.methods.matchPassword = async (logPassword,password) => {
    comparison = await bcrypt.compare(logPassword,password);
    return comparison;

}

module.exports = model('User',userSchema);

