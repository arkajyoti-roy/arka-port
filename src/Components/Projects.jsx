import React from "react";
import workstream from './images/workstream.png'
import JobHunt from './images/jobhunt.png'
import Ambition from './images/ambition.png'

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

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

      <Swiper
        slidesPerView={3}
        spaceBetween={0}
        freeMode={true}
        // navigation= {true}
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        loop={true}
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          480: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          1020: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        //   className="cheafpa"
      >
        <div className="mx-8">
          <SwiperSlide>
            <div className="card">
              <div className="card-image">
                <img src={workstream} alt="" />
              </div>
              <div className="category"> Workstream </div>
              <div className="heading flex flex-row gap-6 justify-center mt-20">
                <div className="git">
                  <button className="button">
                    <span className="button-content">Github </span>
                  </button>
                </div>
                <div className="live">
                  <button className="button">
                    <span className="button-content">Live </span>
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <div className="card-image">
                <img src={JobHunt} alt="" />
              </div>
              <div className="category"> JobHunt </div>
              <div className="heading flex flex-row gap-6 justify-center mt-20 ">
                <div className="git">
                  <button className="button">
                    <span className="button-content">Github </span>
                  </button>
                </div>
                <div className="live">
                  <button className="button">
                    <span className="button-content">Live </span>
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <div className="card-image"></div>
              <div className="category"> PassMan </div>
              <div className="heading flex flex-row gap-6 justify-center mt-20">
                <div className="git">
                  <button className="button">
                    <span className="button-content">Github </span>
                  </button>
                </div>
                <div className="live">
                  <button className="button">
                    <span className="button-content">Live </span>
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <div className="card-image">
                <img src={Ambition} alt="" />
              </div>
              <div className="category"> Ambition </div>
              <div className="heading flex flex-row gap-6 justify-center mt-20">
                <div className="git">
                  <button className="button">
                    <span className="button-content">Github </span>
                  </button>
                </div>
                <div className="live">
                  <button className="button">
                    <span className="button-content">Live </span>
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
    </div>
  );
};

export default Projects;
