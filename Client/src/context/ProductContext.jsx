import React, { createContext, useContext, useState } from "react";
import { getExternalProductRequest } from "../api/products";

// Crear un contexto para los productos
const ProductContext = createContext();

// Hook personalizado para acceder al contexto de productos
export const useProduct = () => {
  const context = useContext(ProductContext);

  if (!context) {
    throw new Error("useProduct must be used within a ProductProvider");
  }
  return context;
};

// Proveedor de contexto para gestionar el estado y las funciones relacionadas con los productos
export function ProductProvider({ children }) {
  // Estado para almacenar la lista de productos
  const [products, setProducts] = useState([]);

  // Función para obtener productos externos mediante una solicitud a la API
  const getExternalProduct = async () => {
    try {
      // Utiliza la función importada getExternalProductRequest en lugar de fetch
      const data = await getExternalProductRequest();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching external product:", error);
    }
  };

  // Proporcionar el contexto de productos y renderizar los componentes hijos
  return (
    <ProductContext.Provider
      value={{
        products, // Lista de productos
        getExternalProduct, // Función para obtener productos externos
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
