import React from "react";
import arka2 from "./images/arka2.png";


import "./style.css";
const Nav = () => {
  return (
    <div>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        {" "}
      </div>
      <header id="nav" className="text-gray-600 body-font">
        <div className="w-full bg-white z-10 fixed flex items-end p-5 md:flex-row  shadow-md ">
          <a
            href="#homee"
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <span className="ml-20 text-3xl">Arkajyoti</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center mr-10 pb-1 text-base justify-center">
            <a
              href="#homee"
              className="mr-5 hover:text-gray-900 font-semibold cursor-pointer"
            >
              Home
            </a>
            <a
              href="#about"
              className="mr-5 hover:text-gray-900 font-semibold cursor-pointer"
            >
              About
            </a>
            <a
              href="#skills"
              className="mr-5 hover:text-gray-900 font-semibold cursor-pointer"
            >
              Skills
            </a>
            <a
              href="#services"
              className="mr-5 hover:text-gray-900 font-semibold cursor-pointer"
            >
              Services
            </a>
            <a
              href="#projects"
              className="mr-5 hover:text-gray-900 font-semibold cursor-pointer"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="mr-5 hover:text-gray-900 font-semibold cursor-pointer"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>
      {/* gap-64  */}
      <header id="nav2" className="text-gray-600 body-font">
        <div className="w-full flex flex-row  shadow-md bg-white fixed pt-4 md:flex-row">
          <a href="#homee" className="flex title-font font-medium text-gray-900 mb-4 md:mb-0">
            <img src={arka2} className="arka22" alt="arka" />
          </a>

          <a href="youtube.com">
            <button className="bur mt-1">
              <svg
                height="2em"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 12H20"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  d="M5 17H20"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                />
                <path
                  d="M5 7H20"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </button>
          </a>
        </div>
        <br />
        <br />
        
      </header>
    </div>
  );
};

export default Nav;
