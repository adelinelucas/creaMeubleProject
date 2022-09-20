import Express  from 'express';
import {auth} from '../middleware/auth.js';
const router = Express.Router();

import {getAllMeubles, getOneMeuble,updateMeuble,createMeuble,deleteMeuble} from '../controllers/Meubles.controller.js';

router.route('/').get(getAllMeubles)
router.route('/', auth).post(createMeuble)
router.route('/:id', auth).get(getOneMeuble).patch(updateMeuble).delete(deleteMeuble)

export default router;