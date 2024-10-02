import React from "react";
import Header from "../../Molecules/Header/Header";
import Footer from "../../Molecules/Footer/Footer";
import './Entregas.css'; 
import CardUbicacion from "../../Organism/CardUbicacion/CardUbicacion";

function Entregas() {
    return (
        <>
            <Header />
            <div className="entregas-header">
                <h1 className="entregas">Bienvenido a ¡Dorikam!</h1>
                <p className="entregas-info">Encuentra tu lugar de entrega más cercano</p>
            </div>
            <CardUbicacion
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3518.668748257548!2d-93.11808284461807!3d16.75456411521639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ecd88c8c5266ef%3A0x90bbd6a4cd6cc9d6!2sParque%20Central%20de%20Tuxtla%20Guti%C3%A9rrez!5e0!3m2!1ses-419!2smx!4v1727824865994!5m2!1ses-419!2smx"
                direccion="Parque Central"
                ubicacion="Parque central, frente a la Catedral de San Marcos"/>
            <CardUbicacion
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3820.376368576588!2d-93.11611145908817!3d16.757940387621716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ecd88d93522dc9%3A0xfd75f503cd1e6950!2sFerretera%20Mandiola%205a%20Norte%20Oriente!5e0!3m2!1ses-419!2smx!4v1727823920970!5m2!1ses-419!2smx"
                direccion="Ferretera Mandiola oriente"
                ubicacion="Ferretera mandiola Oriente, entrada principal"/>
            <CardUbicacion
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2210.2698413112967!2d-93.11219394128213!3d16.78219902588037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ecd8ba7100117f%3A0x1f3696a3962f2169!2sEmiliano%20Zapata%20110%2C%2012%20de%20Noviembre%2C%2029019%20Tuxtla%20Guti%C3%A9rrez%2C%20Chis.!5e0!3m2!1ses-419!2smx!4v1727824801633!5m2!1ses-419!2smx"
                direccion="Colonia 12 de Noviembre"
                ubicacion="Emiliano Zapata 110, 12 de Noviembre, 29019 Tuxtla Gutiérrez, Chis."/>
            <Footer />
        </>
    );
}

export default Entregas;
