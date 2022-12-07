import { useState } from "react";

const CartWidget = () => {

const [count, setCount] = useState(1)

  return (
    <button type="button" className="btn btn-warning position-relative">
      <img src={"images/cart.svg"} alt="car" whidth="32"/>
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
       {count}
      </span>
    </button>
  );
};

export default CartWidget;
