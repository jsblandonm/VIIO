// Importa las librerías y componentes necesarios
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { ShopContext } from "../context/ShopContext";
import "../styles/SearchProduct.css";

// Define el componente SearchProduct
const SearchProduct = () => {
  // Obtiene la función addToCart del contexto ShopContext
  const { addToCart } = useContext(ShopContext);

  // Define estados locales para los carritos y productos de la tabla
  const [carts, setCarts] = useState([]);
  const [tableProducts, setTableProducts] = useState([]);
  // Define un estado para el término de búsqueda
  const [busqueda, setBusqueda] = useState("");

  // Función para realizar una petición GET y obtener datos de productos
  const peticionGet = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/carts");
      // Establece los estados con los datos de la respuesta
      setCarts(response.data.carts);
      setTableProducts(response.data.carts);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Función para manejar cambios en el campo de búsqueda
  const handleChange = (e) => {
    // Obtiene el valor del campo de búsqueda
    const valorBusqueda = e.target.value;
    // Actualiza el estado de búsqueda
    setBusqueda(valorBusqueda);
    // Llama a la función filtrar con el término de búsqueda actualizado
    filtrar(valorBusqueda);
  };

  // Función para filtrar productos en base al término de búsqueda
  const filtrar = (terminoBusqueda) => {
    // Filtra los carritos que contienen productos cuyos títulos coinciden con el término de búsqueda
    const resultadosBusqueda = tableProducts.filter((cart) => {
      return cart.products.some((product) =>
        product.title.toLowerCase().includes(terminoBusqueda.toLowerCase())
      );
    });
    // Actualiza el estado de los carritos con los resultados de la búsqueda
    setCarts(resultadosBusqueda);
  };

  // Función para manejar la búsqueda al hacer clic en el botón de búsqueda
  const handleSearch = () => {
    // Llama a la función filtrar con el término de búsqueda actualizado
    filtrar(busqueda);
  };

  // Hook useEffect para realizar la petición de productos al montar el componente
  useEffect(() => {
    peticionGet();
  }, []);

  // Renderiza el JSX del componente
  return (
    <div className="Aplicacion">
      <div>
        {/* Input para el campo de búsqueda */}
        <input
          value={busqueda}
          placeholder="Búsqueda por título"
          onChange={handleChange}
        />
        {/* Botón de búsqueda */}
        <button onClick={handleSearch}>🔍</button>
      </div>

      <div>
        {/* Tabla para mostrar la información de los productos */}
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Título</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th>Total</th>
              <th>Porcentaje de descuento</th>
              <th>Precio descontado</th>
              <th>Imagen</th>
            </tr>
          </thead>

          <tbody>
            {carts &&
              carts.map((cart) =>
                cart.products
                  .filter((product) => product.id >= 36)
                  .map((product) => (
                    <tr key={product.id}>
                      {/* Celdas de la tabla con información del producto */}
                      <td>{product.id}</td>
                      <td>{product.title}</td>
                      <td>{product.price}</td>
                      <td>{product.quantity}</td>
                      <td>{product.total}</td>
                      <td>{product.discountPercentage}</td>
                      <td>{product.discountedPrice}</td>
                      <td>
                        <img
                          src={product.thumbnail}
                          alt={product.title}
                          style={{ width: "50px", height: "50px" }}
                        />
                      </td>
                      <td>
                        {/* Botón para agregar el producto al carrito */}
                        <button
                          onClick={() => {
                            addToCart(product.id);
                          }}
                        >
                          Agregar al carrito
                        </button>
                      </td>
                    </tr>
                  ))
              )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SearchProduct;
