import React from "react";
import "./style.css";

import admit from "./Download/admit.pdf";

const About = () => {
  return (
    <div id="about">
      <section className="text-gray-600 body-font">
        <div className="justify-center text-center">
          <h1 className="text-5xl font-semibold text-black">About Me</h1>
          <h3>My introduction</h3>
        </div>
        <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://dummyimage.com/720x600"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <div className="bg-white py-6 sm:py-8 lg:py-12">
              <div className="mx-auto max-w-screen-xl px-4 md:px-8">
                <div className="flex flex-row gap-4 md:flex-rows-3 lg:flex-rows-4 lg:gap-8">
                  <div className="flex flex-col items-center rounded-lg bg-gray-100 p-4 lg:p-8">
                    <div>
                      <svg
                        height="2.2em"
                        viewBox="0 0 1024 1024"
                        xmlns="http://www.w3.org/2000/svg"
                        xml:space="preserve"
                      >
                        <path
                          d="M922.5 229.5c-24.32-24.34-54.49-36.84-90.5-37.5H704v-64c-.68-17.98-7.02-32.98-19.01-44.99S658.01 64.66 640 64H384c-17.98.68-32.98 7.02-44.99 19.01S320.66 110 320 128v64H192c-35.99.68-66.16 13.18-90.5 37.5C77.16 253.82 64.66 283.99 64 320v448c.68 35.99 13.18 66.16 37.5 90.5s54.49 36.84 90.5 37.5h640c35.99-.68 66.16-13.18 90.5-37.5s36.84-54.49 37.5-90.5V320c-.68-35.99-13.18-66.16-37.5-90.5zM384 128h256v64H384v-64zM256 832h-64c-17.98-.68-32.98-7.02-44.99-19.01S128.66 786.01 128 768V448h128v384zm448 0H320V448h384v384zm192-64c-.68 17.98-7.02 32.98-19.01 44.99S850.01 831.34 832 832h-64V448h128v320zm0-384H128v-64c.69-17.98 7.02-32.98 19.01-44.99S173.99 256.66 192 256h640c17.98.69 32.98 7.02 44.99 19.01S895.34 301.99 896 320v64z"
                          fill="#000000"
                        />
                      </svg>
                    </div>
                    <div>
                      <h1 className="text-xl font-semibold text-black">
                        Experience
                      </h1>
                    </div>
                    <div>
                      <p>3 + Years</p>
                    </div>
                  </div>

                  <div className="flex flex-col items-center rounded-lg bg-gray-100 p-4 lg:p-8">
                    <div>
                      <svg
                        fill="#000000"
                        height="2.2em"
                        viewBox="0 0 36 36"
                        version="1.1"
                        preserveAspectRatio="xMidYMid meet"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                      >
                        <title>tasks-outline-badged</title>
                        <path
                          className="clr-i-outline--badged clr-i-outline-path-1--badged"
                          d="M12.72,19A1,1,0,0,0,11.3,20.4l5.36,5.36L26.71,15.71a1,1,0,0,0-1.41-1.41l-8.64,8.64Z"
                        ></path>
                        <path
                          class="clr-i-outline--badged clr-i-outline-path-2--badged"
                          d="M23.13,9H12V7.33A.33.33,0,0,1,12.33,7H16V6a2,2,0,0,1,4,0V7h2.57a7.52,7.52,0,0,1-.07-1,7.52,7.52,0,0,1,.07-1h-.7a4,4,0,0,0-7.75,0H12.33A2.34,2.34,0,0,0,10,7.33V11H24.42A7.5,7.5,0,0,1,23.13,9Z"
                        ></path>
                        <path
                          class="clr-i-outline--badged clr-i-outline-path-3--badged"
                          d="M30,13.5a7.52,7.52,0,0,1-1-.07V32H7V7H9V5H7A1.75,1.75,0,0,0,5,6.69V32.31A1.7,1.7,0,0,0,6.71,34H29.29A1.7,1.7,0,0,0,31,32.31V13.43A7.52,7.52,0,0,1,30,13.5Z"
                        ></path>
                        <circle
                          class="clr-i-outline--badged clr-i-outline-path-4--badged clr-i-badge"
                          cx="30"
                          cy="6"
                          r="5"
                        ></circle>
                        <rect
                          x="0"
                          y="0"
                          width="36"
                          height="36"
                          fill-opacity="0"
                        />
                      </svg>
                    </div>
                    <div>
                      <h1 className="text-xl font-semibold text-black">
                        Completed
                      </h1>
                    </div>
                    <div>
                      <p>5 + Projects</p>
                    </div>
                  </div>

                  <div
                    style={{ paddingTop: "-50px" }}
                    className="flex flex-col items-center rounded-lg bg-gray-100 p-4 lg:p-8"
                  >
                    <div>
                      <svg
                        height="2.6em"
                        viewBox="0 0 64 64"
                        xmlns="http://www.w3.org/2000/svg"
                        stroke-width="3"
                        stroke="#000000"
                        fill="none"
                      >
                        <path d="M50.28,23.29V43.94a1.74,1.74,0,0,1-1.74,1.74H11.3a1.74,1.74,0,0,1-1.74-1.74V17.85a1.74,1.74,0,0,1,1.74-1.74H37.07" />
                        <line x1="9.56" y1="39.19" x2="50.28" y2="39.19" />
                        <path d="M22.23,52.54a5.72,5.72,0,0,0,3-6.86" />
                        <path d="M38.38,52.54a5.73,5.73,0,0,1-3.05-6.86" />
                        <line
                          x1="17.45"
                          y1="52.54"
                          x2="42.39"
                          y2="52.54"
                          stroke-linecap="round"
                        />
                        <circle cx="22.13" cy="25.21" r="3.53" />
                        <path d="M29.28,39.19a7.15,7.15,0,0,0-7.15-7.14h0A7.14,7.14,0,0,0,15,39.19Z" />
                        <path d="M53.58,23.29h-8.4L40.1,26.88a.09.09,0,0,1-.14-.07l0-3.52H37.93a.87.87,0,0,1-.86-.86V12.32a.86.86,0,0,1,.86-.86H53.58a.86.86,0,0,1,.86.86V22.43A.87.87,0,0,1,53.58,23.29Z" />
                      </svg>
                    </div>
                    <div>
                      <h1 className="text-xl font-semibold text-black">
'Activated'
                     
                      </h1>
                    </div>
                    <div>
                      <p>Online 24/7</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <p className="mb-8 leading-relaxed abto">
              I am a full-stack developer primarily focused on website
              development. I have successfully finished over 5 projects
              independently as well as collaboratively with teams. I hold a
              3-year diploma in Computer Science and am currently pursuing a
              B.Tech degree. My passion lies in the field of development, where
              I strive to create innovative projects continuously.
            </p>
            <div className="flex justify-center">
              <a href={admit} download="admit.pdf">
                {" "}
                <button className="inline-flex text-white rounded-lg bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-900 text-lg">
                  Download CV{" "}
                  <svg
                    className="cvsvg"
                    height="1.2em"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0" />

                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />

                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M9 17H15M9 13H15M9 9H10M13 3H8.2C7.0799 3 6.51984 3 6.09202 3.21799C5.71569 3.40973 5.40973 3.71569 5.21799 4.09202C5 4.51984 5 5.0799 5 6.2V17.8C5 18.9201 5 19.4802 5.21799 19.908C5.40973 20.2843 5.71569 20.5903 6.09202 20.782C6.51984 21 7.0799 21 8.2 21H15.8C16.9201 21 17.4802 21 17.908 20.782C18.2843 20.5903 18.5903 20.2843 18.782 19.908C19 19.4802 19 18.9201 19 17.8V9M13 3L19 9M13 3V7.4C13 7.96005 13 8.24008 13.109 8.45399C13.2049 8.64215 13.3578 8.79513 13.546 8.89101C13.7599 9 14.0399 9 14.6 9H19"
                        stroke="#ffffff"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />{" "}
                    </g>
                  </svg>
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
