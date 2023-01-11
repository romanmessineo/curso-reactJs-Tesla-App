import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import Footer from "./components/Footer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import CartContextProvider from "./components/context/CartContext";
import SearchContextProvider from "./components/context/SearchContext";
import Cart from "./components/Cart";
import Error404 from "./components/Error404";
import Checkout from "./components/Checkout";
import ThankYou from "./components/ThankYou";

function App() {
  return (
    <CartContextProvider>
      <SearchContextProvider>
        <BrowserRouter>
          <div
            className="container mt-3"
            style={{
              margin: "auto",
              padding: "0",
              backgroundColor: "#E6EBF3",
              width: "100%",
            }}
          >
            <NavBar />
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/category/:id" element={<ItemListContainer />} />
              <Route path="/item/:id" element={<ItemDetailContainer />} />
              <Route path={"/cart"} element={<Cart />} />
              <Route path={"/checkout"} element={<Checkout />} />
              <Route path={"/thankyou/:id"} element={<ThankYou />} />
              <Route path="*" element={<Error404 />} />
            </Routes>
            <Footer />
          </div>
        </BrowserRouter>
      </SearchContextProvider>
    </CartContextProvider>
  );
}

export default App;
