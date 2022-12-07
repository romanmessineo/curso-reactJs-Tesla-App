import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
  let name = item.name;
  let description = item.description;
  let price = item.price;
  let stock = item.stock;

  return (
    <div
      className="container-fluid"
      style={{
        backgroundColor: "#E6EBF3",
        maxWidth: "90%",
        marginTop: "1vh",
        marginBottom: "1vh",
        borderRadius: "1vh",
      }}
    >
      <div className="row">
        <div className="col-md-4 align-items-center">
          <div className="row">
            <img
              className="img-fluid rounded-start pt-2"
              style={{ height: "85%" }}
              src={item.image1}
              alt={name}
            />
            <h5
              className="d-flex text-success p-1 text-center justify-content-center"
              style={{ textShadow: "1px 1px 1px black" }}
            >
              Precio: $ {price}
            </h5>
            <p>
              Caracteristicas
              <hr />
              Fabricante: {item.manufactured}
              <br />
              Modelo: {item.model}
              <br />
              Voltaje: {item.voltage} Whatts
              <br />
              Peso: {item.weight} Kgs
            </p>
          </div>
        </div>

        <div className="col-md-4">
          <div>
            <h5 className="pt-3 pb-3">{name}</h5>
            <p>{description}</p>
          </div>
        </div>

        <div
          className="col-md-4 pt-3 text-center"
          style={{ border: "solid 1px", borderRadius: "1vh" }}
        >
          Stock: {stock} Und
          <br />
          Categoria: {item.category}
          <hr />
          <p className="text-bg-success rounded-pill d-flex justify-content-center align-content-center">
            envíos gratis
          </p>
          <ItemCount initial={1} stock={stock} onAdd={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
