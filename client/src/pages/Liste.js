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
        <main className='container listBloc'>
            <section>
                <h2>Nos meubles</h2>
                <div className='separator'></div>
            </section>
            <section>
                <Meubles meubles={meubleCard} />
            </section>
        </main>
    );
};

export default Liste;
