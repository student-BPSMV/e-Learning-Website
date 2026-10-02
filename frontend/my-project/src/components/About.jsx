import React from "react";

function About() {
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
                About
              </h1>
              <ul className="flex justify-center items-center gap-2 text-xl pt-4">
                <li>Home</li>
                <li>/</li>
                <li>Contact</li>
                <li>/</li>
                <li>Courses</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
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
                  <p class="leading-relaxed text-lg font-normal mt-1 transition duration-300 group-hover:text-white">
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
                  <p class="leading-relaxed text-lg font-normal mt-1 transition duration-300 group-hover:text-white">
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
                  <p class="leading-relaxed text-lg font-normal mt-1 transition duration-300 group-hover:text-white">
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
                  <p class="leading-relaxed text-lg font-normal mt-1 transition duration-300 group-hover:text-white">
                    Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                    amet diam
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
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
      <div className="flex flex-col justify-center items-center gap-2 text-center w-full mb-16 mt-5">
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
    </section>
  );
}

export default About;
