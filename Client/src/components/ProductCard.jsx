import React, { useState, useEffect } from "react";
import { useProduct } from "../context/ProductContext";

function ProductCard({ product }) {
  const { getExternalProduct } = useProduct();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    // Llama a la función para obtener productos externos cuando el componente se monta
    getExternalProduct();
  }, [getExternalProduct]);

  useEffect(() => {
    // Filtra los productos basándose en la consulta de búsqueda
    const filtered = product.filter((p) =>
      p.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchQuery, product]);

  const handleSearch = () => {
    // Puedes agregar más lógica de búsqueda aquí si es necesario
    // En este ejemplo, simplemente imprimimos la consulta y los productos filtrados en la consola
    console.log("Search Query:", searchQuery);
    console.log("Filtered Products:", filteredProducts);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a product"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {filteredProducts.length > 0 ? (
        <div>
          <h2>Filtered Products</h2>
          {filteredProducts.map((filteredProduct) => (
            <div key={filteredProduct.id}>
              <h3>{filteredProduct.title}</h3>
              <p>{filteredProduct.description}</p>
              <p>Price: {filteredProduct.price}</p>
              {/* Agrega más información del producto según tu estructura de datos */}
            </div>
          ))}
        </div>
      ) : (
        <p>No products found.</p>
      )}

      <h2>All Products</h2>
      {product.map((product) => (
        <div key={product.id}>
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <p>Price: {product.price}</p>
          {/* Agrega más información del producto según tu estructura de datos */}
        </div>
      ))}
    </div>
  );
}

export default ProductCard;
