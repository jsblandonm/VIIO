import React, { createContext, useState } from "react";
import PropTypes from "prop-types";
import all_product from "../assets/all_product.js";

export const ShopContext = createContext(null);

// Función auxiliar para inicializar un carrito vacío
const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  // Estado para almacenar los elementos del carrito
  const [cartItems, setCartItems] = useState(getDefaultCart());

  // Función para agregar un elemento al carrito
  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] + 1,
    }));
  };

  // Función para remover un elemento del carrito
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: prev[itemId] - 1,
    }));
  };

  // Función para obtener el monto total del carrito
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_product.find(
          (product) => product.id === Number(item)
        );
        totalAmount += itemInfo.new_price * cartItems[item];
      }
    }
    return totalAmount;
  };

  // Función para obtener el total de elementos en el carrito
  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  };

  // Valor del contexto que se proporcionará a los componentes descendientes
  const contextValue = {
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getTotalCartItems,
  };

  // Proporcionar el contexto y renderizar los componentes hijos
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
// Especificar los PropTypes para las props del componente
ShopContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ShopContextProvider;
