import React, { useContext, useEffect, useState } from "react";
import "../styles/SearchProduct.css";
import Item from "./Item";
import axios from "axios";
import { ShopContext } from "../context/ShopContext";

const SearchProduct = () => {
  const { addToCart } = useContext(ShopContext);

  const [carts, setCarts] = useState([]);
  const [products, setProducts] = useState([]);
  const [tableProducts, setTableProducts] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  const peticionGet = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/carts");
      setCarts(response.data.carts);
      setTableProducts(response.data.carts);
      console.log(response.data.carts);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const valorBusqueda = e.target.value;

    setBusqueda(valorBusqueda);
    filtrar(valorBusqueda);
  };

  const filtrar = (terminoBusqueda) => {
    var resultadosBusqueda = tableProducts.filter((cart) => {
      return cart.products.some((product) =>
        product.title.toLowerCase().includes(terminoBusqueda.toLowerCase())
      );
    });
    setCarts(resultadosBusqueda);
  };

  useEffect(() => {
    peticionGet();
  }, []);

  return (
    <div className="Aplicacion">
      <div>
        <input
          value={busqueda}
          placeholder="Búsqueda por titulo"
          onChange={handleChange}
        />
        <button>🔍</button>
      </div>

      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Titulo</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th>Total</th>
              <th>Procentaje de descuento</th>
              <th>precio descontado </th>
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
                        {" "}
                        <button
                          onClick={() => {
                            addToCart(product.id);
                          }}
                        >
                          agregar al carrito{" "}
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
