import {Routes, Route, Navigate,useNavigate,Redirect } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Liste from './pages/Liste';
import Connexion from './pages/Connexion';
import {useEffect, useState} from 'react';

function App() {
  const [user, setUser]= useState();
  useEffect(()=>{
    console.log(user);
  },[user]);



  return (
    <main className="app">
      <Header />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/connexion' element={<Connexion setUser={setUser}/>} />
        {user ? (
          <Route path='/meubles' element={<Liste/>} />
        ): 
          // <Route
          //   path="/redirect"
          //   element={ <Navigate to="/" /> }
          // />

          <Route
            path="*"
            element={<Navigate to="/connexion" replace />}
          />
        }
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
