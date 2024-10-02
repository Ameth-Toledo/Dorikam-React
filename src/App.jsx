import React from 'react';
import Header from './components/Molecules/Header/Header';
import Footer from './components/Molecules/Footer/Footer';
import Banner from './components/Atoms/Banner/Banner';
import banner from './assets/banner.avif'
import './App.css';
import CardProductos from './components/Atoms/CardProductos/CardProductos';
import arete1 from "./assets/aretes/arete-flor.webp"
import arete2 from "./assets/aretes/arete-elegante.webp"
import arete3 from "./assets/aretes/arete-cristal.webp"


function App() {
  return (
    <>
    <div className='banner-container'>
      <div className='header-class'>
      <Header/> 
      </div>
      <Banner 
        srcImagen={banner} 
        titulo="Joyeria y zapateria" 
        subtitulo="Tu mejor eleccion"
        className="banner-class"/>
    </div>
    <div className="productos-container">
      <CardProductos 
        imgSrc={arete1}   
        Nombre='Arete Flor'
        Descripcion="Aretes diseño de flor color dorado, casual para fiestas de noche o eventos elegantes"
        Precio="120.00"/>
      <CardProductos
        imgSrc={arete2}
        Nombre="Arete Cortinas de Agua"
        Descripcion="Aretes diseño cortinas de agua, color celeste, ideales para fiestas elegantes para combinar"
        Precio="150.00"/>
      <CardProductos
        imgSrc={arete3}
        Nombre="Aretes de cristal"
        Descripcion="Aretes de diseño cristal artificial, color turqueza, ideales para fiestas de dia casuales"
        Precio="120.00"/>
    </div>
    <Footer />
    </>
  );
}

export default App;
