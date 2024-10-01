import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import shop from "../Image/shop.png"; // Logo image
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa"; // Importing icons
import { useDispatch, useSelector } from "react-redux";
import Login from "./Login"; // Login component
import Register from "./Register"; // Register component
import Modal from "./Modal"; // Modal component for login/register
import { setSearchTern } from "../Redux/productSlice"; // Action to set search term

function Navbar() {
  const [isModelOpen, setIsModelOpen] = useState(false); // State for controlling modal visibility
  const [isLogin, setIsLogin] = useState(true); // State to toggle between login and register
  const [search, setSearch] = useState(); // State for search input

  const dispatch = useDispatch(); // Redux dispatch
  const navigate = useNavigate(); // Hook for navigation

  // Handle search form submission
  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(setSearchTern(search)); // Dispatch search term to Redux store
    navigate("/filter-data"); // Navigate to filtered data page
  };

  // Function to open signup modal
  const openSignUp = () => {
    setIsLogin(false); // Set to register mode
    setIsModelOpen(true); // Open modal
  };

  // Function to open login modal
  const openLogin = () => {
    setIsLogin(true); // Set to login mode
    setIsModelOpen(true); // Open modal
  };

  const products = useSelector((state) => state.cart.product); // Get cart products from Redux store

  return (
    <nav className="bg-white shadow-md">
      <div className="text-lg font-bold p-4 items-center">
        <img src={shop} alt="" className="h-26 w-20 " /> {/* Shop logo */}
        <Link to="/">SHOPME</Link> {/* Home link */}
      </div>
      
      <div className="container mx-auto px-2 md:px-16 lg:px-24 py-4 flex justify-between items-center space-x-6">
        {/* Search form */}
        <div className="relative flex-1 mx-4">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search Product"
              className="w-full border py-2 px-4"
              onChange={(e) => setSearch(e.target.value)} // Update search state on input change
            />
            <FaSearch className="absolute top-3 right-3 text-red-500" /> {/* Search icon */}
          </form>
        </div>

        {/* Cart icon */}
        <div className="flex items-center space-x-4">
          <Link to="/cart" className="relative">
            <FaShoppingCart className="text-lg size-6" />
            {/* Display cart item count if there are products */}
            {products.length > 0 && (
              <span className="absolute top-0 text-xs w-3 left-3 bg-red-600 rounded-full flex justify-center items-center text-white">
                {products.length}
              </span>
            )}
          </Link>
        </div>

        {/* Login/Register button */}
        <div>
          <button
            className="hidden md:block"
            onClick={() => setIsModelOpen(true)} // Open modal on click
          >
            Login | Register
          </button>
        </div>
        {/* User icon for mobile view */}
        <button className="block md:hidden">
          <FaUser />
        </button>
      </div>

      {/* Navigation links */}
      <div className="flex items-center justify-center space-x-10 py-5 text-base font-bold">
        <Link to={'/'} className="hover:underline">Home</Link>
        <Link to="/shop" className="hover:underline">Shop</Link>
        <Link to={'/contact'} className="hover:underline">Contact</Link>
        <Link to={'/about'} className="hover:underline">About</Link>
      </div>

      {/* Modal for login/register */}
      <Modal isModelOpen={isModelOpen} setisModelOpen={setIsModelOpen}>
        {isLogin ? (
          <Login openSignUp={openSignUp} /> // Show Login component
        ) : (
          <Register openLogin={openLogin} /> // Show Register component
        )}
      </Modal>
    </nav>
  );
}

export default Navbar;
