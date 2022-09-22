import Express  from 'express';
import {auth} from '../middleware/auth.js';
const router = Express.Router();

import {getAllMeubles, getOneMeuble,updateMeuble,createMeuble,deleteMeuble, getAllMaterials,getAllCategoryMaterials, getAllVendors} from '../controllers/Meubles.controller.js';

router.route('/').get(getAllMeubles)
router.route('/', auth).post(createMeuble)
router.route('/fournisseurs').get(getAllVendors)
router.get('/category-material', getAllCategoryMaterials);
router.route('/getMaterials').get(getAllMaterials);
router.route('/:id', auth).get(getOneMeuble).patch(updateMeuble).delete(deleteMeuble)

export default router;