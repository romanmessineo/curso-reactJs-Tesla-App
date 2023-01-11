import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import Spinner from "./Spinner";

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const item = doc(db, "products", id);
    getDoc(item).then((snapShot) => {
      if (snapShot.exists()) {
        setItem({ id: snapShot.id, ...snapShot.data() });
        setLoading(false);
      } else {
        alert("no se encotro el producto");
      }
    });
  }, [id]);

  return <>{loading ? <Spinner /> : <ItemDetail item={item} />}</>;
};

export default ItemDetailContainer;
