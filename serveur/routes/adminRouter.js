import Express  from 'express';
const router = Express.Router();
import {addVendor, deleteVendor, addMaterial, deleteMaterial} from '../controllers/admin.Controller.js';


// ajouter un fournisseur 
// ajouter le delete vendor
router.route('/vendor').post(addVendor)
router.route('/vendor/:id').delete(deleteVendor)
// ajouter un materiaux
// ajouter le delete materiaux
router.route('/material').post(addMaterial)
router.route('/material/:id').delete(deleteMaterial)
export default router;