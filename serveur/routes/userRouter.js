import UserModel from '../Models/user.model.js';
import Express  from 'express';
const router = Express.Router();

import {register, login} from '../controllers/User.controller.js';

router.route('/register').post(register)
router.route('/login').post(login)

export default router;