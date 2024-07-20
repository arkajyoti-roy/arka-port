import React from "react";
import workstream from "./images/workstream.png";
import JobHunt from "./images/jobhunt.png";
import Ambition from "./images/ambition.png";
import PassMan from "./images/passman.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/scrollbar";

import "./style.css";
const Projects = () => {
  return (
    <div id="projects">
      <div className="justify-center text-center">
        <h1 className="text-5xl font-semibold text-black">Projects</h1>
        <h3>My recent work</h3>
      </div>

      <br />
      <br />
      <br />
      
      <br />
      <div className="pro">
      <Swiper
        slidesPerView={3}
        spaceBetween={0}
        freeMode={true}
        // navigation= {true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        loop={true}
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          480: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          1020: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        
          <SwiperSlide className="pl-1">
            <div className=" flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <div className="relative mx-4 h-40  rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r">
                <img
                  style={{ width: "100%", height: "100%", borderRadius: "8px" }}
                  src="./images/jobhunt.png"
                  alt=""
                />
              </div>
              <div className="p-6">
                <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                  Jobhunt
                </h5>
                <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  felis ligula.
                </p>
              </div>
              <div className="p-6 pt-0 flex flex-row gap-8">
                <a href="https://github.com/arkajyoti-roy/JobHunt" target="_blank">
                  {" "}
                  <button
                    type="button"
                    className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  >
                    GitHub
                  </button>
                </a>
              <a href="" target="_blank">  <button
                  type="button"
                  className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                >
                  Live
                </button>
                </a>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="pl-1">
            <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <div className="relative mx-4 h-40  rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r">
                <img
                  style={{ width: "100%", height: "100%", borderRadius: "8px" }}
                  src="./images/ambition.png"
                  alt=""
                />
              </div>
              <div className="p-6">
                <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                  Ambition
                </h5>
                <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  felis ligula.
                </p>
              </div>
              <div className="p-6 pt-0 flex flex-row gap-8">
               <a href="https://github.com/arkajyoti-roy/Ambition" target="_blank"> <button
                  data-ripple-light="true"
                  type="button"
                  className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                >
                  GitHub
                </button>
                </a>
              <a href="https://arkajyoti-roy.github.io/Ambition/" target="_blank">  <button
                  data-ripple-light="true"
                  type="button"
                  className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                >
                  Live
                </button>
                </a>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="pl-1">
            <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <div className="relative mx-4 h-40  rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r">
                <img
                  style={{ width: "100%", height: "100%", borderRadius: "8px" }}
                  src="./images/workstream.png"
                  alt=""
                />
              </div>
              <div className="p-6">
                <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                  WorkStream
                </h5>
                <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                It's an Private Office Management System Software developed using PHP.
                </p>
              </div>
              <div className="p-6 pt-0 flex flex-row gap-8">
               <a href="https://github.com/arkajyoti-roy/WorkStream" target="_blank"> <button
                  data-ripple-light="true"
                  type="button"
                  className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                >
                  GitHub
                </button>
                </a>
               <a href="https://workstream.arkajyoti.shop/log.php" target="_blank"> <button
                  data-ripple-light="true"
                  type="button"
                  className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                >
                  Live
                </button></a>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="pl-1">
            <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
              <div className="relative mx-4 h-40  rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r">
                <img
                  style={{ width: "100%", height: "100%", borderRadius: "8px" }}
                  src="./images/passman.png"
                  alt=""
                />
              </div>
              <div className="p-6">
                <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                  PassMan
                </h5>
                <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  felis ligula.
                </p>
              </div>
              <div className="p-6 pt-0 flex flex-row gap-8">
              <a href="https://github.com/arkajyoti-roy/PassMan" target="_blank">  <button
                  data-ripple-light="true"
                  type="button"
                  className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                >
                  GitHub
                </button></a>
               <a href="" target="_blank"> <button
                  data-ripple-light="true"
                  type="button"
                  className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                >
                  Live
                </button></a>
              </div>
            </div>
          </SwiperSlide>
       
        <br /><br />
      </Swiper>
      </div>
    </div>
  );
};

export default Projects;
