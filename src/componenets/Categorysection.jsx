import React from "react";
import ManCategory from "../Image/men-pic.jpg";
import WomanCategory from "../Image/women-pic.jpg";
import KidsCategory from "../Image/child-pic.jpg";

function Categorysection() {
  // Define category data with title and corresponding image URLs
  const categories = [
    {
      title: "Men",
      imageUrl: ManCategory,
    },
    {
      title: "Women",
      imageUrl: WomanCategory,
    },
    {
      title: "Kids",
      imageUrl: KidsCategory,
    },
  ];

  return (
    // Main container for the category section, arranged in a grid layout
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6  ">
      {categories.map((category, index) => (
        <div
          key={index}
          className="relative h-96 transform transition-transform duration-300 hover:scale-105 cursor-pointer"
        >
          <img
            src={category.imageUrl}
            alt={category.title}
            className="w-full h-full object-cover rounded-lg shadow-md"
          />

          <div className="absolute top-16 left-12">
            <p className="text-xl font-bold">{category.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Categorysection;
