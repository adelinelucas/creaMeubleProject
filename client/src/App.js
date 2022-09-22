import {Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Liste from './pages/Liste';
import Connexion from './pages/Connexion';
import {useEffect, useState} from 'react';
import CreateMeuble from './pages/CreateMeuble';
import AddVendor from './pages/AddVendor';
import AddMaterials from './pages/AddMaterials';

function App() {
  const [user, setUser]= useState();
  useEffect(()=>{
    console.log(user);
  },[user]);



  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/connexion' element={<Connexion setUser={setUser}/>} />
        {user ? (
          <>
            <Route path='/meubles' element={<Liste/>} />
            <Route path='/nouveau-meuble' element={<CreateMeuble/>}/>
            <Route path='/nouveau-fournisseur' element={<AddVendor/>}/>
            <Route path='/nouveau-materiaux' element={<AddMaterials/>}/>
          </>
        ): 
          <Route
            path="*"
            element={<Navigate to="/connexion" replace />}
          />
        }
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
