import React from 'react';
import Card from './Card';

const Meubles = ({meubles}) => {
    console.log(meubles.meubles)
    const meubleslist = meubles.meubles
    return (
        <div className='meublesList'>
            <>
                {meubleslist.map(( meuble => {
                    return <Card key={meuble._id} {...meuble}/>
                }))
                }
            </>
            <p>Nombre total de meubles : <span>{meubles.count}</span></p>
        </div>
        
    );
};

export default Meubles;