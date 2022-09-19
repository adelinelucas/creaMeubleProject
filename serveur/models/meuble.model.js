import mongoose from "mongoose";


const MeubleSchema = new mongoose.Schema({
    name: {
        type:String,
        required:[true, 'Merci de renseigner le nom du meuble'],
        unique:true,
        minlength: 2,
        maxlength:20
    },
    materials: {
        type: [mongoose.Types.ObjectId],
        ref:'Materiaux',
        required: true,  
    },
    quantity: {
        type: Number,
        default: 1,
    },
    height: {
        type: Number,
        required:[true, 'Merci de renseigner une hauteur pour le meuble'],
    },
    length: {
        type: Number,
        required:[true, 'Merci de renseigner une largeur pour le meuble'],
    },
    depth: {
        type: Number,
    },
    description: {
        type:String,

    }
})

const MeubleModel = mongoose.model('Meuble',MeubleSchema)
export default MeubleModel;