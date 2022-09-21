import React from 'react';

const Card = ({_id, category,depth,description,height, length, materials, name, quantity}) => {

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
                {/* <button >Voir les matériaux de fabrication</button> */}
            </div>      
        </article>
    );
};

export default Card;

