import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <div
      className="container bg-primary"
      style={{borderRadius: "5px",backgroundImage:"linear-gradient(120deg, #c16cff 0, #8f53ff 25%, #4838ff 50%, #0023ea 75%, #0019d8 100%)"}}>
        
      <div className="row p-3 justify-content-center fw-bold">
        <div className="row d-flex pb-2 justify-content-between">
          <div className="col-1">
            <Link className="navbar-brand" to={"/"}>
              <img
                className="rounded"
                src={"/images/logo_1.png"}
                alt="Tesla Heeamienas"
                width="120"
                img
              />
            </Link>
          </div>
        </div>

        <div className="col-md-6">
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
              <Link className="navbar-brand" to={"/"}></Link>

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
                <ul className="navbar-nav">
                  <li className="nav-item ">
                    <NavLink
                      className="nav-link text-light"
                      activeclassname="page"
                      to={"/"}
                    >
                      Todos
                    </NavLink>
                  </li>
                  <li className="nav-item ">
                    <NavLink
                      className="nav-link text-light"
                      activeclassname="page"
                      to={"/category/corte"}
                    >
                      Corte
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link text-light"
                      activeclassname="page"
                      to={"/category/oscilantes"}
                    >
                      Oscilantes
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link text-light"
                      activeclassname="page"
                      to={"/category/termofusoras"}
                    >
                      Termofusoras
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link text-light"
                      activeclassname="page"
                      to={"/category/perforacion"}
                    >
                      Perforaci??n
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link text-light"
                      activeclassname="page"
                      to={"/category/soldadura"}
                    >
                      Soldadura
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link text-light"
                      activeclassname="page"
                      to={"/category/fresadoras"}
                    >
                      Fresadoras
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link text-light"
                      activeclassname="page"
                      to={"/category/otros"}
                    >
                      Otros
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>

        <div className="col-md-4 d-flex align-items-center justify-content-end ">
          <CartWidget />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
