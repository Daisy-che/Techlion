// pages/index.js
"use client"
import React, { useState } from 'react';
import { FaChevronDown, FaSearch, FaBars, FaShoppingCart  } from 'react-icons/fa';

const Navbar = () => {
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  return (
    <div>
    
      <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
         
          <div className="items-center">
            <img
              src="/Techlionlogo.png"
              alt="Logo"
              className="h-12"
            />
            
            <p className="text-gray-600 text-sm ml-2">For IT Solutions</p>
          </div>

        
          <nav className="hidden lg:flex space-x-6 relative">
            <a href="#" className="text-gray-700 hover:text-red-600">About us</a>
            <a href="#" className="text-gray-700 hover:text-red-600">Bulk SMS Solutions</a>
            <a href="#" className="text-gray-700 hover:text-red-600">Point of sale (POS)</a>
            
            
            <div 
              className="relative"
              onMouseEnter={() => setIsServicesDropdownOpen(true)}
              onMouseLeave={() => setIsServicesDropdownOpen(false)}
            >
              <a href="#" className="flex items-center text-gray-700 hover:text-red-600">
                Services
                <FaChevronDown className="ml-1" />
              </a>
              {isServicesDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white shadow-lg border rounded-md">
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Software Development</a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Bulk SMS Solution</a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Point of Sales (POS)</a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Web Development</a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">E-commerce</a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">M-pesa Integration</a>
                </div>
              )}
            </div>
            
            <a href="#" className="text-gray-700 hover:text-red-600">Shop</a>
          </nav>

        
          <div className="flex items-center space-x-4">
            <div className='flex'>
            <button className="relative text-red-600 hover:text-red-700">
            
              <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full px-1">0</span>
              <br/>
              <FaShoppingCart/> </button>
              
            </div>
            <button className="text-red-600 hover:text-red-700">
              <FaSearch />
            </button>
            <button className="text-red-600 hover:text-red-700">
              <FaBars />
            </button>
            <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">
              Talk To Us
            </button>
          </div>
        </div>
      </header>

      {/* Add padding-top to prevent content from being hidden behind the fixed header */}
      

      
    </div>
  );
};

export default Navbar;
