import { useState, useEffect } from "react";
import { products } from "../Utils/products";
import { customFetch } from "../Utils/customFetch";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [listProducts, setListProducts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    customFetch(
      id ? products.filter((item) => item.category === id) : products
    ).then((res) => {
      setListProducts(res);
    });
  }, [id]);

  return (
    <>
      <ItemList listProducts={listProducts} />
    </>
  );
};

export default ItemListContainer;
