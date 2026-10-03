import React from "react";
import Testimonials from "./Testimonials";

function HeroSection() {
  return (
    <section className="font-[Nunito]">
      {/* Hero Section */}
      <div className="-mt-5 relative">
        <div className="absolute top-0 left-0 z-10 bg-[rgb(24,29,57)] w-full h-[800px] opacity-70"></div>
        <div
          className="container relative"
          style={{
            backgroundImage: "url('/imgi_1_carousel-1.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "800px",
            width: "100%",
            maxWidth: "1410px",
            margin: "0 auto",
          }}
        >
          <div className="flex justify-start gap-100 items-center">
            <div className="relative z-30 -ml-20 mt-[16px] text-left ml-24 pt-40 pb-40">
              <h5 className="text-[#06BBCC] font-medium tracking-widest text-2xl">
                BEST ONLINE COURSES
              </h5>

              <h1
                className="text-white text-7xl font-bold mt-3 leading-tight"
                data-aos="fade-down"
              >
                The Best Online <br /> Learning Platform
              </h1>

              <p className="text-white text-2xl mt-6 leading-9">
                Discover thousands of courses from top instructors around the
                world. <br /> Learn at your own pace and unlock new
                opportunities for growth.
              </p>

              <div className="mt-9 flex justify-start gap-6 text-lg font-medium">
                <button
                  className="bg-[#06BBCC] text-white px-16 py-5 cursor-pointer"
                  data-aos="slide-right"
                >
                  Read More
                </button>
                <button
                  className="bg-white text-black px-16 py-5 cursor-pointer"
                  data-aos="slide-left"
                >
                  Join Now
                </button>
              </div>
            </div>

            <div className="relative z-30 pt-40 pb-40 flex flex-col justify-center items-center gap-6 text-white text-3xl">
              <i className="fa-solid fa-angle-left cursor-pointer border-1 border-white px-2 py-2"></i>
              <i className="fa-solid fa-angle-right cursor-pointer border-1 border-white px-2 py-2"></i>
            </div>
          </div>
        </div>
      </div>

      {/* //Features section */}

      <div>
        <section class="text-gray-600 body-font">
          <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-wrap -m-4 text-center">
              <div
                class="p-4 md:w-1/4 sm:w-1/2 w-full cursor-pointer"
                data-aos="slide-up"
              >
                <div class="bg-[#f0fbfc]  px-6 py-10 transition duration-300 transform hover:bg-[#06bbcc] hover:-translate-y-4 group">
                  <i class="fa-solid fa-graduation-cap text-5xl text-[#06bbcc] transition duration-300 group-hover:text-white -mt-2"></i>
                  <h2 class="title-font font-bold text-2xl text-black leading-18 mt-1 transition duration-300 group-hover:text-white">
                    Skilled Instructors
                  </h2>
                  <p class="leading-relaxed text-lg font-normal -mt-1 transition duration-300 group-hover:text-white">
                    Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                    amet diam
                  </p>
                </div>
              </div>
              <div
                class="p-4 md:w-1/4 sm:w-1/2 w-full cursor-pointer"
                data-aos="slide-up"
              >
                <div class="bg-[#f0fbfc]  px-6 py-10 transition duration-300 transform hover:bg-[#06bbcc] hover:-translate-y-4 group">
                  <i class="fa-solid fa-globe text-5xl text-[#06bbcc] transition duration-300 group-hover:text-white -mt-2"></i>
                  <h2 class="title-font font-bold text-2xl text-black leading-18 mt-1 transition duration-300 group-hover:text-white">
                    Online Classes
                  </h2>
                  <p class="leading-relaxed text-lg font-normal -mt-1  transition duration-300 group-hover:text-white">
                    Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                    amet diam
                  </p>
                </div>
              </div>
              <div
                class="p-4 md:w-1/4 sm:w-1/2 w-full cursor-pointer"
                data-aos="slide-up"
              >
                <div class="bg-[#f0fbfc]  px-6 py-10 transition duration-300 transform hover:bg-[#06bbcc] hover:-translate-y-4 group">
                  <i class="fa-solid fa-house text-5xl text-[#06bbcc] transition duration-300 group-hover:text-white -mt-2"></i>
                  <h2 class="title-font font-bold text-2xl text-black leading-18 mt-1 transition duration-300 group-hover:text-white">
                    Home Projects
                  </h2>
                  <p class="leading-relaxed text-lg font-normal -mt-1 transition duration-300 group-hover:text-white">
                    Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                    amet diam
                  </p>
                </div>
              </div>
              <div
                class="p-4 md:w-1/4 sm:w-1/2 w-full cursor-pointer"
                data-aos="slide-up"
              >
                <div class="bg-[#f0fbfc]  px-6 py-10 transition duration-300 transform hover:bg-[#06bbcc] hover:-translate-y-4 group">
                  <i class="fa-solid fa-book-open text-5xl text-[#06bbcc] transition duration-300 group-hover:text-white -mt-2"></i>
                  <h2 class="title-font font-bold text-2xl text-black leading-18 mt-1 transition duration-300 group-hover:text-white">
                    Book Library
                  </h2>
                  <p class="leading-relaxed text-lg font-normal -mt-1 transition duration-300 group-hover:text-white">
                    Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                    amet diam
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Welcome page */}

      <div className="-mt-20">
        <section class="text-gray-600 body-font overflow-hidden">
          <div class="container px-5 py-24 mx-auto">
            <div class="lg:w-5/5 mx-auto flex flex-wrap">
              <img
                alt="ecommerce"
                class="lg:w-1/2 w-full h-[540px] object-cover object-center"
                src="imgi_3_about.jpg"
                data-aos="slide-up"
              />
              <div
                class="lg:w-1/2 w-full lg:pl-10 lg:py-0 lg:mt-0"
                data-aos="slide-up"
              >
                <h2 class="text-lg font-bold text-[#06BBCC] flex gap-5">
                  ABOUT US
                  <div className="flex flex-col justify-center text-left items-start gap-2">
                    <div className="border-1 w-[44px] h-[2px] bg-[#06BBCC]"></div>
                    <div className="border-1 w-[55px] h-[2px] bg-[#06BBCC]"></div>
                  </div>
                </h2>
                <h1 class="text-gray-900 text-5xl font-bold mb-9 mt-3">
                  Welcome to eLEARNING
                </h1>

                <p class="text-lg font-sm">
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                  Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit.
                  <br></br>
                  <br></br>
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                  Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                  sed stet lorem sit clita duo justo magna dolore erat amet
                </p>
                <div className="flex justify-start items-start gap-x-20 text-lg mt-7 ">
                  {/* Left Column */}
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <i className="fa-solid fa-arrow-right text-[#06BBCC]"></i>
                      Skilled Instructors
                    </li>
                    <li className="flex items-center gap-2">
                      <i className="fa-solid fa-arrow-right text-[#06BBCC]"></i>
                      International Certificate
                    </li>
                    <li className="flex items-center gap-2">
                      <i className="fa-solid fa-arrow-right text-[#06BBCC]"></i>
                      Online Classes
                    </li>
                  </ul>

                  {/* Right Column */}
                  <ul className="space-y-3">
                    <li className="flex items-center gap-2">
                      <i className="fa-solid fa-arrow-right text-[#06BBCC]"></i>
                      Online Classes
                    </li>
                    <li className="flex items-center gap-2">
                      <i className="fa-solid fa-arrow-right text-[#06BBCC]"></i>
                      Skilled Instructors
                    </li>
                    <li className="flex items-center gap-2">
                      <i className="fa-solid fa-arrow-right text-[#06BBCC]"></i>
                      International Certificate
                    </li>
                  </ul>
                </div>

                <div class="flex mt-10">
                  <button class="flex text-lg text-white bg-[#06BBCC] border-0 py-5 px-15">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Gallery Section */}

      <section class="body-font -mt-25">
        <div class="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex flex-col justify-center items-center gap-2 text-center w-full mb-16">
            <div className="flex flex-col justify-center text-left items-start gap-2">
              <div className="flex gap-5">
                <div
                  className="flex flex-col justify-center text-left items-end gap-2"
                  data-aos="slide-up"
                >
                  <div className="w-[44px] h-[2px] bg-[#06BBCC]"></div>
                  <div className="w-[60px] h-[3px] bg-[#06BBCC]"></div>
                </div>
                <h6
                  className="text-lg font-bold text-[#06BBCC]"
                  data-aos="slide-up"
                >
                  CATEGORIES
                </h6>
                <div
                  className="flex flex-col justify-center text-left items-start gap-2"
                  data-aos="slide-up"
                >
                  <div className=" w-[44px] h-[2px] bg-[#06BBCC]"></div>
                  <div className=" w-[60px] h-[3px] bg-[#06BBCC]"></div>
                </div>
              </div>
            </div>

            <h1 className="text-5xl font-bold -mb-1" data-aos="slide-up">
              Courses Categories
            </h1>
          </div>
          <div class="flex flex-wrap md:-m-2 -m-1">
            <div class="flex flex-wrap w-1/2">
              <div class="md:p-2 p-1 w-2/2 h-[300px] relative overflow-hidden cursor-pointer">
                <img
                  alt="gallery"
                  class="w-full object-cover h-full object-center block transform transition-transform duration-500 hover:scale-110"
                  src="imgi_4_cat-1.jpg"
                  data-aos="fade-up"
                />
                <div className="absolute bottom-3 right-3 z-10 w-[155px] h-[75px] bg-white flex flex-col justify-center items-center">
                  <h5 className="text-2xl font-bold">Web Design</h5>
                  <p className="text-[#06BBCC] font-medium">49 Courses</p>
                </div>
              </div>
              <div class="md:p-2 p-1 w-1/2 h-[330px] relative overflow-hidden cursor-pointer">
                <img
                  alt="gallery"
                  class="w-full h-full object-cover object-center block transform transition-transform duration-500 hover:scale-110"
                  src="imgi_5_cat-2.jpg"
                  data-aos="fade-up"
                />
                <div className="absolute bottom-3 right-3 z-10 w-[190px] h-[75px] bg-white flex flex-col justify-center items-center">
                  <h5 className="text-2xl font-bold">Graphic Design</h5>
                  <p className="text-[#06BBCC] font-medium">49 Courses</p>
                </div>
              </div>
              <div class="md:p-2 p-1 w-1/2 h-[330px] relative overflow-hidden cursor-pointer">
                <img
                  alt="gallery"
                  class="w-full h-full object-cover object-center block transform transition-transform duration-500 hover:scale-110"
                  src="imgi_6_cat-3.jpg"
                  data-aos="fade-up"
                />
                <div className="absolute bottom-3 right-3 z-10 w-[175px] h-[75px] bg-white flex flex-col justify-center items-center cursor-pointer">
                  <h5 className="text-2xl font-bold">Video Editing</h5>
                  <p className="text-[#06BBCC] font-medium">49 Courses</p>
                </div>
              </div>
            </div>
            <div class="flex flex-wrap w-1/2 relative overflow-hidden cursor-pointer">
              <div class="md:p-2 p-1 w-full">
                <img
                  alt="gallery"
                  class="w-full h-full object-cover object-center block transform transition-transform duration-500 hover:scale-110"
                  src="imgi_7_cat-4.jpg"
                  data-aos="fade-up"
                />
                <div className="absolute bottom-3 right-3 z-10 w-[220px] h-[75px] bg-white flex flex-col justify-center items-center">
                  <h5 className="text-2xl font-bold">Online Marketing</h5>
                  <p className="text-[#06BBCC] font-medium">49 Courses</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coursees Section */}

      <div className="flex flex-col justify-center items-center gap-2 text-center w-full mb-16 mt-5">
        <div className="flex flex-col justify-center text-left items-start gap-2">
          <div className="flex gap-5">
            <div
              className="flex flex-col justify-center text-left items-end gap-2"
              data-aos="slide-up"
            >
              <div className="w-[44px] h-[2px] bg-[#06BBCC]"></div>
              <div className="w-[60px] h-[3px] bg-[#06BBCC]"></div>
            </div>
            <h6
              className="text-lg font-bold text-[#06BBCC]"
              data-aos="slide-up"
            >
              COURSES
            </h6>
            <div
              className="flex flex-col justify-center text-left items-start gap-2"
              data-aos="slide-up"
            >
              <div className=" w-[44px] h-[2px] bg-[#06BBCC]"></div>
              <div className=" w-[60px] h-[3px] bg-[#06BBCC]"></div>
            </div>
          </div>
        </div>

        <h1 className="text-5xl font-bold -mb-1" data-aos="slide-up">
          Popular Courses
        </h1>
      </div>
      <section class="text-gray-600 body-font -mt-25">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4">
            <div class="p-4 md:w-1/3" data-aos="fade-up">
              <div class="relative h-full bg-[#f0fbfc] border-opacity-60 overflow-hidden text-center text-black">
                <div className="absolute top-45 left-26 w-[200px] h-[35px] flex gap-1 bg-[#06BBCC] text-white rounded-full justify-center items-center z-10">
                  <p>
                    Read More{" "}
                    <span className="border-l-2 border-white pl-3">
                      {" "}
                      Join Now
                    </span>
                  </p>
                </div>
                <img
                  class="lg:h-60 md:h-36 w-full object-cover object-center transform transition-transform duration-500 hover:scale-110"
                  src="imgi_8_course-1.jpg"
                  alt="blog"
                />
                <div class="p-6">
                  <h3 className="text-3xl font-bold">$149.00</h3>
                  <div className="flex justify-center items-center gap-2 text-[#06BBCC] mt-2">
                    <div className="flex justify-center items-center gap-1 text-[#06BBCC]">
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                    </div>
                    <p className="text-gray-600">(123)</p>
                  </div>
                  <h5 className="text-2xl font-bold mt-3">
                    Web Design & Development Course for Beginners
                  </h5>
                  <div className="flex justify-center items-center gap-2 text-[#06BBCC] mt-2 border-t-1 border-t-gray-400 mt-6">
                    <div className="flex justify-center items-center gap-1 text-[#06BBCC] mt-2 border-r-1 border-r-gray-400 pr-2">
                      <i class="fa-solid fa-user-tie"></i>
                      <p className="text-gray-600">John Doe</p>
                    </div>
                    <div className="flex justify-center items-center gap-1 text-[#06BBCC] mt-2 border-r-1 border-r-gray-400 pr-2">
                      <i class="fa-solid fa-clock"></i>
                      <p className="text-gray-600">1.59 Hrs</p>
                    </div>
                    <div className="flex justify-center items-center gap-1 text-[#06BBCC] mt-2">
                      <i class="fa-solid fa-user"></i>
                      <p className="text-gray-600">30 Students</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="p-4 md:w-1/3" data-aos="fade-up" data-aos-delay="200">
              <div class="relative h-full bg-[#f0fbfc] border-opacity-60 overflow-hidden text-black text-center">
                <div className="absolute top-45 left-26 w-[200px] h-[35px] flex gap-1 bg-[#06BBCC] text-white rounded-full justify-center items-center z-10">
                  <p>
                    Read More{" "}
                    <span className="border-l-2 border-white pl-3">
                      {" "}
                      Join Now
                    </span>
                  </p>
                </div>
                <img
                  class="lg:h-60 md:h-36 w-full object-cover object-center transform transition-transform duration-500 hover:scale-110"
                  src="imgi_9_course-2.jpg"
                  alt="blog"
                />
                <div class="p-6">
                  <h3 className="text-3xl font-bold">$149.00</h3>
                  <div className="flex justify-center items-center gap-2 text-[#06BBCC] mt-2">
                    <div className="flex justify-center items-center gap-1 text-[#06BBCC]">
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                    </div>
                    <p className="text-gray-600">(123)</p>
                  </div>
                  <h5 className="text-2xl font-bold mt-3">
                    Web Design & Development Course for Beginners
                  </h5>
                  <div className="flex justify-center items-center gap-2 text-[#06BBCC] mt-2 border-t-1 border-t-gray-400 mt-6">
                    <div className="flex justify-center items-center gap-1 text-[#06BBCC] mt-2 border-r-1 border-r-gray-400 pr-2">
                      <i class="fa-solid fa-user-tie"></i>
                      <p className="text-gray-600">John Doe</p>
                    </div>
                    <div className="flex justify-center items-center gap-1 text-[#06BBCC] mt-2 border-r-1 border-r-gray-400 pr-2">
                      <i class="fa-solid fa-clock"></i>
                      <p className="text-gray-600">1.59 Hrs</p>
                    </div>
                    <div className="flex justify-center items-center gap-1 text-[#06BBCC] mt-2">
                      <i class="fa-solid fa-user"></i>
                      <p className="text-gray-600">30 Students</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="p-4 md:w-1/3" data-aos="fade-up" data-aos-delay="400">
              <div class="relative h-full bg-[#f0fbfc] border-opacity-60 overflow-hidden text-center text-black">
                <div className="absolute top-45 left-26 w-[200px] h-[35px] flex gap-1 bg-[#06BBCC] text-white rounded-full justify-center items-center z-10">
                  <p>
                    Read More{" "}
                    <span className="border-l-2 border-white pl-3">
                      {" "}
                      Join Now
                    </span>
                  </p>
                </div>
                <img
                  class="lg:h-60 md:h-36 w-full object-cover object-center transform transition-transform duration-500 hover:scale-110"
                  src="imgi_10_course-3.jpg"
                  alt="blog"
                />
                <div class="p-6">
                  <h3 className="text-3xl font-bold">$149.00</h3>
                  <div className="flex justify-center items-center gap-2 text-[#06BBCC] mt-2">
                    <div className="flex justify-center items-center gap-1 text-[#06BBCC]">
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                      <i class="fa-solid fa-star"></i>
                    </div>
                    <p className="text-gray-600">(123)</p>
                  </div>
                  <h5 className="text-2xl font-bold mt-3">
                    Web Design & Development Course for Beginners
                  </h5>
                  <div className="flex justify-center items-center gap-2 text-[#06BBCC] mt-2 border-t-1 border-t-gray-400 mt-6">
                    <div className="flex justify-center items-center gap-1 text-[#06BBCC] mt-2 border-r-1 border-r-gray-400 pr-2">
                      <i class="fa-solid fa-user-tie"></i>
                      <p className="text-gray-600">John Doe</p>
                    </div>
                    <div className="flex justify-center items-center gap-1 text-[#06BBCC] mt-2 border-r-1 border-r-gray-400 pr-2">
                      <i class="fa-solid fa-clock"></i>
                      <p className="text-gray-600">1.59 Hrs</p>
                    </div>
                    <div className="flex justify-center items-center gap-1 text-[#06BBCC] mt-2">
                      <i class="fa-solid fa-user"></i>
                      <p className="text-gray-600">30 Students</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instructor Section */}

      <div className="flex flex-col justify-center items-center gap-2 text-center w-full mb-16 -mt-2">
        <div className="flex flex-col justify-center text-left items-start gap-2">
          <div className="flex gap-5">
            <div
              className="flex flex-col justify-center text-left items-end gap-2"
              data-aos="slide-up"
            >
              <div className="w-[44px] h-[3px] bg-[#06BBCC]"></div>
              <div className="w-[60px] h-[3px] bg-[#06BBCC]"></div>
            </div>
            <h6
              className="text-lg font-bold text-[#06BBCC]"
              data-aos="slide-up"
            >
              INSTRUCTORS
            </h6>
            <div
              className="flex flex-col justify-center text-left items-start gap-2"
              data-aos="slide-up"
            >
              <div className=" w-[44px] h-[3px] bg-[#06BBCC]"></div>
              <div className=" w-[60px] h-[3px] bg-[#06BBCC]"></div>
            </div>
          </div>
        </div>

        <h1 className="text-5xl font-bold -mb-1" data-aos="slide-up">
          Expert Instructors
        </h1>
      </div>
      <section className="text-gray-600 body-font -mt-20">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div
              className="p-4 md:w-1/4"
              data-aos="slide-up"
              data-aos-delay="50"
            >
              <div className="h-full border-opacity-60 overflow-hidden relative">
                <img
                  className="lg:h-70 md:h-36 w-full object-cover object-center transform transition-transform duration-500 hover:scale-110"
                  src="imgi_11_team-1.jpg"
                  alt="blog"
                />
                <div className="absolute top-64 left-17 w-[145px] h-[58px] flex gap-2 bg-[#f0fbfc] text-white justify-center items-center z-10">
                  <div className="bg-[#06BBCC] p-2">
                    <i class="fa-brands fa-facebook-f"></i>
                  </div>
                  <div className="bg-[#06BBCC] p-2 ">
                    <i class="fa-brands fa-twitter"></i>
                  </div>
                  <div className="bg-[#06BBCC] p-2 ">
                    <i class="fa-brands fa-instagram"></i>
                  </div>
                </div>
                <div className="p-6 text-center bg-[#f0fbfc] pt-10">
                  <h2 className="text-2xl font-bold text-black mb-1">
                    Instructor Name
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Designation
                  </h1>
                </div>
              </div>
            </div>
            <div
              className="p-4 md:w-1/4"
              data-aos="slide-up"
              data-aos-delay="70"
            >
              <div className="h-full border-opacity-60 overflow-hidden relative">
                <img
                  className="lg:h-70 md:h-36 w-full object-cover object-center transform transition-transform duration-500 hover:scale-110"
                  src="imgi_12_team-2.jpg"
                  alt="blog"
                />
                <div className="absolute top-64 left-17 w-[145px] h-[58px] flex gap-2 bg-[#f0fbfc] text-white justify-center items-center z-10">
                  <div className="bg-[#06BBCC] p-2">
                    <i class="fa-brands fa-facebook-f"></i>
                  </div>
                  <div className="bg-[#06BBCC] p-2 ">
                    <i class="fa-brands fa-twitter"></i>
                  </div>
                  <div className="bg-[#06BBCC] p-2 ">
                    <i class="fa-brands fa-instagram"></i>
                  </div>
                </div>
                <div className="p-6 text-center bg-[#f0fbfc] pt-10">
                  <h2 className="text-2xl font-bold text-black mb-1">
                    Instructor Name
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Designation
                  </h1>
                </div>
              </div>
            </div>
            <div
              className="p-4 md:w-1/4"
              data-aos="slide-up"
              data-aos-delay="90"
            >
              <div className="h-full border-opacity-60 overflow-hidden relative">
                <img
                  className="lg:h-70 md:h-36 w-full object-cover object-center transform transition-transform duration-500 hover:scale-110"
                  src="imgi_13_team-3.jpg"
                  alt="blog"
                />
                <div className="absolute top-64 left-17 w-[145px] h-[58px] flex gap-2 bg-[#f0fbfc] text-white justify-center items-center z-10">
                  <div className="bg-[#06BBCC] p-2">
                    <i class="fa-brands fa-facebook-f"></i>
                  </div>
                  <div className="bg-[#06BBCC] p-2 ">
                    <i class="fa-brands fa-twitter"></i>
                  </div>
                  <div className="bg-[#06BBCC] p-2 ">
                    <i class="fa-brands fa-instagram"></i>
                  </div>
                </div>
                <div className="p-6 text-center bg-[#f0fbfc] pt-10">
                  <h2 className="text-2xl font-bold text-black mb-1">
                    Instructor Name
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Designation
                  </h1>
                </div>
              </div>
            </div>
            <div
              className="p-4 md:w-1/4"
              data-aos="slide-up"
              data-aos-delay="110"
            >
              <div className="h-full border-opacity-60 overflow-hidden relative">
                <img
                  className="lg:h-70 md:h-36 w-full object-cover object-center transform transition-transform duration-500 hover:scale-110"
                  src="imgi_14_team-4.jpg"
                  alt="blog"
                />
                <div className="absolute top-64 left-17 w-[145px] h-[58px] flex gap-2 bg-[#f0fbfc] text-white justify-center items-center z-10">
                  <div className="bg-[#06BBCC] p-2">
                    <i class="fa-brands fa-facebook-f"></i>
                  </div>
                  <div className="bg-[#06BBCC] p-2 ">
                    <i class="fa-brands fa-twitter"></i>
                  </div>
                  <div className="bg-[#06BBCC] p-2 ">
                    <i class="fa-brands fa-instagram"></i>
                  </div>
                </div>
                <div className="p-6 text-center bg-[#f0fbfc] pt-10">
                  <h2 className="text-2xl font-bold text-black mb-1">
                    Instructor Name
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    Designation
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Testimonials></Testimonials>
    </section>
  );
}

export default HeroSection;
