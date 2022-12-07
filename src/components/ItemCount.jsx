import { useState } from "react";
import swal from "sweetalert";

const ItemCount = ({ stock, initial }) => {
  const [counter, setCounter] = useState(initial);

  const increaseStock = () => counter < stock && setCounter(counter + 1);

  const decreaseStock = () => counter > 1 && setCounter(counter - 1);

  const onAdd = () =>
    stock > 0 && swal("Agregaste: " + counter + " productos al carrito!");

  return (
    <div className="container d-flex justify-content-center">
      <div className="row">
        <div className="col">
          <div
            className="btn-group"
            role="group"
            aria-label="Basic outlined example"
          >
            <button
              type="button"
              className="btn btn-outline-primary"
              onClick={decreaseStock}
            >
              {" "}
              -{" "}
            </button>
            <button type="button" className="btn btn-outline-primary">
              {counter}
            </button>
            <button
              type="button"
              className="btn btn-outline-primary"
              onClick={increaseStock}
            >
              {" "}
              +{" "}
            </button>
          </div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={onAdd}
            style={{}}
          >
            Agregar al Carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCount;
