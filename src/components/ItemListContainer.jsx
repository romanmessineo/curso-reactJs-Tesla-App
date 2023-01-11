import {collection, getDocs, getFirestore, query, where} from "firebase/firestore";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import Spinner from "./Spinner";
import Search from "./Search";

const ItemListContainer = () => {
  const [listProducts, setListProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "products");
    const q = id ? query(itemsCollection, where("category", "==", id)) : itemsCollection;

    getDocs(q).then((snapShot) => {
      setListProducts(
        snapShot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      );
      setLoading(false);
    });
  }, [id]);

  return (
    <> <Search/>{loading ? <Spinner /> : <ItemList listProducts={listProducts}/>}</>
        );
};

export default ItemListContainer;
