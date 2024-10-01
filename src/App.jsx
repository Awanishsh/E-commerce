import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./componenets/Footer";
import Navbar from "./componenets/Navbar";
import Home from "./componenets/Pages/Home";
import Shop from "./componenets/Pages/Shop";
import Cart from "./componenets/Pages/Cart";
import Checkout from "./componenets/Pages/checkout";
import { useState } from "react";
import Order from "./componenets/Pages/Order";
import FilterData from "./componenets/Pages/FilterData";
import ProductDetails from "./componenets/Pages/ProductDetails";
import Contact from "./componenets/Pages/Contact";
import About from "./componenets/Pages/About";

function App() {
  const [order, setOrder] = useState(null);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route
          path="/checkout"
          element={<Checkout setOrder={setOrder} />}
        ></Route>
        <Route
          path="/order-confirmation"
          element={<Order order={order} />}
        ></Route>
        <Route path="/filter-data" element={<FilterData/>}></Route>
        <Route path="/product/:id" element={<ProductDetails />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
