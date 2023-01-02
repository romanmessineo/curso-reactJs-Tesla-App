const Error404 = () => {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <div className="text-center">
        <h1 className="display-1 fw-bold">404</h1>
        <p className="fs-3">
          {" "}
          <span className="text-danger">Opps!</span> Parece que algo salio mal.
        </p>
        <p className="lead">aparenteme la pagina que buscas no existe</p>
        <a href="/" className="btn btn-primary">
          Ir al inicio
        </a>
      </div>
    </div>
  );
};

export default Error404;
