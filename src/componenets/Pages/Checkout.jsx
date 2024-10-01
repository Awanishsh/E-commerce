import React, { useState } from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Checkout({ setOrder }) {
  // State toggles for showing/hiding Billing, Shipping, and Payment sections
  const [billingToggle, setBillingToggle] = useState(true); // Billing info initially open
  const [shippingToggle, setShippingToggle] = useState(false); // Shipping info initially closed
  const [paymentToggle, setPaymentToggle] = useState(false); // Payment info initially closed

  // State for storing shipping information
  const [shippingInfo, setShippingInfo] = useState({
    address: "",
    city: "",
    zip: "",
  });

  // Fetch cart data from the Redux store
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate(); // Used for navigation after placing an order

  // Function to handle placing an order
  const handelOrder = () => {
    // Create new order object using cart data and shipping info
    const newOrder = {
      product: cart.product, // Cart products
      orderNumber: "1234", // Example order number
      shippinginformation: shippingInfo, // Shipping info from state
      totalPrice: cart.totalPrice, // Total price from cart
    };

    // Set the order state using the provided setOrder function
    setOrder(newOrder);
    
    // Navigate to order confirmation page
    navigate("/order-confirmation");
  };

  return (
    <div className="container mx-auto py-8 px-4 md:px-16 lg:px-24 min-h-screen">
      {/* Title */}
      <h3 className="text-2xl font-semibold mb-6">CHECKOUT</h3>

      {/* Main content: Billing, Shipping, Payment info and Cart Summary */}
      <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0 md:space-x-10 mt-8">
        
        {/* Billing, Shipping, and Payment Information Section */}
        <div className="md:w-2/3">
          
          {/* Billing Information Section */}
          <div className="border p-4 mb-6 rounded-lg shadow-md">
            {/* Billing toggle section */}
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setBillingToggle(!billingToggle)} // Toggle billing section on click
            >
              <h3 className="text-xl font-semibold">Billing Information</h3>
              {billingToggle ? (
                <FaAngleUp className="text-gray-500" /> // Icon to indicate section is open
              ) : (
                <FaAngleDown className="text-gray-500" /> // Icon to indicate section is closed
              )}
            </div>

            {/* Billing Form - Shown when billingToggle is true */}
            {billingToggle && (
              <div className="space-y-4 mt-4">
                {/* Name field */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-2 border rounded-md"
                    placeholder="Enter your name"
                  />
                </div>
                {/* Email field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-2 border rounded-md"
                    placeholder="Enter your email"
                  />
                </div>
                {/* Phone field */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium mb-1"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full p-2 border rounded-md"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Shipping Information Section */}
          <div className="border p-4 mb-6 rounded-lg shadow-md">
            {/* Shipping toggle section */}
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setShippingToggle(!shippingToggle)} // Toggle shipping section on click
            >
              <h3 className="text-xl font-semibold">Shipping Information</h3>
              {shippingToggle ? (
                <FaAngleUp className="text-gray-500" /> // Icon to indicate section is open
              ) : (
                <FaAngleDown className="text-gray-500" /> // Icon to indicate section is closed
              )}
            </div>

            {/* Shipping Form - Shown when shippingToggle is true */}
            {shippingToggle && (
              <div className="space-y-4 mt-4">
                {/* Address field */}
                <div>
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium mb-1"
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    className="w-full p-2 border rounded-md"
                    placeholder="Enter your address"
                    onChange={(e) =>
                      setShippingInfo({
                        ...shippingInfo,
                        address: e.target.value, // Update address in shippingInfo state
                      })
                    }
                  />
                </div>
                {/* City field */}
                <div>
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium mb-1"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    className="w-full p-2 border rounded-md"
                    placeholder="Enter your city"
                    onChange={(e) =>
                      setShippingInfo({ ...shippingInfo, city: e.target.value }) // Update city in shippingInfo state
                    }
                  />
                </div>
                {/* Zip Code field */}
                <div>
                  <label
                    htmlFor="zip"
                    className="block text-sm font-medium mb-1"
                  >
                    Zip Code
                  </label>
                  <input
                    type="text"
                    id="zip"
                    className="w-full p-2 border rounded-md"
                    placeholder="Enter your zip code"
                    onChange={(e) =>
                      setShippingInfo({ ...shippingInfo, zip: e.target.value }) // Update zip code in shippingInfo state
                    }
                  />
                </div>
              </div>
            )}
          </div>

          {/* Payment Method Section */}
          <div className="border p-4 mb-6 rounded-lg shadow-md">
            {/* Payment toggle section */}
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setPaymentToggle(!paymentToggle)} // Toggle payment section on click
            >
              <h3 className="text-xl font-semibold">Payment Method</h3>
              {paymentToggle ? (
                <FaAngleUp className="text-gray-500" /> // Icon to indicate section is open
              ) : (
                <FaAngleDown className="text-gray-500" /> // Icon to indicate section is closed
              )}
            </div>

            {/* Payment Method Form - Shown when paymentToggle is true */}
            {paymentToggle && (
              <div className="space-y-4 mt-4">
                {/* Payment Options */}
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Choose Payment Method
                  </label>
                  <select className="w-full p-2 border rounded-md">
                    <option value="credit-card">Credit Card</option>
                    <option value="paypal">PayPal</option>
                    <option value="bank-transfer">Bank Transfer</option>
                  </select>
                </div>

                {/* Credit Card Input Fields */}
                <div>
                  <label
                    htmlFor="cardNumber"
                    className="block text-sm font-medium mb-1"
                  >
                    Card Number
                  </label>
                  <input
                    type="text"
                    id="cardNumber"
                    className="w-full p-2 border rounded-md"
                    placeholder="Enter your card number"
                  />
                </div>
                <div>
                  <label
                    htmlFor="expiryDate"
                    className="block text-sm font-medium mb-1"
                  >
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    id="expiryDate"
                    className="w-full p-2 border rounded-md"
                    placeholder="MM/YY"
                  />
                </div>
                <div>
                  <label
                    htmlFor="cvv"
                    className="block text-sm font-medium mb-1"
                  >
                    CVV
                  </label>
                  <input
                    type="text"
                    id="cvv"
                    className="w-full p-2 border rounded-md"
                    placeholder="Enter CVV"
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Cart Total Section */}
        <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md border">
          <h3 className="text-lg font-semibold mb-5">Order Summary</h3>

          {/* List of Products in Cart */}
          <div className="space-y-4">
            {cart.product.map((product) => (
              <div key={product.id} className="flex space-x-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div>
                  <h4 className="text-lg font-semibold">{product.name}</h4>
                  <p className="text-gray-600">
                    &{product.price} x {product.quantity}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Total Price */}
          <div className="mt-4 border-t pt-4">
            <div className="flex justify-between">
              <span className="text-sm font-medium">Total Price:</span>
              <span className="text-sm font-bold">
                ${(cart.totalPrice || 0).toFixed(2)} {/* Display formatted total price */}
              </span>
            </div>
          </div>

          {/* Place Order Button */}
          <button
            className="w-full bg-blue-500 text-white font-semibold py-3 px-4 rounded mt-4 hover:bg-blue-600 transition duration-300"
            onClick={handelOrder} // Call handelOrder on click
          >
            Place Order
          </button>

          {/* Continue Shopping Button */}
          <div>
            <button
              className="w-full bg-red-500 text-white font-semibold py-3 px-4 rounded mt-4 hover:bg-red-600 transition duration-300"
              onClick={() => navigate("/")} // Navigate back to home on click
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
