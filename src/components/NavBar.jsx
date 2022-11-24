import React from "react";
import CartWidget from "./CartWidget";
import Search from "./Search";

const NavBar = () => {
  return (
    <div className="container">
      <img
                  className="rounded"
                  src="images/logo_1.png"
                  alt="Tesla Heeamienas"
                  width="120"
                />
      <div className="row">
        <div className="col-md-6 ">
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
              <a className="navbar-brand" href="#"></a>

              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse text-end" id="navbarNav">
                <ul class="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="/corte">
                      Corte
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/oscilantes">
                      Oscilantes
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/Termofusoras">
                      Termofusoras
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/perforación">
                      Perforación
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/soldadura">
                      Soldadura
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/compresores">
                      Compresores
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/otros">
                      Otros
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div className="col-md-6 d-flex align-items-center justify-content-end ">
          <CartWidget />
        </div>
        <div className="col-md-12 d-flex align-items-center">
          <Search />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
