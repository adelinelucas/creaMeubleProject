import mongoose from "mongoose";


const MateriauxSchema = new mongoose.Schema({
    name: {
        type:String,
        required:[true, 'Merci de renseigner le nom du matériaux'],
        unique:true,
    },
    CategorieMateriaux: {
        type: String,
        enum:['bois' , 'fer', 'plastique']
    },
    fournisseur: {
        type: mongoose.Types.ObjectId,
        ref: 'Fournisseur',
        required:[true, 'Merci de renseigner le fournisseur du matériaux'],
    }
})

const MateriauxModel = mongoose.model('Materiaux',MateriauxSchema)
export default MateriauxModel;