import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();
  const products = useSelector((state) => state.product.products);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (products.length > 0) {
      const newProduct = products.find(
        (product) => product.id === parseInt(id)
      );
      setProduct(newProduct);
    }
  }, [id, products]);

  if (!product) {
    return (
      <div className="text-center text-lg font-semibold text-red-500 mt-10">
        Product not found
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-8 mt-10 bg-white shadow-lg rounded-lg">
      <div className="flex flex-col md:flex-row">
        {/* Product Image */}
        <div className="md:w-1/2">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Product Details */}
        <div className="md:w-1/2 md:pl-8 mt-6 md:mt-0">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">
            {product.name}
          </h1>
          <p className="text-lg text-gray-600 mb-4">{product.description}</p>
          <p className="text-2xl font-semibold text-green-600 mb-4">
            Price: ${product.price}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
