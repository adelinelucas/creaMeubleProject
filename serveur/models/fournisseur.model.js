import mongoose from "mongoose";


const FournisseurSchema = new mongoose.Schema({
    name: {
        type:String,
        required:[true, 'Merci de renseigner le nom du fournisseur'],
        unique:true,
        minlength: 2,
        maxlength: 50,
    },
    numeroSiret: {
        type:String,
        required:[true, 'Merci de renseigner le numéro siret du fournisseur'],
        unique:true,
        minlength: 2,
        maxlength: 150,
    },

})

const FournisseurModel = mongoose.models['Fournisseur'] || mongoose.model('Fournisseur', FournisseurSchema)
export default FournisseurModel;