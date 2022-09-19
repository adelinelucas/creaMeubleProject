import mongoose from "mongoose";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const UserSchema = new mongoose.Schema({
    lastname: {
        type:String,
        required:[true, 'Merci de renseigner un nom'],
        minlength: 2,
        maxlength:20
    },
    firstname: {
        type:String,
        required:[true, 'Merci de renseigner un prénom'],
        minlength: 2,
        maxlength:20
    },
    email: {
        type:String,
        required:[true, 'Merci de renseigner un mail'],
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 
            'Merci de renseigner un mail valide'
        ],
        unique: true
    },
    password: {
        type:String,
        required:[true, 'Merci de renseigner un mot de passe'],
        minlength: 4,
    },
    role: {
        type:number,
        required:[true, 'Merci de renseigner un role'],
        default: 0
    },
})

UserSchema.pre('save', async function(){
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt)
})

const UserModel = mongoose.model('User', UserSchema)
export default UserModel;