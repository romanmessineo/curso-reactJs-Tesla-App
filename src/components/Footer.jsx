import React from "react";

const Footer = () => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-6">
          <a href="#" className="mx-1"><img src={"images/instagram.svg"} alt={"instagram"} width={24}/></a>
          <a href="#" className="mx-1"><img src={"images/twitter.svg"} alt={"twitter"} width={24}/></a>
          <a href="#" className="mx-1"><img src={"images/facebook.svg"} alt={"facebook"} width={24}/></a>
          <a href="#" className="mx-1"><img src={"images/whatsapp.svg"} alt={"whatsapp"} width={24}/></a>
          
        </div>
        <div className="clo-md-6 d-flex justify-content-end">
          <a
            href="#"
            target="_blank"
            className="mx-1"
          >
            <img
              src="images/app_store_3x_d293084ca1.png"
              alt="app-store"
              width="115"
            />
          </a>
          <a
            href="#"
            target="_blank"
            className="mx-1"
          >
            <img
              src="images/disponible_google_play_3x_c977cae3bc.png"
              alt="goole-play"
              width="129"
            />
          </a>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-md-10">
          <ul className="nav">
            <li className="nav-item">
              <a className="nav-link text-muted" href="#">
              Política de Privacidad
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-muted" href="#">
              Defensa del Consumidor
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-muted" href="#">
              Protección de datos personales
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-muted" href="#">
              Contacto
                </a>
            </li>
          </ul>
        </div>
        <div className="col-md-2 text-end">
        <p><img src="images/logo_1.png" alt="mcdonals-logo" width="40" />© Tesla store</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
