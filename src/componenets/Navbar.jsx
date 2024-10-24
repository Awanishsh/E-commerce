import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import shop from "../Image/shop.png";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { useSelector } from "react-redux";
import Login from "./Login";
import Register from "./Register";
import Modal from "./Modal";

function Navbar() {
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();
  const product = useSelector((state) => state.cart.product);

  // Handle form submission
  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim() !== "") {
      navigate(`/search-results/${search}`);
    }
  };

  // Function to open signup modal
  const openSignUp = () => {
    setIsLogin(false);
    setIsModelOpen(true);
  };

  // Function to open login modal
  const openLogin = () => {
    setIsLogin(true);
    setIsModelOpen(true);
  };

  return (
    <nav className="shadow-md">
      <div className="flex text-lg font-Oswald pt-4 px-4 items-center">
        <img src={shop} alt="" className="h-16 w-16" />
        <Link to="/" className="text-2xl font-bold ml-2">
          SHOPME
        </Link>

        <div className="container mx-auto flex justify-between items-center py-4 space-x-4">
          <div className="relative flex-1 mx-4">
            <form onSubmit={handleSearch}>
              <input
                type="text"
                placeholder="Search Product"
                className="w-full border py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <FaSearch className="absolute top-3 right-3 text-red-500" />
            </form>
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/cart" className="relative">
              <FaShoppingCart className="text-lg size-8" />
              {product.length > 0 && (
                <span className="absolute top-0 right-0 text-xs w-4 h-4 bg-red-600 rounded-full flex justify-center items-center text-white">
                  {product.length}
                </span>
              )}
            </Link>

            {/* Login/Register button */}
            <button
              className="hidden md:block bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
              onClick={() => setIsModelOpen(true)}
            >
              Login | Register
            </button>

            {/* User icon for mobile view */}
            <button
              className="block md:hidden text-lg"
              onClick={() => setIsModelOpen(true)}
            >
              <FaUser />
            </button>
          </div>
        </div>
      </div>

      {/* Navigation links */}
      <div className="flex items-center justify-center space-x-10 py-5 text-base font-bold">
        <Link to="/" className="hover:underline font-Oswald">
          Home
        </Link>
        <Link to="/shop" className="hover:underline font-Oswald">
          Shop
        </Link>
        <Link to="/contact" className="hover:underline font-Oswald">
          Contact
        </Link>
        <Link to="/about" className="hover:underline font-Oswald">
          About
        </Link>
      </div>

      {/* Modal for login/register */}
      <Modal isModelOpen={isModelOpen} setisModelOpen={setIsModelOpen}>
        {isLogin ? (
          <Login openSignUp={openSignUp} />
        ) : (
          <Register openLogin={openLogin} />
        )}
      </Modal>
    </nav>
  );
}

export default Navbar;
