import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div
      className="container py-5"
      style={{
        background: "#afef20",
        border: "solid 1px #35A744",
      }}
    >
      <div className="row">
        <div className="col-md-6">
          <Link to={"/"} className="mx-1">
            <img
              src={"/images/instagram.svg"}
              alt={"instagram"}
              width={24}
            ></img>
          </Link>
          <Link to={"/"} className="mx-1">
            <img src={"/images/twitter.svg"} alt={"twitter"} width={24}></img>
          </Link>
          <Link to={"/"} className="mx-1">
            <img src={"/images/facebook.svg"} alt={"facebook"} width={24}></img>
          </Link>
          <Link to={"/"} className="mx-1">
            <img src={"/images/whatsapp.svg"} alt={"whatsapp"} width={24}></img>
          </Link>
        </div>
        <div className="col-md-6 d-flex justify-content-end">
          <Link to={"/app"} target="_blank" className="mx-1">
            <img
              src={"/images/app_store_3x_d293084ca1.png"}
              alt="app-store"
              width="115"
            ></img>
          </Link>
          <Link to={"/googleplay"} target="_blank" className="mx-1">
            <img
              src={"/images/disponible_google_play_3x_c977cae3bc.png"}
              alt="goole-play"
              width="129"
            ></img>
          </Link>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-md-10">
          <ul className="nav">
            <li className="nav-item">
              <Link className="nav-link text-muted" to={"/privacidad"}>
                Política de Privacidad
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-muted" to={"/defconsumidor"}>
                Defensa del Consumidor
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-muted" to={"/datos personales"}>
                Datos Personales
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-muted" to={"/contato"}>
                Contacto
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-md-2 text-end">
          <p>
            <img src={"/images/logo_1.png"} alt="logo_1" width="40"></img>©
            Tesla store
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
