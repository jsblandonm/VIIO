import React from "react";
import "../styles/NewsLetter.css";

const NewsLetter = () => {
  return (
    <div className="newsletter">
      <h1>Recibe ofertas exclusivas en tu correo electrónico</h1>
      <p>Suscríbete a nuestro newsletter y mantente actualizado</p>
      <div>
        <input type="email" placeholder="Perez@example.com" />
        <button>suscríbete</button>
      </div>
    </div>
  );
};

export default NewsLetter;
