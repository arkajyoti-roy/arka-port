/* eslint-disable react/no-unknown-property */
// import React from "react";
import arka2 from "./images/arka2.png";
import { Link } from "react-scroll";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
// import {AcmeLogo} from "./AcmeLogo.jsx";

// import {Navbar, NavbarBrand, NavbarContent, NavbarItem,  DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar} from "@nextui-org/react";

import "./style.css";
const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  // const menuItems = [
  //   "Home",
  //   "About",
  //   "Skills",
  //   "Services",
  //   "Projects",
  //   "Contact"

  // ];

  return (
    <Navbar className="shadow-md" onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent >

        <NavbarBrand>
          <Link
            to="homee"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="flex mb-4 md:mb-0 arka22"
          >
            <div className="flex flex-row float-right">
              <img src={arka2} style={{ display: "none" }} alt="" />
              <img src={arka2} alt="arka" />
            </div>
          </Link>

          <Link
            className="cursor-pointer flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
            to="homee"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <span className="ark  text-3xl">Arkajyoti</span>
          </Link>
        </NavbarBrand>

       
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden "
        />
      </NavbarContent>

      <NavbarContent className="nv hidden sm:flex gap-4 right-80">
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
      <NavbarContent justify="end"></NavbarContent>
      <NavbarMenu>
        {/* {menuItems.map((item, index) => (
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
        ))} */}

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
      </NavbarMenu>
    </Navbar>
  );
};

export default Nav;
