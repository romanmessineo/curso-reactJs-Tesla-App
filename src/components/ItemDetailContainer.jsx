import { products } from "../Utils/products";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const promise = new Promise((res, rej) => {
      setTimeout(() => {
        res(products.find((item) => item.id === parseInt(id)));
      }, 2000);
    });
    promise.then((data) => {
      setItem(data);
    });
  }, [id]);

  return (
    <>
      <ItemDetail item={item} />
    </>
  );
};

export default ItemDetailContainer;
