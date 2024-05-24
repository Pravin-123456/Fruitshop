import { useState, useEffect } from 'react';
import React from "react";


const Navbar = () => {

  const [open,setOpen] = useState(false)
  const shoppingCart = () => {
    console.log("shopping cart was clicked");
    setOpen(!open)
  };

  return (
    <nav className=" mt-4">
      <div className=" md:flex justify-between w-5/6 max-w-6xl mx-auto">
        <div className="flex justify-between ">
          <div className=''>
            <span className=" text-green-500 font-bold text-4xl">Fruit</span>
            <span className=" text-slate-500 font-thin text-3xl px-2">
              Shop
            </span>
          </div>
          <div className="md:hidden mt-2">
            <button onClick={shoppingCart}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 mt-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className={`flex md:block justify-end ${open ? "block" : "hidden"}`}>
          <ul className="flex md:space-x-6 space-y-4 md:space-y-0">
            <li className="menu border-b-4 border-green-500">
              <a href="#" className="font-poppins">
                Fruits
              </a>
            </li>
            <li className="menu ">
              <a href="#" className="font-poppins">
                Vegetables
              </a>
            </li>
            <li className="menu ">
              <a href="#" className="font-poppins">
                More
              </a>
            </li>
            <li className="text-green-500 px-4 py-2">
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
