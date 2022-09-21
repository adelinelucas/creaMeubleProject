import React, {useState, useEffect} from 'react';
import Meubles from '../components/Meubles';
import Loading from'./Loading';

const Liste = () => {
    const [loading, setLoading] = useState(true);
    const [meubleCard, setMeubleCard] = useState([]);

    const fetchMeuble = async() => {
        setLoading(true);

        try{
            const response = await fetch('http://localhost:5000/meubles/'); 
            const meubles = await response.json()
            setLoading(false)
            setMeubleCard(meubles)
        }catch(err){
            setLoading(false)
            console.log(err)
        }
    }

    useEffect( ()=>{
        fetchMeuble()
    }, [])

    if(loading){
        return (
            <section>
                <Loading/>
            </section>
        )
    }
    return (
        <section className='container listBloc'>
            <div>
                <h2>Nos meubles</h2>
                <div className='separator'></div>
            </div>
            <>
                <Meubles meubles={meubleCard} />
            </>
        </section>
    );
};

export default Liste;
