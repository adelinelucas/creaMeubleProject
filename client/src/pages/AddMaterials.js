import React, { useEffect, useState } from 'react';

const AddMaterials = () => {
    const [name, setName] = useState('');
    const [materialCategory, setMaterialCategory] = useState('');
    const [allMaterials, setAllMaterials] = useState([])
    const [vendors, setVendors] = useState([]);
    const [loading, setLoading] = useState(true);
    const [vendorID, setVendorID] = useState('')


    const handelForm = async(e)=> {
        e.preventDefault();
        await fetchAddMaterials();
    }

    const fetchGetAllVendor = async()=> {
        setLoading(true)
        try{
            fetch('http://localhost:5000/meubles/fournisseurs')
                .then(data => data.json())
                // .then(result =>console.log(result.fournisseurs))
                .then(result => setVendors(result.fournisseurs))
                .catch((err) => console.log(err))    
        }catch(err){
            setLoading(false)
            console.log(err)
        }
    }

    const fetchGetAllMaterials = async()=> {
        setLoading(true)
        try{
            fetch('http://localhost:5000/meubles/category-material/')
                .then(data => data.json())
                // .then(result =>console.log(result))
                .then(result => setAllMaterials(result.materials))
                .catch((err) => console.log(err))    
        }catch(err){
            setLoading(false)
            console.log(err)
        }
    }

    useEffect( ()=>{
        fetchGetAllVendor() 
        fetchGetAllMaterials()
    },[])

    const fetchAddMaterials = async()=> {
        console.log(vendors)
        try{
            const response = await fetch('http://localhost:5000/admin/material', {
                method: 'POST',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({name,materialCategory,vendor:vendorID })
              });
            //   const content = await response.json();
            //   props.setUser(content.user)
            //   navigation('/meubles');


        }catch(err){
            console.log(err)
        }
    }

    const handelChange = (e) => {
        setVendorID(e.target.value);
    }

    const handelMaterialCatagory = (e)=> {
        setMaterialCategory(e.target.value);
    }

    return (
        <main className="container addMaterialsBloc">
            <section className='formBloc'>
                <div className='title'>
                    <h2>Ajouter un matériaux</h2>
                </div>
                <div className='flex'>
                    <form className='flex form' onSubmit={(e)=>handelForm(e)}>
                        <label>Nom du materiaux :</label>
                        <input 
                            type="text" 
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required />
                        <label>Category :</label>
                        <select
                            value={materialCategory}
                            onClick={(e)=> handelMaterialCatagory(e)}
                        >                            
                            {allMaterials.map((material, i) =>{
                                return <option key={i}>{material}</option>
                            })}
                        </select>
                        <label>Sélectionner le fournisseur :</label>
                        <select
                            value={vendorID}
                            onChange={(e)=> handelChange(e)}
                        >
                            {vendors.map(vendor =>{
                                return <option key={vendor._id}>{vendor._id}</option>
                            })}
                            
                        </select>
                        <button className='btnOrange' type="submit">Ajouter le fournisseur</button>
                    </form>
                </div>
            </section>
        </main>
    );
};

export default AddMaterials;