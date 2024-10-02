import React from "react";
import Header from "../../Molecules/Header/Header";
import Footer from "../../Molecules/Footer/Footer";
import CardProductos from "../../Atoms/CardProductos/CardProductos";
import arete1 from '../../../assets/aretes/arete-lagartijas.webp'
import arete2 from '../../../assets/aretes/arete-redondos.webp'
import arete3 from '../../../assets/aretes/arete-calabera.webp'
import arete4 from '../../../assets/aretes/arete-flor.webp'
import arete5 from '../../../assets/aretes/arete-cristal.webp'
import arete6 from '../../../assets/aretes/arete-elegante.webp'
import './Catalogos.css'

function Catalogos () {
    return (
        <>
        <Header/>
        <div className="productos-container-catalogos">
        <CardProductos 
            imgSrc={arete1}   
            Nombre='Arete Lagartija'
            Descripcion="Aretes diseño de flor color dorado, casual para fiestas de noche o eventos elegantes"
            Precio="120.00"/>
        <CardProductos
            imgSrc={arete2}
            Nombre="Arete Corsales Redondo"
            Descripcion="Aretes diseño cortinas de agua, color celeste, ideales para fiestas elegantes para combinar"
            Precio="150.00"/>
        <CardProductos
            imgSrc={arete3}
            Nombre="Aretes de calavera"
            Descripcion="Aretes de diseño cristal artificial, color turqueza, ideales para fiestas de dia casuales"
            Precio="120.00"/>
        <CardProductos 
            imgSrc={arete4}   
            Nombre='Arete Flor'
            Descripcion="Aretes diseño de flor color dorado, casual para fiestas de noche o eventos elegantes"
            Precio="120.00"/>
        <CardProductos
            imgSrc={arete5}
            Nombre="Arete Cristal Turqueza"
            Descripcion="Aretes diseño cortinas de agua, color celeste, ideales para fiestas elegantes para combinar"
            Precio="150.00"/>
        <CardProductos
            imgSrc={arete6}
            Nombre="Arete Cortinas de Agua"
            Descripcion="Aretes de diseño cristal artificial, color turqueza, ideales para fiestas de dia casuales"
            Precio="120.00"/>
        </div>        
        <Footer/>
        </>
    )
}

export default Catalogos;