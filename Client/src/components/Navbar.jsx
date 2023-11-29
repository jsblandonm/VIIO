import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

import { ShopContext } from "../context/ShopContext";

import logo from "../assets/VIIO.png";
import cart from "../assets/cart_icon.png";

import "../styles/Navbar.css";

function Navbar() {
  const { isAuthenticated, logout, user } = useAuth();
  const [menu, setMenu] = useState("shop");

  const { getTotalCartItems } = useContext(ShopContext);

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <Link to={isAuthenticated ? "/" : ""}>
          <p> MAYNHOOT </p>
        </Link>
        <ul className="nav-menu">
          {isAuthenticated ? (
            <>
              <Link to={isAuthenticated ? "/" : "/"}>
                <li> Welcome {user.username}</li>
              </Link>

              <li
                onClick={() => {
                  setMenu("Mens");
                }}
              >
                <Link to="/mens" style={{ textDecoration: "none" }}>
                  Hombre
                </Link>{" "}
                {menu === "Mens" ? <hr /> : <></>}
              </li>
              <li
                onClick={() => {
                  setMenu("Womens");
                }}
              >
                <Link to="/womens" style={{ textDecoration: "none" }}>
                  Mujer
                </Link>{" "}
                {menu === "Womens" ? <hr /> : <></>}
              </li>

              <li
                onClick={() => {
                  setMenu("Kids");
                }}
              >
                <Link to="kids" style={{ textDecoration: "none" }}>
                  Niño/a
                </Link>{" "}
                {menu === "Kids" ? <hr /> : <></>}
              </li>

              <li>
                <Link to={"/buscar"}>Productos</Link>
              </li>
              <li>
                <Link to={"/panel"}>administrativo</Link>
              </li>

              <li>
                <Link
                  to="/"
                  onClick={() => {
                    logout();
                  }}
                >
                  Logout
                </Link>
              </li>

              <Link to="/cart">
                {" "}
                <img src={cart} alt="" />{" "}
              </Link>
              <div className="nav-cart-count">{getTotalCartItems()}</div>
            </>
          ) : (
            <>
              <li
                onClick={() => {
                  setMenu("shop");
                }}
              >
                <Link to="/" style={{ textDecoration: "none" }}>
                  Novedades y destacados
                </Link>{" "}
                {menu === "shop" ? <hr /> : <></>}
              </li>

              <li
                onClick={() => {
                  setMenu("Mens");
                }}
              >
                <Link to="/mens" style={{ textDecoration: "none" }}>
                  Hombre
                </Link>{" "}
                {menu === "Mens" ? <hr /> : <></>}
              </li>
              <li
                onClick={() => {
                  setMenu("Womens");
                }}
              >
                <Link to="/womens" style={{ textDecoration: "none" }}>
                  Mujer
                </Link>{" "}
                {menu === "Womens" ? <hr /> : <></>}
              </li>

              <div className="nav-login-card">
                <Link to="login">
                  <button>Log in</button>
                </Link>
                <Link to="/cart">
                  {" "}
                  <img src={cart} alt="" />{" "}
                </Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
              </div>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
