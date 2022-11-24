import React from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import Banners from "./components/Banners";

import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeating= {"Bienvenidos a Tesla Herramientas electricas"} />
      <Banners />
      <Footer />
    </div>
  );
}

export default App;
