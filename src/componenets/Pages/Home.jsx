import React, { useEffect } from "react";
import { categories } from "../../assets/sampledata";
import pic1 from "../../Image/pic1.jpg";
import Infosection from "../Infosection";
import Categorysection from "../Categorysection";
import { setProducts } from "../../Redux/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { productdata } from "../../assets/sampledata";
import Productcart from "../Productcart";
import Shop from "./Shop";

const Home = () => {
  // Initialize dispatch for Redux actions
  const dispatch = useDispatch();
  
  // Get the products from Redux store
  const products = useSelector((state) => state.product);

  // Load the product data when the component is first rendered
  useEffect(() => {
    dispatch(setProducts(productdata)); // Set the products in Redux state
  }, [dispatch]);

  return (
    <div>  
      {/* Main container for the Home section */}
      <div className="bg-white mt-2 px-2 md:px-16 lg:px-24 ">
        {/* Main content area - Categories and Hero section */}
        <div className="container mx-auto py-4 flex flex-col md:flex-row space-x-2">
          {/* Categories section */}
          <div className="w-full md:w-3/12">
            <div className="bg-red-600 text-white text-xs font-bold px-2 py-2.5">
              SHOP BY CATEGORIES
            </div>

            {/* List of categories */}
            <ul className="space-y-4 bg-gray-100 p-3 border">
              {categories.map((category, index) => (
                <li key={index} className="flex items-center text-sm font-medium">
                  {category}
                </li>
              ))}
            </ul>
          </div>

          {/* Hero section with background image and call-to-action */}
          <div className="w-full md:w-9/12 mt-8 md:mt-0 h-96 relative ">
            <img src={pic1} alt="" className="h-full w-full" />

            {/* Text overlay in the Hero section */}
            <div className="absolute top-16 left-8">
              <h2 className="text-3xl font-bold">WELCOME TO SHOPME</h2>
              <p className="text-xl mt-2.5 font-bold text-gray-800">
                MILLIONS OF PRODUCTS
              </p>
              <button className="bg-red-600 px-8 py-1.5 text-white font-semibold mt-4 hover:bg-red-700 transform transition-transform duration-300 hover:scale-105 rounded-md">
                SHOP NOW
              </button>
            </div>
          </div>
        </div>

        {/* Information section */}
        <Infosection />

        {/* Categories section */}
        <Categorysection />
   
        {/* Top products display */}
        <div className="container mx-auto py-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Top Products</h2>

          {/* Display the top 5 products */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {products.products.slice(0, 5).map((product) => (
              <Productcart key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>

      {/* Shop component rendering at the bottom of the Home component */}
      <Shop />
    </div>
  );
};

export default Home;
