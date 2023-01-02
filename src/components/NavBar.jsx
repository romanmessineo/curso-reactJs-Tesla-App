import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import Search from "./Search";

const NavBar = () => {
  return (
    <div
      className="container"
      style={{
        background: "#afef20",
        border: "solid 1px #35A744",
      }}
    >
      <div className="row p-3 justify-content-center">
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
          <div className="col-md-10 d-flex align-items-center justify-content-center">
            <Search />
          </div>
        </div>

        <div className="col-md-6 ">
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
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      activeclassname="page"
                      to={"/category/corte"}
                    >
                      Corte
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      activeclassname="page"
                      to={"/category/oscilantes"}
                    >
                      Oscilantes
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      activeclassname="page"
                      to={"/category/termofusoras"}
                    >
                      Termofusoras
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      activeclassname="page"
                      to={"/category/perforacion"}
                    >
                      Perforación
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      activeclassname="page"
                      to={"/category/soldadura"}
                    >
                      Soldadura
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      activeclassname="page"
                      to={"/category/fresadoras"}
                    >
                      Fresadoras
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
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

        <hr />
      </div>
    </div>
  );
};

export default NavBar;
