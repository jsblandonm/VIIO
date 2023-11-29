import React from "react";
import "../styles/DescriptionBox.css";

// Define el componente funcional DescriptionBox
const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Descripcion </div>
        <div className="descriptionbox-nav-box fade">Reseñas (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          ¡Bienvenido a nuestra plataforma de ventas online, el destino
          definitivo para tus compras más inteligentes y convenientes! Sumérgete
          en una experiencia de compra sin igual, donde la comodidad se
          encuentra con la diversidad de productos y la facilidad de uso.
          Descubre un extenso catálogo que abarca desde lo último en moda hasta
          los gadgets más innovadores, todo cuidadosamente seleccionado para
          satisfacer tus necesidades y deseos.
        </p>
        <p>
          Nuestra plataforma es tu ventana a un mundo de opciones, donde cada
          clic te acerca a la calidad, el estilo y la funcionalidad. Navegar por
          nuestra interfaz intuitiva es tan fácil como emocionante. Encuentra
          productos de tus marcas favoritas o descubre nuevas joyas por
          explorar, todo desde la comodidad de tu hogar. Con características de
          búsqueda avanzada, recomendaciones personalizadas y reseñas de
          productos, estamos aquí para hacer que cada compra sea una experiencia
          informada y placentera. La seguridad de tus transacciones es nuestra
          prioridad. Implementamos las últimas tecnologías de cifrado para
          garantizar que tus datos estén protegidos en todo momento.
        </p>
        <p>
          Además, ofrecemos diversas opciones de pago para adaptarnos a tus
          preferencias y facilitar un proceso de compra sin complicaciones.
          Únete a nuestra comunidad de compradores inteligentes y experimenta la
          verdadera evolución de las compras online. En nuestra plataforma, no
          solo estamos vendiendo productos, estamos construyendo conexiones y
          facilitando un estilo de vida moderno y conveniente. ¡Bienvenido al
          futuro de las compras online!
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
