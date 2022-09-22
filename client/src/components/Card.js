import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";
import DetailMaterials from './DetailMaterials';

const Card = ({_id, category,depth,description,height, length, materials, name, quantity}) => {
    const navigation = useNavigate();
    const [showDetail, setShowDetail] = useState(false)
    const seeDetails = ()=> {
        setShowDetail(!showDetail)
    }

    return (
        <article>
            <div className='card-header'>
                <h2>{name}</h2>
            </div>
            <div className='card-body'>
                <p>{description}</p>
                <i>Caractéristiques techniques :</i>
                <ul>
                    <li>longueur : {length}</li>
                    <li>hauteur : {height}</li>
                    {depth ? <li>profondeur : {depth}</li> : ''}
                </ul>
            </div>
            <div className='card-footer'>
                <div>
                    <p>Type de meuble : <span className='badge black'>{category}</span></p>
                    <p>Quantité: <span className='badge orange'>{quantity}</span></p>
                </div>
                {showDetail ? 
                <div>
                 <aside className='infoMateriel'>
                    <h3>Matériaux utilisés : </h3>
                    <p>{materials}</p>
                </aside>
                <button className='btnBlack' onClick={seeDetails}>
                Masquer les matériaux de fabrication
                </button>
            </div>
                : 
                <button className='btnOrange small' onClick={seeDetails}>
                    Voir les matériaux de fabrication
                </button>
              }
            </div>      
        </article>
    );
};

export default Card;

