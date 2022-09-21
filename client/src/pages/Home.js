import React from 'react';
import {NavLink} from "react-router-dom";

const Home = () => {
    return (
        <section className='container homeBloc'>
            <div className='banniereBloc'>
                <img className="banniereImg" src="./images/banniere.jpg" alt="Bannière d'accueil site Créa Meuble"/>
                <div className='separator up'></div>
                <h1 className='homeTitle'>Créa Meuble, le design à l'état brut</h1>
                <div className='separator down'></div>
            </div>
            <div className='btnHome'>
                <NavLink to={"/meubles"} >Voir nos meubles</NavLink>
            </div>
        </section>
    );
};

export default Home;