import React, {useState, useEffect} from 'react';

const Connexion = (props) => {

    const [userAuthorize, setUserAuthorize] = useState(false);
    const [dataAccess, setDataAcces] = useState([]);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handelForm = async(e)=> {
        e.preventDefault();
        console.log('ok ok ')
        if(email !='' && password != ''){
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
              console.log(content)
              console.log(props)
              props.setUser(content.user)

        }catch(err){
            console.log(err)
        }
    }
    
    return (
        <section className="container connexionBloc">
            <div className='title'>
                <h2>Connectez-vous à votre espace administrateur</h2>
            </div>
            <div className='flex'>
                <form className='flex' onSubmit={(e)=>handelForm(e)}>
                    <label>
                        Adresse mail de connexion:
                        <input 
                        type="text" 
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required />
                    </label>
                    <label>
                        Password de connexion:
                        <input 
                        type="password" 
                        name="password"
                        value={password}
                        required
                        onChange={(e) => setPassword(e.target.value)}
                         />
                    </label>
                    <button type="submit">Se connecter</button>
                </form>
                {userAuthorize && 
                    <div>
                        <i>Important : {userAuthorize}</i>
                    </div>
                    }
            </div>
        </section>
    );
};

export default Connexion;