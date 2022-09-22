import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const CreateMeuble = (props) => {

    const [userAuthorize, setUserAuthorize] = useState('');
    const [name, setName] = useState('');
    const [materials, setMaterials] = useState('');
    const [quantity, setQuantity] = useState('');
    const [height, setHeight] = useState('');
    const [length, setLength] = useState('');
    const [depth, setDepth] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');

    const navigation = useNavigate()

    const handelForm = async(e)=> {
        e.preventDefault();
        console.log('ok ok ')
        if(name !=='' && materials !== '' ){
            await fetchConnexion();
        }else{
            setUserAuthorize("L'email et le password doivent être complétés pour pouvoir s'authentifier.")
        }
    }

    const fetchConnexion = async()=> {
        try{
            const response = await fetch('http://localhost:5000/auth/login', {
                method: 'POST',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({name:name, materials:materials,quantiy:quantity, height:height, length:length, depth:depth, category:category, description:description})
              });
              const content = await response.json();
              props.setUser(content.user)
              navigation('/meubles');

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
                        <label>Nom du meuble:</label>
                        <input 
                            type="text" 
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required />
                        <label>Materiaux utilisés:</label>
                        <input 
                            type="text" 
                            name="materials"
                            value={materials}
                            required
                            onChange={(e) => setMaterials(e.target.value)}
                            />
                        <select>
                            <option value='étagère'>étagères</option>
                            <option value='armoire'>armoire</option>
                        </select>
                        <label>Nombre de meuble réalisé :</label>
                        <input 
                            type="text" 
                            name="quantity"
                            value={quantity}
                            required
                            onChange={(e) => setQuantity(e.target.value)}
                            />
                        <label>Hauteur du meuble :</label>
                        <input 
                            type="text" 
                            name="height"
                            value={height}
                            required
                            onChange={(e) => setHeight(e.target.value)}
                            />

                        <label>Longueur du meuble :</label>
                        <input 
                            type="text" 
                            name="length"
                            value={length}
                            required
                            onChange={(e) => setLength(e.target.value)}
                            />
                        <label>Profondeur du meuble :</label>
                        <input 
                            type="text" 
                            name="depth"
                            value={depth}
                            required
                            onChange={(e) => setDepth(e.target.value)}
                            />
                        <label>Categorie du meuble :</label>
                        <select>
                            <option value='étagère'>étagères</option>
                            <option value='armoire'>armoire</option>
                        </select>
                        <label>Description :</label>
                        <textarea name="description" cols="30" rows="10"></textarea>
                        <button className='btnOrange' type="submit">Ajouter le meuble</button>
                    </form>
                    {userAuthorize && 
                        <div>
                            <i>Important : {userAuthorize}</i>
                        </div>
                        }
                </div>
            </section>
        </main>
    );
};

export default CreateMeuble;