import Express  from 'express';
const router = Express.Router();

import {getAllMeubles, getOneMeuble,updateMeuble,createMeuble,deleteMeuble} from '../controllers/Meubles.controller.js';

router.route('/').get(getAllMeubles).post(createMeuble)
router.route('/:id').get(getOneMeuble).patch(updateMeuble).delete(deleteMeuble)

export default router;