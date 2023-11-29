import React, { useState } from "react";

import lupa from "../assets/search.svg";
import chevron from "../assets/chevron-right.svg";
import home from "../assets/home-alt.svg";
import bar_chart from "../assets/bar-chart-alt-2.svg";
import bell from "../assets/bell.svg";
import pie from "../assets/pie-chart-alt.svg";
import logout from "../assets/log-out.svg";
import moon from "../assets/moon.svg";
import sun from "../assets/sun.svg";

import logo from "../assets/VIIO.png";

import "../styles/Panel.css";

const Panel = () => {
  const [isSidebarClosed, setSidebarClosed] = useState(true);

  const toogleSidebar = () => {
    setSidebarClosed(!isSidebarClosed);
  };

  return (
    <div>
      <nav className="sidebar clsoe">
        <header>
          <div className="image-text">
            <span className="image">
              <img src={logo} alt="" />
            </span>

            <div className="text logo-text">
              <span className="name">VIIO</span>
              <span className="profession">Web developer</span>
            </div>
          </div>

          <a href="/">
            <img src={chevron} onClick={toogleSidebar}></img>
          </a>
        </header>

        <div className="menu-bar">
          <div className="menu">
            <li className="search-box">
              <img src={lupa}></img>
              <input type="text" placeholder="Search..." />
            </li>

            <ul className="menu-links">
              <li className="nav-link">
                <a href="#">
                  <img src={home}></img>
                  <span className="text nav-text">Panel</span>
                </a>
              </li>

              <li className="nav-link">
                <a href="#">
                  <img src={bar_chart}></img>
                  <span className="text nav-text">ganancia</span>
                </a>
              </li>

              <li className="nav-link">
                <a href="#">
                  <img src={bell} />
                  <span className="text nav-text">Notificaciones</span>
                </a>
              </li>

              <li className="nav-link">
                <a href="#">
                  <img src={pie}></img>
                  <span className="text nav-text">Analiticas</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="bottom-content">
            <li className="">
              <a href="/">
                <img src={logout}></img>
                <span className="text nav-text">Logout</span>
              </a>
            </li>
          </div>
        </div>
      </nav>

      <section className="home">
        <div className="text">
          Dashboard Sidebar
          <div className="text-analiticas">
            <div className="text-ventas">
              <div className="text-status">
                <div className="text-info">
                  <h3>total ventas</h3>
                  <h1> $65.2</h1>
                </div>
                <div className="text-progreso">
                  <svg>
                    <circle cx={38} cy={38} r={36} />
                  </svg>
                  <div className="text-porcentaje">
                    <p>+80%</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-Ganancias">
              <div className="text-status">
                <div className="text-info">
                  <h3>Total Ganancias</h3>
                  <h1> $83.2</h1>
                </div>
                <div className="text-progreso">
                  <svg>
                    <circle cx={38} cy={38} r={36} />
                  </svg>
                  <div className="text-porcentaje">
                    <p>+80%</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-">
              <div className="text-status">
                <div className="text-info">
                  <h3>total Analiticas</h3>
                </div>
                <div className="text-progreso">
                  <svg>
                    <circle cx={38} cy={38} r={36} />
                  </svg>
                  <div className="text-porcentaje">
                    <p>+60%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Panel;
