import React from "react";
import Header from "../../Molecules/Header/Header";
import Footer from "../../Molecules/Footer/Footer";
import './MetodosPagos.css'; 

function MetodosPagos () {
    return (
        <>
        <Header />
        <h1 className="metodos-pago">Bienvenido, descubre los métodos de pago más cómodos</h1>
        <h2 className="metodos-pago-anuncio">El método de pagos con tarjeta está en desarrollo</h2>

        <div className="metodo-transferencia">
            <h1 className="titulo-metodo">Transferencia</h1>
            <p className="num-transferencia">1234 5678 1234 5678</p>
            <h2 className="name-transferencia">Brenda Toledo</h2>
            <h2 className="bank-transferencia">SPEI</h2>
        </div>
        <div className="metodo-deposito">
            <h1 className="titulo-metodo">Depósito</h1>
            <p className="num-deposito">1234 5678 9871 2345</p>
            <h2 className="name-deposito">Brenda Toledo</h2>
            <h2 className="bank-deposito">BBVA Bancomer</h2>
        </div>
        <Footer />
        </>
    );
}

export default MetodosPagos;
