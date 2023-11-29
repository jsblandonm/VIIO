import React, { useEffect } from "react";
import { useProduct } from "../context/ProductContext";

function ProductPage() {
  const { getExternalProduct, products } = useProduct();
  useEffect(() => {
    getExternalProduct();
  }, [getExternalProduct]);
  return (
    <div>
      <h1>Product Page</h1>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductPage;
