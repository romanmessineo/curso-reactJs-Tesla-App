import Item from "./Item";

const ItemList = ({ listProducts }) => {
  return (
    <div className="container">
      <div className="row d-flex justify-content-center mt-3 gap-1">
        {listProducts.map((products) => (
          <Item key={products.id} products={products} />
        ))}
      </div>
    </div>
  );
};

export { ItemList };
