import React from "react";
import "./style.css";
import arka2 from "./images/arka2.png";
const Footer = () => {
  return (
    <div>
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <img src={arka2} className="arka2" alt="arka" />
          </a>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            Copyright© 2024; Designed & Developed by Arkajyoti Roy
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
