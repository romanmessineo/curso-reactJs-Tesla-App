import ItemCount from "./ItemCount";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useEffect, useState, useContext} from "react";
import { CartContext } from "./context/CartContext"

const ItemDetail = ({ item }) => {
  const {addItem} = useContext(CartContext);  
  const [itemStock, setItemStock] = useState(0);
  
  const onAdd = (quantity) => {
    setItemStock(itemStock - quantity);
    addItem(item, quantity);
  }

  useEffect (()=>{
    setItemStock(item.stock);

  }, [item]
  );

/*   let name = item.name;
  let description = item.description;
  let price = item.price;
  let stock = item.stock;  */



  

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
          <div className="row" style={{ marginTop: "1vh" }}>
            <Carousel>
              <div>
                <img src={item.image1}></img>
                <p className="legend">Imagen 1</p>
              </div>
              <div>
                <img src={item.image2} alt={item.name}></img>
                <p className="legend">Imagen 2</p>
              </div>
              <div>
                <img src={item.image3} alt={item.name}></img>
                <p className="legend" alt={item.name}>
                  Imagen 3
                </p>
              </div>
            </Carousel>

            <h5
              className="d-flex text-success p-1 text-center justify-content-center"
              style={{ textShadow: "1px 1px 1px black" }}
            >
              Precio: $ {item.price}
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
            <h5 className="pt-3 pb-3">{item.name}</h5>
            <p>{item.description}</p>
          </div>
        </div>

        <div
          className="col-md-4 pt-3 text-center"
          style={{ border: "solid 1px", borderRadius: "1vh" }}
        >
          Stock: {item.stock} Und
          <br />
          Categoria: {item.category}
          <hr />
          <p className="text-bg-success rounded-pill d-flex justify-content-center align-content-center">
            envíos gratis
          </p>
          <ItemCount stock={item.stock} onAdd={onAdd}/> 
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
