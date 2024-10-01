import React from 'react';
import Header from './components/Molecules/Header/Header';
import './App.css';
import Footer from './components/Molecules/Footer/Footer';

function App() {
  return (
    <>
      <Header /> 
      <img src="banner.avif" alt="banner" className='banner' />
      <div className='titulo-container'> {/* Contenedor para el título */}
        <h1 className='titulo'>Joyeria <br />y <br />Zapateria</h1>
      </div>
      <Footer />
    </>
  );
}

export default App;
