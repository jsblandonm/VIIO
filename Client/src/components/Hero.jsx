import React from "react";
import "../styles/Hero.css";
import hand_icon from "../assets/hand_icon.png";
import arrow_icon from "../assets/arrow.png";
import hero_image from "../assets/hero_image.png";

// Define el componente funcional Hero
function Hero() {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>SOLO NUEVAS LLEGADAS</h2>
        <div>
          <div className="hero-hand-icon">
            <p>Nuevo</p>
            <img src={hand_icon} alt="" />
          </div>
          <p>Coleccion</p>
          <p>Para todas</p>
        </div>
        <div className="hero-latest-btn">
          <div>Ultima colección</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="" />
      </div>
    </div>
  );
}

export default Hero;
