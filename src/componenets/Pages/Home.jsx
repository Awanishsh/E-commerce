import React, { useEffect, useState } from "react";
import pic1 from "../../Image/pic1.jpg";
import pic11 from "../../Image/pic11.jpg";
import pic12 from "../../Image/pic12.jpg";
import Infosection from "../Infosection";
import Categorysection from "../Categorysection";
import Productcart from "../Productcart";

const Home = () => {
  const API = "https://fakestoreapi.com/products";

  const [user, setuser] = useState([]);

  // Fetching product data from API
  const fetchdata = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.length > 0) {
        setuser(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchdata(API);
  }, []);

  return (
    <div className="mt-16 px-2 md:px-8 lg:px-12">
      {/* Carousel Section */}
      <div className="container mx-auto py-4 flex flex-col">
        <div className="w-full relative">
          <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
              <img
                src={pic1}
                className="w-full h-[300px] md:h-[500px] object-cover"
                alt="Slide 1"
              />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide4" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide2" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
              <img
                src={pic11}
                className="w-full h-[300px] md:h-[500px] object-cover"
                alt="Slide 2"
              />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide1" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide3" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
              <img
                src={pic12}
                className="w-full h-[300px] md:h-[500px] object-cover"
                alt="Slide 3"
              />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide2" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide4" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
              <img
                src={pic1}
                className="w-full h-[300px] md:h-[500px] object-cover"
                alt="Slide 4"
              />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide3" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide1" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>

          {/* Text Overlay */}
          <div className="absolute top-6 left-10">
            <h2 className="text-2xl md:text-3xl font-bold">
              WELCOME TO SHOPME
            </h2>
            <p className="text-md md:text-xl mt-2.5 font-bold text-gray-800">
              MILLIONS OF PRODUCTS
            </p>
            <button className="bg-red-600 px-4 py-1 md:px-8 md:py-2 text-white font-semibold mt-4 hover:bg-red-700 transform transition-transform duration-300 hover:scale-105 rounded-md">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>

      <Categorysection />

      {/* Top Products Section */}
      <div className="container mx-auto py-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Top Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {user.map((item) => (
            <Productcart
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              description={item.description}
              image={item.image}
            />
          ))}
        </div>
      </div>

      <div className="pb-10">
        <Infosection />
      </div>
    </div>
  );
};

export default Home;
