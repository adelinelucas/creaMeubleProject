import { Error } from 'mongoose';
import MeubleModel from '../models/meuble.model.js';
import MateriauxModel from '../models/materiaux.model.js';
import FournisseurModel from '../models/fournisseur.model.js'



export const getAllMeubles = async(req, res) => {
    try{
        const meubles = await MeubleModel.find({}).sort('-createdAt');
        res.status(200).json({meubles, count:meubles.length});
    }catch(err){
        res.status(400).send(err.message)
    }
}

export const getOneMeuble = async(req, res) => {
    try{
        const meubleId = req.params.id;
        const meuble = await MeubleModel.findOne({
            _id: meubleId
        });
        if(meuble) res.status(200).json({meuble});
        else res.status(400).send('Aucune donnée ne corespond au meuble recherché')
    }catch(err){
        res.status(400).send(err.message)
    }
}

export const createMeuble = async(req, res) => {
    console.log(req.body);
    try{
        const meuble = await MeubleModel.create(req.body);
        res.status(200).json({meuble});
    }catch(err){
        res.status(400).send(err.message)
    }
    
}

export const updateMeuble = async(req, res) => {
    console.log(req.params);
    console.log(req.body)
    try{
        const meubleId = req.params.id;
        const {name, materials, quantity, height, length, depth, category, description} = req.body;
        const checkdata = [name, materials, quantity, height, length, category, description];

        checkdata.forEach(data => {
            console.log(data)
            if(!data) return res.status(404).send("Merci de compléter l'ensemble des champs pour mettre à jour les données !");
        });

        const meuble = await MeubleModel.findByIdAndUpdate(
            {_id:meubleId}, 
            req.body, 
            {new:true, runValidators:true}
        );
        res.status(200).json({meuble});
    }catch(err){
        res.status(400).send(err.message)
    }
}

export const deleteMeuble = async(req, res) => {
    console.log(req.params)
    try{
        const meubleId = req.params.id
        const meuble = await MeubleModel.findByIdAndRemove({
            _id:meubleId
        });
        res.status(200).send();
    }catch(err){
        res.status(400).send(err.message)
    }
}

export const getAllMaterials = async(req,res)=>{
    try{
        const materials = await MateriauxModel.find({});
        res.status(200).json({materials});
    }catch(err){
        console.log(err)
        res.status(400).send(err.message)
    }
}

export const getAllVendors = async(req,res)=>{
    try{
        const fournisseurs = await FournisseurModel.find({});
        res.status(200).json({fournisseurs});
    }catch(err){
        console.log(err)
        res.status(400).send(err.message)
    }
}