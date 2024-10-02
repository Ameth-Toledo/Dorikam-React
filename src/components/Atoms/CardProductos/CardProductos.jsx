import React from "react";
import { useNavigate } from "react-router-dom"; 
import './CardProductos.css';

function CardProductos({ imgSrc, Nombre, Descripcion, Precio }) {
    const navigate = useNavigate(); 

    const enviarMetodosPagos = (e) => {  
        e.preventDefault();
        navigate('/Dorikam-React/metodos/de/pago');
    }

    return (
        <div className="card-productos">
            <div className="card-header">
                <h1 className="nombre">{Nombre}</h1>
            </div>
            <img src={imgSrc} alt="Producto" className="img-productos" />
            <div className="card-content">
                <p className="descripcion">{Descripcion}</p>
                <p className="precio">
                    <span className="signo">$</span>{Precio}
                </p>
            </div>
            <button className="btn-comprar" onClick={enviarMetodosPagos}>Comprar</button>
        </div>
    );
}

export default CardProductos;
