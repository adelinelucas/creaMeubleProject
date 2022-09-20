import User from "../models/user.model.js";
import jwt from'jsonwebtoken';

export const auth = async(req, res, next) => {
    
    const token = req.session.token
    try{
        if(!token){
            const redirectUser = "Vous n'êtez pas connecté pour accéder à cette page !"
            return res.render('/', {redirectUser})
        }

        const tokenAuth = jwt.verify(req.session.token, process.env.JWT_SECRET)
        console.log(tokenAuth);

        const userToken = tokenAuth.user

        next()

    }catch (err) {
        console.log('catch')
        res.status(400).json({
          error: `Invalid token (${err.message})`,
        });
    }
}