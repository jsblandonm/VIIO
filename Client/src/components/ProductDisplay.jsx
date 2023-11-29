import React, { useContext } from "react";
import star_icon from "../assets/star_icon.png";
import star_dull_icon from "../assets/star_dull_icon.png";
import { ShopContext } from "../context/ShopContext";

import "../styles/ProductDisplay.css";

// Define el componente ProductDisplay que muestra detalles del producto
const ProductDisplay = (props) => {
  // Obtiene el objeto de producto del prop
  const { product } = props;
  // Obtiene la función addToCart del contexto ShopContext
  const { addToCart } = useContext(ShopContext);

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-prices-old">
            ${product.old_price}
          </div>

          <div className="productdisplay-right-prices-new">
            ${product.new_price}
          </div>
        </div>
        <div className="productdisplay-right-description">
          {" "}
          Con una combinación de dos de nuestros looks más icónicos, esta
          sudadera con capucha y cremallera completa está inspirada en nuestra
          atemporal chaqueta Windrunner y en la chaqueta Tech Fleece. Diseño
          holgado en los hombros, el pecho y el cuerpo para ofrecer un ajuste
          deportivo que puedes combinar con otras prendas. Nuestro tejido Fleece
          premium tiene un tacto agradable en ambos lados y ofrece más suavidad
          y calidez que nunca, además de una confección ligera.
        </div>
        <div className="productdisplay-right-size">
          <h1>Selecionar Talla</h1>
          <div className="productdisplay-right-sizes">
            <div>XS</div>
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button
          onClick={() => {
            addToCart(product.id);
          }}
        >
          Añadir al carrito
        </button>
        <p className="productdisplay-right-category">
          {" "}
          <span>Categoria: </span> Mujer, Camiseta, Top Corto
        </p>
        <p className="productdisplay-right-category">
          {" "}
          <span>Etiquetas : </span> Moderno, Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
