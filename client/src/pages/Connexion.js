import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const Connexion = (props) => {

    const [userAuthorize, setUserAuthorize] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigate()

    const handelForm = async(e)=> {
        e.preventDefault();
        console.log('ok ok ')
        if(email !=='' && password !== ''){
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
                body: JSON.stringify({email:email, password:password})
              });
              const content = await response.json();
              props.setUser(content.user)
              navigation('/meubles');

        }catch(err){
            console.log(err)
        }
    }
    
    return (
        <main className="container connexionBloc">
            <section className='formBloc'>
                <div className='title'>
                    <h2>Connectez-vous à votre espace administrateur</h2>
                </div>
                <div className='flex'>
                    <form className='flex form' onSubmit={(e)=>handelForm(e)}>
                        <label>Adresse mail de connexion:</label>
                        <input 
                            type="text" 
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required />
                        <label>Password de connexion:</label>
                        <input 
                            type="password" 
                            name="password"
                            value={password}
                            required
                            onChange={(e) => setPassword(e.target.value)}
                            />
                        <button className='btnOrange' type="submit">Se connecter</button>
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

export default Connexion;