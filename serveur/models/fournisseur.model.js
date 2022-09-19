import mongoose from "mongoose";


const FournisseurSchema = new mongoose.Schema({
    name: {
        type:String,
        required:[true, 'Merci de renseigner le type du matériaux'],
        unique:true,
        minlength: 2,
        maxlength: 50,
    },
    NumeroSiret: {
        type:String,
        required:[true, 'Merci de renseigner le siret du fournisseur'],
        unique:true,
        minlength: 2,
        maxlength: 150,
    },

})

const FournisseurModel = mongoose.model('Fournisseur', FournisseurSchema)
export default FournisseurModel;