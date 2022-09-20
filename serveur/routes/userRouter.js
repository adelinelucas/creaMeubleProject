import UserModel from '../Models/user.model.js';
import Express  from 'express';
const router = Express.Router();

import {register, login,logout} from '../controllers/User.controller.js';

router.route('/register').post(register)
router.route('/login').post(login)
router.route('/logout').get(logout)

export default router;