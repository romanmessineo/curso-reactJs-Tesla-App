import { useEffect, useState } from "react";
/* import swal from "sweetalert"; */
import { Link } from "react-router-dom";

const ItemCount = ({ stock, onAdd }) => {
  
  const [counter, setCounter] = useState(1);
  const [itemStock, setItemStock]= useState(stock);
  const [sold ,setSold]= useState(false);
    
  const decreaseStock = () => counter > 1 && setCounter(counter - 1);

  const increaseStock = () => counter < itemStock && setCounter(counter + 1);

  const addToCart = (quantity) => {
    if (counter <= itemStock){
     setCounter(1) ;
    setItemStock(itemStock - quantity);
    setSold(true);
    onAdd(quantity);
    }
  }

  useEffect (()=> {
    setItemStock(stock)
  }, [stock]
  )



  return (
    <div>
        <div className="row mb-3">
            <div className="col-md-6 text-center">
                <div className="btn-group" role="group" aria-label="Basic outlined example">
                    <button type="button" className="btn btn-outline-primary" onClick={decreaseStock}> - </button>
                    <button type="button" className="btn btn-outline-primary">{counter}</button>
                    <button type="button" className="btn btn-outline-primary" onClick={increaseStock}> + </button>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-6 text-center">
                {sold ? <Link to={"/cart"} className="btn btn-outline-primary">Terminar Mi Compra</Link> : <button type="button" className="btn btn-outline-primary" onClick={() => { addToCart(counter) }}>Agregar al Carrito</button>}
            </div>
        </div>
    </div>
)
}

export default ItemCount;
