import React from "react";
import "../styles/Footer.css";
import footer_logo from "../assets/viio_me_logo.jpeg";
import instagram_icon from "../assets/instagram_icon.png";
import pinterest_icon from "../assets/pintester_icon.png";
import whatsapp_icon from "../assets/whatsapp_icon.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>MAYNOOTH</p>
      </div>
      <ul className="footer-links">
        <li>Compañia</li>
        <li>Productos</li>
        <li>Oficinas</li>
        <li>Acerca de</li>
        <li>Contacto</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <img src={instagram_icon} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={pinterest_icon} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={whatsapp_icon} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyrigth @2023 - Todos los derechos reservados.</p>
      </div>
    </div>
  );
};

export default Footer;
