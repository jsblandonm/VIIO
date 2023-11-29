import React from "react";
import "../styles//Offers.css";
import exclucive_image from "../assets/exclusive_image.png";

const Offers = () => {
  return (
    <div className="offers">
      <div className="offers-left">
        <h1>Exclusivo</h1>
        <h1>Ofertar para ti</h1>
        <p>SÓLO EN LOS PRODUCTOS MÁS VENDIDOS</p>
        <button>Revisalo ahora</button>
      </div>

      <div className="offers-right">
        <img src={exclucive_image} alt="" />
      </div>
    </div>
  );
};

export default Offers;
