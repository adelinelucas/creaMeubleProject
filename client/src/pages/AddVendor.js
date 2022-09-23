import React, {useState} from 'react';

const AddVendor = () => {
    const [name, setName] = useState('');
    const [numeroSiret, setNumeroSiret] = useState('');
    const [message, setMessage] = useState('');
    const handelForm = async(e)=> {
        e.preventDefault();
        await fetchaddVendor();        
    }

    const fetchaddVendor = async()=> {
        try{
            const response = await fetch('http://localhost:5000/admin/vendor', {
                method: 'POST',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({name, numeroSiret})
              });
            console.log(response)
            if(response.status >= 400){
                setMessage('Le fournisseur n\'a pas pu être ajouté à la base de donnée.') 
              }else{
                  setMessage('Le fournisseur à bien été ajouté à la base de donnée') 
              }
            const responseResult = await response.json();
            return responseResult; 
            //   props.setUser(content.user)
            //   navigation('/meubles');

        }catch(err){
            console.log(err)
        }
    }

    return (
        <main className="container addMaterialsBloc">
            <section className='formBloc'>
                <div className='title'>
                    <h2>Ajouter un fournisseur</h2>
                </div>
                <div className='flex'>
                    <form className='flex form' onSubmit={(e)=>handelForm(e)}>
                        <label>Nom du fournisseur :</label>
                        <input 
                            type="text" 
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required />
                        <label>Numéro de Siret:</label>
                        <input 
                            type="text" 
                            name="numeroSiret"
                            value={numeroSiret}
                            onChange={(e) => setNumeroSiret(e.target.value)}
                            required />
                        <button className='btnOrange' type="submit">Ajouter le fournisseur</button>
                    </form>
                </div>
                <div>
                    {message!== '' && <p>{message}</p>}
                </div>
            </section>
        </main>
    );
};

export default AddVendor;