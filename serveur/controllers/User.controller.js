import UserModel from '../models/user.model.js';

export const register = async (req, res) => {
    console.log(req.body);

    try{
        const user = await UserModel.create({...req.body})
        res.status(200).json({user:{lastname: user.lastname}})
    }
    catch(err){
        res.status(400).json({message:err.message})
    }
}

export const login = async(req, res) => {
    const {email, password} = req.body;
    try{
        if(email && password ){
            const user = await UserModel.findOne({email});
            
            if(!user) throw err;

            const isPasswordCorrect = user.checkPassword(password)
            if(!isPasswordCorrect) throw err

            const token = user.addJWT();
            res.status(200).json({user:{lastname: user.lastname}, token})
        
        }else{
            throw err
        }
    }catch(err){
        res.status(401).json({message:'Les informations renseignées n\'ont pas permis de vous identifier!'}) 
    }
}

