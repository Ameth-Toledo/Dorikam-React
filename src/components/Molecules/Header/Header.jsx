import React, { useState } from "react";
import './Header.css'; 

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="dorikam-header">
      <h1 className="dorikam-logo">Dorikam</h1>

      <nav className={`dorikam-nav ${isOpen ? 'open' : ''}`}>
        <ul className="dorikam-menu">
          <li className="dorikam-menu-li">
            <a href="#inicio" className="dorikam-menu-li-a">Inicio</a>
          </li>
          <li className="dorikam-menu-li">
            <a href="#catalogos" className="dorikam-menu-li-a">Catálogos</a>
          </li>
          <li className="dorikam-menu-li">
            <a href="#entregas" className="dorikam-menu-li-a">Entregas</a>
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
