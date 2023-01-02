import { Link } from "react-router-dom";

const Item = ({ products }) => {
  let id = products.id;
  let shortDescription = products.description.slice(0, 200);
  let name = products.name;
  let stock = products.stock;

  return (
    <div
      className="card mb-1 border-success"
      style={{ backgroundColor: "#E6EBF3", maxWidth: "540px" }}
    >
      <Link
        to={"/item/" + id}
        style={{ textDecoration: "none", color: "black" }}
      >
        <div className="row g-0">
          <div className="col-md-4 d-flex align-items-center">
            <img
              className="img-fluid rounded-start pt-2"
              style={{ height: "85%" }}
              src={products.image1}
            />
          </div>

          <div className="col-md-8">
            <div className="card-body ">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">{shortDescription}...</p>
              <p className="card-text text-bg-success rounded-pill d-flex justify-content-center align-content-center">
                envíos gratis
              </p>
              <h5 className="card-text d-flex text-success text-end justify-content-end">
                {" "}
                Precio: $ {products.price}
              </h5>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Item;
