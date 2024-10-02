import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import './Header.css'; 

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); 

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const enviarEntregas = (e) => {
    e.preventDefault(); 
    navigate('/Dorikam-React/entregas'); 
  };

  const enviarCatalogos = (e) => {
    e.preventDefault();
    navigate('/Dorikam-React/catalogos');
  }

  const enviarInicio = (e) => {
    e.preventDefault();
    navigate('/Dorikam-React/');
  }

  return (
    <header className="dorikam-header">
      <h1 className="dorikam-logo">Dorikam</h1>

      <nav className={`dorikam-nav ${isOpen ? 'open' : ''}`}>
        <ul className="dorikam-menu">
          <li className="dorikam-menu-li">
            <a href="/Dorikam-React/" className="dorikam-menu-li-a" onClick={enviarInicio}>Inicio</a>
          </li>
          <li className="dorikam-menu-li">
            <a href="/catalogos" className="dorikam-menu-li-a" onClick={enviarCatalogos}>Catálogos</a>
          </li>
          <li className="dorikam-menu-li">
            <a href="/entregas" className="dorikam-menu-li-a" onClick={enviarEntregas}>
              Entregas
            </a>
          </li>
        </ul>
      </nav>

      <button className="dorikam-hamburger" onClick={toggleMenu}>
        ☰
      </button>
    </header>
  );
};

export default Header;
