import React from "react";
import arka2 from "./images/arka2.png";
import { Link } from "react-scroll";


import {Navbar, NavbarBrand, NavbarContent, NavbarItem,  DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar} from "@nextui-org/react";

import "./style.css";
const Nav = () => {
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
        <div className="w-full flex flex-row  shadow-md bg-white fixed pt-4 md:flex-row">
          <Link
            to="homee"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="flex title-font font-medium text-gray-900 mb-4 md:mb-0"
          >
            <img src={arka2} className="arka22" alt="arka" />
          </Link>

          {/* <a href="youtube.com">
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
          </a> */}
{/* <Navbar className="bur"> */}
      {/* <NavbarBrand>
        <AcmeLogo />
        <p className="font-bold text-inherit">ACME</p>
      </NavbarBrand> */}

{/* 
      <NavbarContent as="div" justify="end">
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
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
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat"> */}
            {/* <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">zoey@example.com</p>
            </DropdownItem> */}
            {/* <DropdownItem key="settings" to="homee">Home</DropdownItem>
            <DropdownItem key="team_settings" to="about">About</DropdownItem>
            <DropdownItem key="analytics">Skills</DropdownItem>
            <DropdownItem key="system">Services</DropdownItem>
            <DropdownItem key="configurations">Contact</DropdownItem>
           */}
           {/* <Link
              to="homee"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Home
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              About
            </Link>
            <Link
              to="skills"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Skills
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Services
            </Link>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Projects
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Contact
            </Link> */}


          {/* </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar> */}
        </div>
        <br />
        <br />
      </header>
    </div>
  );
};

export default Nav;
