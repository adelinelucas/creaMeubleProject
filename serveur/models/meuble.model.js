import mongoose from "mongoose";


const MeubleSchema = new mongoose.Schema({
    name: {
        type:String,
        required:[true, 'Merci de renseigner le nom du meuble'],
        unique:true,
        minlength: 2,
        maxlength:50
    },
    materials: {
        type: String,
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
    category: {
        type: String,
        enum:['armoire' , 'étagère'],
        required:true
    },
    description: {
        type:String,

    }
},
{timestamps: true})

const MeubleModel = mongoose.model('Meuble',MeubleSchema)
export default MeubleModel;