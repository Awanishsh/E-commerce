import React from 'react';
import { useSelector } from 'react-redux';
import Productcart from '../../componenets/Productcart';

function FilterData() {
  // Get the filtered products from the Redux store
  const filterProducts = useSelector(state => state.product.filteredData);

  return (
    <div className="mx-auto py-12 px-4 md:px-16 lg:px-24">
      {/* Check if there are any filtered products */}
      {filterProducts.length > 0 ? (
        <>
          {/* Title for the shop section */}
          <h2 className="text-2xl font-bold mb-6 text-center">Shop</h2>

          {/* Grid layout for displaying products */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {filterProducts.map((product) => (
             
              
              // Rendering each product using the Productcart component
              <Productcart key={product.id} product={product} />
            ))}
             
          </div>
        </>
      ) : (
        // Display message if no products are found
        <div className='flex justify-center'>
          <h1 className='font-bold text-3xl '>No Product found</h1>
        </div>
      )}
    </div>
  );
}

export default FilterData;
