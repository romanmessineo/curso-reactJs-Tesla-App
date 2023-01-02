import { useState, useEffect } from "react";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";
import { addDoc, collection, getDocs, getFirestore, query, where, limit } from "firebase/firestore";

const ItemListContainer = () => {
  const [listProducts, setListProducts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "products");
    //const q = query(itemsCollection, where("precio", "<", 1000), limit(3)); //Consulta de Filtrado
    
    const q = id ? query(itemsCollection, where("category", "==", id)) : itemsCollection;
    
    getDocs(q).then((snapShot) => {
      setListProducts(snapShot.docs.map((doc) => ({id:doc.id, ...doc.data()})
        ))
    });
}, [id]);
  



  return (
    <>
      <ItemList listProducts={listProducts} />
    </>
  );
};

export default ItemListContainer;
