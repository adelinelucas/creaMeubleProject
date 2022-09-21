import React from 'react';
import {NavLink} from "react-router-dom";

const Home = () => {
    return (
        <main className='container homeBloc'>
            <section className='banniereBloc'>
                <img className="banniereImg" src="./images/banniere.jpg" alt="Bannière d'accueil site Créa Meuble"/>
                <div className='separator up'></div>
                <h1 className='homeTitle'>Créa Meuble, le design à l'état brut</h1>
                <div className='separator down'></div>
            </section>
            <section className='btnHome'>
                <NavLink to={"/meubles"} >Voir nos meubles</NavLink>
            </section>
        </main>
    );
};

export default Home;