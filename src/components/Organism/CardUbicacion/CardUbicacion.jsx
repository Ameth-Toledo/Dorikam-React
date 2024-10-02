import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faMapMarkerAlt, faClock } from "@fortawesome/free-solid-svg-icons"; 
import './CardUbicacion.css';

function CardUbicacion ({src, direccion, ubicacion}) {
    return (
        <>
            <div className="entregas-container">
                <iframe
                    src={src}
                    width="100%"
                    height="450"
                    style={{ border: 0 }} 
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="mapa-ubicacion"
                ></iframe>

                <div className="info-container">
                    <h1 className="direccion">{direccion}</h1>
                    <h2 className="telefono">
                        <FontAwesomeIcon icon={faPhone} className="info-icon" /> 
                        Teléfono: <span>9611449944</span>
                    </h2>
                    <h2 className="ubicacion">
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="info-icon" />
                        Ubicación: <span>{ubicacion}</span>
                    </h2>
                    <h2 className="horario">
                        <FontAwesomeIcon icon={faClock} className="info-icon" />
                        Horarios:
                        <br /> Entregas de Lunes a Viernes a las 7:00 PM 
                        <br /> Sábados y Domingos de 9:00 AM a 6:00 PM 
                    </h2>
                </div>
            </div>
        </>
    );
}

export default CardUbicacion;
