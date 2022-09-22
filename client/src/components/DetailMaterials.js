import React from 'react';

const DetailMaterials = ({materials}) => {
    console.log(materials)
    return (
        <article className='infoMateriel'>
            <h3>Matériaux utilisés : </h3>
            <p>{materials}</p>
        </article>
    );
};

export default DetailMaterials;