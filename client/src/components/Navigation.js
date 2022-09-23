import React from 'react';
import {NavLink} from "react-router-dom";

const Navigation = () => {
    return (
        <div className='navigation'>
            <div className='nav-leftPart'>
                <div className='nav-imgBloc'>
                    <img src="./images/logo2.png" alt="logo de l'entreprise Créa Meuble" />
                </div>
                <div className='nav-linksBloc'>
                    <NavLink to={'/home'} 
                    className={(nav)=> (nav.isActive ? "nav-active": "")}>
                        Accueil
                    </NavLink>
                    <NavLink to={"/meubles"}  className={(nav)=> (nav.isActive ? "nav-active": "")}>Voir nos meubles</NavLink>
                    <NavLink to={"/nouveau-meuble"}  className={(nav)=> (nav.isActive ? "nav-active": "")}>Créer un meuble</NavLink>
                    <NavLink to={"/nouveau-fournisseur"}  className={(nav)=> (nav.isActive ? "nav-active": "")}>Ajouter un fournisseur</NavLink>
                    <NavLink to={"/nouveau-materiaux"}  className={(nav)=> (nav.isActive ? "nav-active": "")}>Ajouter un materiaux</NavLink>
                </div>                
            </div>
            <div className='connexion'>
                <NavLink to={"/connexion"}  className={(nav)=> (nav.isActive ? "nav-active": "")}>Connexion</NavLink>
            </div>
        </div>
    );
};

export default Navigation;