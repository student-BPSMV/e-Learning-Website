import React from "react";
import { Link } from "react-router-dom";

function Courses() {
  return (
    <section className="font-[Nunito]">
      <div className="-mt-5 relative top-26 mb-27">
        <div className="absolute top-0 left-0 z-10 bg-[rgb(24,29,57)] w-full h-[360px] opacity-70"></div>
        <div
          className="container relative"
          style={{
            backgroundImage: "url('/imgi_1_carousel-1.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "360px",
            width: "100%",
            maxWidth: "1410px",
            margin: "0 auto",
          }}
        >
          <div className="flex justify-center gap-100 items-center">
            <div className="relative z-30 -mt-13 pt-40 pb-40 text-white">
              <h1 className="text-7xl font-extrabold" data-aos="fade-down">
                Courses
              </h1>
              <ul className="flex justify-center items-center gap-2 text-xl pt-4">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>/</li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>/</li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <section class="body-font">
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
    </section>
  );
}

export default Courses;
