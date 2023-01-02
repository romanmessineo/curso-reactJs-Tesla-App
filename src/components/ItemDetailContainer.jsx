import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const item = doc(db, "products", id);
    getDoc(item).then((snapShot) => {
      if (snapShot.exists()) {
        setItem({ id: snapShot.id, ...snapShot.data() });
      } else {
        alert("no se encotro el producto");
      }
    });
  }, [id]);

  return (
    <>
      <ItemDetail item={item} />
    </>
  );
};

export default ItemDetailContainer;
