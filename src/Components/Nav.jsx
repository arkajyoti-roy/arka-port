/* eslint-disable react/no-unknown-property */
// import React from "react";
import arka2 from "./images/arka2.png";
import { Link } from "react-scroll";
import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem,} from "@nextui-org/react";
// import {AcmeLogo} from "./AcmeLogo.jsx";

// import {Navbar, NavbarBrand, NavbarContent, NavbarItem,  DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar} from "@nextui-org/react";

import "./style.css";
const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Home",
    "About",
    "Skills",
    "Services",
    "Projects",
    "Contact"

  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden float-right"
        />
        <NavbarBrand>
        <Link
            className="cursor-pointer flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
            to="homee"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <span className="ark ml-20 text-3xl">Arkajyoti</span>
          </Link>



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
        </NavbarBrand>
      </NavbarContent>

      {/* <NavbarContent className="md:ml-auto  items-center mr-10 pb-1 text-base justify-center"> */}
      <NavbarContent className="hidden sm:flex gap-4"  justify="center">
        <NavbarItem>
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
        </NavbarItem>
        <NavbarItem isActive>
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
        </NavbarItem>
        <NavbarItem>
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
        </NavbarItem>
        <NavbarItem>
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
        </NavbarItem>
        <NavbarItem>
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
        </NavbarItem>
        <NavbarItem>
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
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        



      {/* <header id="nav" className="text-gray-600 body-font">
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
      </header> */}














     
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default Nav;
