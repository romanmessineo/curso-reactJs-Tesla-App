import React, { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, cartTotal, clear, removeItem, sumTotal } =
    useContext(CartContext);

  if (cartTotal() === 0) {
    return (
      <div className="container">
        <div className="row my-5">
          <div className="col-md-12 text-center">
            <div className="alert alert-danger" role="alert">
              No se encontraron Productos en el Carrito!
            </div>
            <Link to={"/"} className="btn btn-primary">
              Volver a la Página Principal
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container bg-light"  >
      <div className="row my-5 ">
        <div className="col-md-12 ">
          <table class="table">
            <thead>
              <tr>
                <th scope="col" colSpan={5} className="text-end">
                  <Link
                    onClick={clear}
                    className="btn btn-danger"
                    title={"Vaciar Carrito"}
                  >
                    Vaciar Carrito
                  </Link>
                </th>
              </tr>
              <tr>
                <th scope="col">&nbsp;</th>
                <th scope="col">Producto</th>
                <th scope="col" className="text-end">
                  Cantidad
                </th>
                <th scope="col" className="text-end">
                  Precio
                </th>
                <th scope="col">&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td>
                   <Link to={"/item/"+item.id}><img style={{borderRadius:"50%", border:"solid 2px "  }}  src={item.image1} alt={item.name} width={80} /></Link>
                  </td>
                  <td className="align-middle">{item.name}</td>
                  <td className="align-middle text-end">{item.quantity}</td>
                  <td className="align-middle text-end">
                    ${item.quantity * item.price}
                  </td>
                  <td className="align-middle text-end">
                    <Link
                      onClick={() => {
                        removeItem(item.id);
                      }}
                      title={"Eliminar Producto"}
                    >
                      <img
                        src={"/images/trash.svg"}
                        alt={"Eliminar Producto"}
                        width={32}
                      />
                    </Link>
                  </td>
                </tr>
              ))}
              <tr>
                <td colSpan={2}>&nbsp;</td>
                <td className="text-end">
                  <b>Total a Pagar</b>
                </td>
                <td className="text-end">
                  <b>${sumTotal()}</b>
                </td>
                <td className="text-end">
                <Link to={"/checkout"} className="btn btn-warning">Finalizar Compra</Link></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
