import React, { useEffect } from "react";
import { useProduct } from "../context/ProductContext";

function ProductPage() {
  // Utilizar el contexto para obtener la función para obtener productos externos y la lista de productos
  const { getExternalProduct, products } = useProduct();

  // Utilizar useEffect para llamar a la función de obtener productos externos cuando el componente se monta
  useEffect(() => {
    getExternalProduct();
  }, [getExternalProduct]);

  return (
    <div>
      <h1>Product Page</h1>
      {/* Mapear sobre la lista de productos y renderizar un componente de tarjeta de producto para cada uno */}
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductPage;
