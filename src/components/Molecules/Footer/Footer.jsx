import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="dorikam-footer">
      <div className="footer-content-footer">
        <div className="footer-branding-footer">
          <h1 className="footer-title-footer">Dorikam</h1>
          <p className="footer-description-footer">Tu socio en soluciones innovadoras</p>
        </div>

        <div className="footer-columns-footer">
          <div className="footer-column-footer">
            <h3 className="footer-column-title-footer">Empresa</h3>
            <ul className="footer-links-footer">
              <li><a className="footer-links-footer-a" href="#about">Sobre Nosotros</a></li>
              <li><a className="footer-links-footer-a" href="#careers">Carreras</a></li>
              <li><a className="footer-links-footer-a" href="#blog">Blog</a></li>
              <li><a className="footer-links-footer-a" href="#press">Prensa</a></li>
            </ul>
          </div>

          <div className="footer-column-footer">
            <h3 className="footer-column-title-footer">Soporte</h3>
            <ul className="footer-links-footer">
              <li><a className="footer-links-footer-a" href="#faq">Preguntas Frecuentes</a></li>
              <li><a className="footer-links-footer-a" href="#help">Centro de Ayuda</a></li>
              <li><a className="footer-links-footer-a" href="#contact">Contáctanos</a></li>
            </ul>
          </div>

          <div className="footer-column-footer">
            <h3 className="footer-column-title-footer">Síguenos</h3>
            <div className="social-icons-footer">
              <a className="social-icons-footer-a" href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a className="social-icons-footer-a" href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a className="social-icons-footer-a" href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a className="social-icons-footer-a" href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom-footer">
          <p className="parrafo-footer">&copy; 2024 Dorikam. Todos los derechos reservados.</p>
          <p className="parrafo-footer">Términos de Servicio | Política de Privacidad</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
