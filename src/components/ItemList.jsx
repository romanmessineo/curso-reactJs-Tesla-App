import { SearchContext } from "./context/SearchContext";
import Item from "./Item";
import React, { useContext } from "react";


const ItemList = ({ listProducts }) => {

  const {search} = useContext(SearchContext);

  let results = []
  if(!search){
    results = listProducts
  }
  else{
    results = listProducts.filter((data)=>
    data.name.toLowerCase().includes(search.toLowerCase())||
    data.description.toLowerCase().includes(search.toLowerCase()))
  }

  return (
    <div className="container p-2">
        <div className="col">
      <div className="row d-flex justify-content-around mt-3 p-3 gap-2">
        {results.map((products) => (
          <Item key={products.id} products={products} />
        ))}
        </div>
      </div>
    </div>
  );
};

export default ItemList;
