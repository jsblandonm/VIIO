import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ShopContextProvider from "./context/ShopContext.jsx";

// Utilizando React Strict Mode para realizar comprobaciones adicionales en el desarrollo
// El componente ShopContextProvider envuelve toda la aplicación para proporcionar contexto de la tienda
// ReactDOM.createRoot es parte de la API Concurrent Mode para renderizar de manera eficiente
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ShopContextProvider>
      <App />
    </ShopContextProvider>
  </React.StrictMode>
);
