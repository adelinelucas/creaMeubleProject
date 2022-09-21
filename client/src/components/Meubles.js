import React from 'react';
import Card from './Card';

const Meubles = ({meubles}) => {
    console.log(meubles.meubles)
    const meubleslist = meubles.meubles
    return (
        <>
            <p>Nombre total de meubles : <span>{meubles.count}</span></p>
            <div className='meublesList'>
                {meubleslist.map(( meuble => {
                    return <Card key={meuble._id} {...meuble}/>
                }))
                }
            </div>
        </>     
    );
};

export default Meubles;