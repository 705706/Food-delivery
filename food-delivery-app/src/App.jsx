import { Route, Routes } from "react-router-dom";
import Navbar from "./Componenets/Navbar/Navbar";
import Cart from "./Pages/Cart/Cart";
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder";
import Home from "./Pages/Home/Home";
import Footer from "./Componenets/Footer/Footer";
import { useState } from "react";
import LoginPopup from "./Componenets/LoginPopup/LoginPopup";

function App() {

  const [showLogin,setShowLogin] = useState(false)

  return (
    <>
    {showLogin? <LoginPopup setShowLogin={setShowLogin}/>:<></>}
      <div className="app">
        <Navbar setShowLogin={setShowLogin}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
