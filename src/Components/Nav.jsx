import arka2 from "./images/arka2.png";
import { Link } from "react-scroll";
import React, { useState } from "react";

import "./style.css";
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <header id="nav" className="text-gray-600 body-font">
        <div className="w-full bg-white z-10 fixed flex items-end p-5 md:flex-row  shadow-md ">
          <Link
            className="cursor-pointer flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
            to="homee"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <span className="ml-20 text-3xl">Arkajyoti</span>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center mr-10 pb-1 text-base justify-center">
            <Link
              to="homee"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="mr-5 hover:text-gray-900 font-semibold cursor-pointer"
            >
              Home
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="mr-5 hover:text-gray-900 font-semibold cursor-pointer"
            >
              About
            </Link>
            <Link
              to="skills"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="mr-5 hover:text-gray-900 font-semibold cursor-pointer"
            >
              Skills
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="mr-5 hover:text-gray-900 font-semibold cursor-pointer"
            >
              Services
            </Link>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="mr-5 hover:text-gray-900 font-semibold cursor-pointer"
            >
              Projects
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="mr-5 hover:text-gray-900 font-semibold cursor-pointer"
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>
      <header id="nav2" className="text-gray-600 body-font">
        <div className="w-full flex flex-row justify-between  shadow-md bg-white fixed pt-4 md:flex-row">
         <div> <Link
            to="homee"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="flex title-font font-medium text-gray-900 mb-4 md:mb-0"
          >
            <img src={arka2} className="arka22" alt="arka" />
          </Link>
          </div>
<div>
          <button onClick={toggleNavbar}>
        {isOpen ? (
          <svg
            height="2em"
            viewBox="-0.5 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 21.32L21 3.32001"
              stroke="#000000"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3 3.32001L21 21.32"
              stroke="#000000"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        ) : (
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
        )}
      </button>
      <div className={`navbar ${isOpen ? "open" : "closed"}`}>
        <ul className="flex flex-col gap-3 ml-2 mt-1 text-xl">
          <Link
            to="homee"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="mr-5 hover:text-gray-900 font-semibold cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="mr-5 hover:text-gray-900 font-semibold cursor-pointer"
          >
            About
          </Link>
          <Link
            to="skills"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="mr-5 hover:text-gray-900 font-semibold cursor-pointer"
          >
            Skills
          </Link>
          <Link
            to="services"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="mr-5 hover:text-gray-900 font-semibold cursor-pointer"
          >
            Services
          </Link>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="mr-5 hover:text-gray-900 font-semibold cursor-pointer"
          >
            Projects
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="mr-5 hover:text-gray-900 font-semibold cursor-pointer"
          >
            Contact
          </Link>
        </ul>
      </div>
      </div>

        </div>
        <br />
        <br />
      </header>

      
    </div>
  );
};

export default Nav;
