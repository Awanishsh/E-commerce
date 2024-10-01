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
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
      {/* Map through the categories array to dynamically generate the category cards */}
      {categories.map((category, index) => (
        <div
          key={index}
          className="relative h-64 transform transition-transform duration-300 hover:scale-105 cursor-pointer"
        >
          {/* Category image */}
          <img
            src={category.imageUrl}
            alt={category.title} // Use category title for alt text
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
          
          {/* Text overlay on the image */}
          <div className="absolute top-16 left-12">
            <p className="text-xl font-bold">{category.title}</p>
            <p className="text-red-500 font-semibold">View All</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Categorysection;
