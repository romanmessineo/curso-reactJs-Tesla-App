import { CartContext } from "./context/CartContext";
import { Carousel } from "react-responsive-carousel";
import { useEffect, useState, useContext } from "react";
import ItemCount from "./ItemCount";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ItemDetail = ({ item }) => {
  const { addItem } = useContext(CartContext);
  const [itemStock, setItemStock] = useState(0);

  const onAdd = (quantity) => {
    setItemStock(itemStock - quantity);
    addItem(item, quantity);
  };

  useEffect(() => {
    setItemStock(item.stock);
  }, [item]);

  return (
    <div
      className="container-fluid "
      style={{backgroundColor:"white", boxShadow: "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px", maxWidth: "90%",
        marginTop: "1vh", marginBottom: "1vh", borderRadius: "1vh"}}
    >
      <div className="row">
        <div className="col-md-4 align-items-center">
          <div className="row" style={{ marginTop: "1vh" }}>
            <Carousel>
              <div>
                <img src={item.image1} alt={item.name}></img>
              
              </div>
              <div>
                <img src={item.image2} alt={item.name}></img>
                
              </div>
              <div>
                <img src={item.image3} alt={item.name}></img>
               
              </div>
            </Carousel>

            <h5
              className="d-flex text-success p-1 text-center justify-content-center"
              style={{ textShadow: "1px 1px 1px black" }}
            >
              Precio: $ {item.price}
            </h5>
              <hr />
            <p className="fw-bolder font-monospace">
              Caracteristicas <br />
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

        <div className="col-md-4 p-4 " style={{backgroundImage: "linear-gradient(120deg, #ffffff 0, #d6d5e0 50%, #9092b2 100%)"}}>
          <div>
            <h5 className="pt-3 pb-3 text-center">{item.name}</h5>
            <p>{item.description}</p>
          </div>
        </div>

        <div
          className="col-md-4 pt-3"
          style={{ borderRadius: "1vh", display:"flex", flexDirection:"column"}}
        >
          Stock: {item.stock} Und
          <br />
          Categoria: {item.category}
          <hr />
          
          <p className="text-bg-success rounded-pill d-flex justify-content-center align-content-center">
            envíos gratis
          </p >
          <hr />
          <p className="d-flex justify-content-center align-content-center">

          Agrega productos al carrito
          </p>
          <ItemCount stock={item.stock} onAdd={onAdd} />
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
