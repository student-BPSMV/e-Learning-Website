import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header class="bg-white body-font fixed top-0 left-0 w-full h-[104px] z-50 -mt-5 font-[Nunito] mb-0">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a class="flex text-[#06bbcc] text-4xl font-medium items-center mb-4 pt-3">
          <i class="fa-solid fa-book"></i>
          <span class="ml-3">e-LEARNING</span>
        </a>
        <nav class="md:ml-auto flex flex-wrap items-center justify-center text-lg font-semibold">
          <a class="mr-10 text-[#06bbcc] hover:text-gray-900">
            <Link to="/">HOME</Link>
          </a>
          <a class="mr-10 text-gray-900 hover:text-[#06bbcc]">
            <Link to="/about">ABOUT</Link>
          </a>
          <a class="mr-10 text-gray-900 hover:text-[#06bbcc]">
            <Link to="/courses">COURSES</Link>
          </a>
          <a class="mr-10 text-gray-900 hover:text-[#06bbcc]">
            <Link to="/contact">CONTACT</Link>
          </a>
        </nav>
        <button class="inline-flex items-center text-lg  font-medium text-white bg-[#06BBCC] border-0 py-7 px-12 -mr-22 md:mt-0">
          <Link to="/courses">Join Now</Link>
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>
  );
}

export default Navbar;
