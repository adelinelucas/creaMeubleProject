import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';

const CreateMeuble = (props) => {

    const [userAuthorize, setUserAuthorize] = useState('');
    const [name, setName] = useState('');
    const [materials, setMaterials] = useState('');
    const [quantity, setQuantity] = useState('');
    const [height, setHeight] = useState('');
    const [length, setLength] = useState('');
    const [depth, setDepth] = useState('');
    const [category, setCategory] = useState('étagère');
    const [description, setDescription] = useState('');
    const [allMaterials, setAllMaterials] = useState([])

    const navigation = useNavigate()

    const handelForm = async(e)=> {
        e.preventDefault();
        sendData();
        navigation('/meubles');
    }

    const handelMaterialCategory = (e) => {
        setMaterials(e.target.value)
    }

    const getAllMaterials = async() =>{
        try{
            fetch('http://localhost:5000/meubles/getMaterials/')
                .then(data => data.json())
                //.then(result =>console.log(result))
                .then(result => setAllMaterials(result.materials))
                .catch((err) => console.log(err))    
        }catch(err){
            console.log(err)
        }
    }

    useEffect( ()=>{
        getAllMaterials()
    },[])

    const sendData = async()=> {
        try{
            const response = await fetch('http://localhost:5000/meubles/', {
                method: 'POST',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name:name, 
                    materials:materials,
                    quantiy:quantity, 
                    height:height, 
                    length:length, 
                    depth:depth, 
                    category:category, 
                    description:description})
              });
        }catch(err){
            console.log(err)
        }
    }

    return (
        <main className="container newMeubleBloc">
            <section className='formBloc'>
                <div className='title'>
                    <h2>Ajouter un nouveau meuble</h2>
                </div>
                <div className='flex'>
                    <form className='flex form' onSubmit={(e)=>handelForm(e)}>
                        <label>Nom du meuble :</label>
                        <input 
                            type="text" 
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required />
                        <label>Materiaux utilisés :</label>
                        <select
                            value={materials}
                            onChange={(e)=> handelMaterialCategory(e)}
                        >                            
                            {allMaterials.map((material, i) =>{
                                return <option key={i}>{material}</option>
                            })}
                        </select>
                        <label>Catégorie de meuble :</label>
                        <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        >
                            <option value='étagère'>étagères</option>
                            <option value='armoire'>armoire</option>
                        </select>
                        <label>Nombre de meuble réalisé :</label>
                        <input 
                            type="number" 
                            name="quantity"
                            value={quantity}
                            required
                            min="1" max="100"
                            onChange={(e) => setQuantity(e.target.value)}
                            />
                        <label>Hauteur du meuble (en cm) :</label>
                        <input 
                            type="number" 
                            name="height"
                            value={height}
                            required
                            min="10" max="1000"
                            onChange={(e) => setHeight(e.target.value)}
                            />

                        <label>Longueur du meuble (en cm) :</label>
                        <input 
                            type="number" 
                            name="length"
                            value={length}
                            required
                            min="10" max="1000"
                            onChange={(e) => setLength(e.target.value)}
                            />
                        <label>Profondeur du meuble :</label>
                        <input 
                            type="text" 
                            name="depth"
                            value={depth}
                            required
                            min="5" max="100"
                            step='1'
                            onChange={(e) => setDepth(e.target.value)}
                            />
                        <label>Description :</label>
                        <textarea 
                        name="description" 
                        cols="30" 
                        rows="10"
                        value={description}
                        onChange={(e)=>setDescription(e.target.value)}
                        >
                        </textarea>
                        <button className='btnOrange' type="submit">Ajouter le meuble</button>
                    </form>
                </div>
            </section>
        </main>
    );
};

export default CreateMeuble;