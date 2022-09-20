import MateriauxModel from '../Models/materiaux.model.js';
import FournisseurModel from '../Models/fournisseur.model.js';


export const addVendor = async(req,res) => {
    try{
        const vendor = await FournisseurModel.create(req.body);
        res.status(200).json({vendor});
    }catch(err){
        res.status(400).send(err.message)
    }
}

export const deleteVendor = async(req,res) => {
    console.log(req.params)
    try{
        const vendorId = req.params.id
        console.log(vendorId);
        const vendor = await FournisseurModel.findByIdAndRemove({
            _id:vendorId
        });
        res.status(200).send();
    }catch(err){
        res.status(400).send(err.message)
    }
}

export const addMaterial = async(req,res) => {
    console.log(req.body)
    try{
        const material = await MateriauxModel.create(req.body);
        res.status(200).json({material});
    }catch(err){
        res.status(400).send(err.message)
    }
}

export const deleteMaterial = async(req,res) => {
    console.log(req.params)
    try{
        const materialId = req.params.id
        const material = await MateriauxModel.findByIdAndRemove({
            _id:materialId
        });
        res.status(200).send();
    }catch(err){
        res.status(400).send(err.message)
    }
}