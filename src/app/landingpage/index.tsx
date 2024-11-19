"use client"
import React from 'react';
import { FaChevronDown } from 'react-icons/fa';
import 'font-awesome/css/font-awesome.min.css';


const HomePage = () => {
  return (
    <div>
      {/* Add padding-top to prevent content from being hidden behind the fixed header */}
      <section className="pt-20 relative bg-cover bg-center min-h-[800px]" style={{ 
        backgroundImage: "url('/images/tech.jpeg')", 
        backgroundSize: 'cover', 
        backgroundPosition: 'center' 
      }}>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-20 text-white mt-40">
          <div className="flex flex-col items-center text-center">
          <div className="relative">
      {/* Red line at the top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-red-600"></div>
      
      {/* Main header section */}
      <div className="bg-blue-950 px-6 py-4">
        <h2 className="text-white text-xl font-semibold">
          Get Affordable E-commerce solutions
        </h2>
      </div>
    </div>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              E-commerce Solutions <span className="text-red-700">  &<br/> Websites</span>
            </h1>
            <p className="mt-4 text-lg">
              We create affordable E-commerce solutions and Custom websites at affordable Prices
            </p>
            <button className="mt-6 bg-red-700 text-white py-3 px-6 rounded-lg hover:bg-pink-600">
              Get Quote <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </section>

      <button className="fixed bottom-4 left-4 bg-green-500 text-white py-2 px-4 rounded-full flex items-center space-x-2 hover:bg-green-600">
        <i className="fab fa-whatsapp"></i>
        <span>Whatsapp Chat</span>
      </button>
    </div>
  );
};

export default HomePage;
