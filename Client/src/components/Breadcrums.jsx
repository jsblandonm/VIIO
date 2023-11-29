import React from "react";
import "../styles/Breadcrums.css";
import arrow_icon from "../assets/breadcrum_arrow.png";

const Breadcrums = (props) => {
  const { product } = props;
  return (
    <div className="breadcrums">
      Home <img src={arrow_icon} alt="" /> Novedades y destacados{" "}
      <img src={arrow_icon} alt="" /> {product.category}{" "}
      <img src={arrow_icon} alt="" /> {product.name}
    </div>
  );
};

export default Breadcrums;
