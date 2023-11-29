import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import Breadcrumbs from "../components/Breadcrums"; // Corregir el nombre de importación
import ProductDisplay from "../components/ProductDisplay";
import DescriptionBox from "../components/DescriptionBox";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  // Obtener la lista de todos los productos del contexto
  const { all_product } = useContext(ShopContext);

  // Obtener el parámetro de la URL para el ID del producto
  const { id } = useParams();

  // Encontrar el producto correspondiente según el ID en los parámetros de la URL
  const product = all_product.find((e) => e.id === Number(id));

  return (
    <div>
      {/* Componente de migas de pan con información del producto */}
      <Breadcrumbs product={product} />

      {/* Componente para mostrar detalles del producto */}
      <ProductDisplay product={product} />

      {/* Componente de cuadro de descripción del producto */}
      <DescriptionBox />

      {/* Componente de productos relacionados */}
      <RelatedProducts />
    </div>
  );
};

export default Product;
