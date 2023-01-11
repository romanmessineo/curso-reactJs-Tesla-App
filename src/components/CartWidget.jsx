import React, { useContext } from "react";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";

const BotonCarrito = ({ total }) => {
  return (
    <Link to={"/cart"} className="btn btn-light position-relative" style={{boxShadow: "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px"}}>
      <img src="/images/cart.svg" alt="Carrito" width="32" />
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        {total}
      </span>
    </Link>
  );
};

const CartWidget = () => {
  const { cartTotal } = useContext(CartContext);

  return cartTotal() >= 0 ? <BotonCarrito total={cartTotal()} /> : "";
};

export default CartWidget;
