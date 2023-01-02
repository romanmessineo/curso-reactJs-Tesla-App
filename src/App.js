import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import Footer from "./components/Footer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import CartContextProvider from "./components/context/CartContext";
import Cart from "./components/Cart";
import Error404 from "./components/Error404";

function App() {
  return (

    <CartContextProvider>
       <BrowserRouter>
      <div
        className="container mt-3 "
        style={{margin:"auto", padding:"0"}}
      >
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path={"/cart"} element={<Cart />} />
          <Route path="*" element={<Error404 />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
    </CartContextProvider>
   
  );
}

export default App;
