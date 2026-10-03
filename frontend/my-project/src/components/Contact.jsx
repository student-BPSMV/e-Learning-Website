import React, { useState } from "react";
import { Link } from "react-router-dom";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChanges = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await response.json();
      if (data.success) {
        setForm({ name: "", email: "", subject: "", message: "" });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="font-[Nunito] py-25 mb-30">
      <div className="-mt-5 relative">
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
                Contact
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
                  <Link to="/courses">Courses</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-2 text-center w-full mb-16 mt-25">
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
              {" "}
              CONTACT US
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
          Contact For Any Query
        </h1>
      </div>
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* ================= LEFT SIDE ================= */}
          <div data-aos="slide-up">
            <h5 className="text-2xl font-bold text-[#182039] mb-2">
              Get In Touch
            </h5>

            <p className="text-gray-700 text-lg leading-7 mb-7 font-normal">
              The contact form is currently inactive. Get a functional and
              working contact form with Ajax & PHP in a few minutes. Just copy
              and paste the files, add a little code and you're done.
              <span className="text-[#06BBCC]"> Download Now.</span>
            </p>

            {/* Office */}
            <div className="flex items-center gap-6 mb-6">
              <div className="w-[65px] h-[65px] bg-[#06BBCC] flex justify-center items-center shrink-0">
                <i className="fa-solid fa-location-dot text-white text-xl"></i>
              </div>

              <div>
                <h5 className="text-2xl font-bold text-[#06BBCC] mb-1">
                  Office
                </h5>

                <p className="text-gray-700 text-lg font-semibold">
                  123 Street, New York, USA
                </p>
              </div>
            </div>

            {/* Mobile */}
            <div className="flex items-center gap-6 mb-6">
              <div className="w-[65px] h-[65px] bg-[#06BBCC] flex justify-center items-center shrink-0">
                <i className="fa-solid fa-phone text-white text-xl"></i>
              </div>

              <div>
                <h5 className="text-2xl font-bold text-[#06BBCC] mb-1">
                  Mobile
                </h5>

                <p className="text-gray-700 text-lg font-semibold">
                  +012 345 67890
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-6">
              <div className="w-[65px] h-[65px] bg-[#06BBCC] flex justify-center items-center shrink-0">
                <i className="fa-solid fa-envelope text-white text-xl"></i>
              </div>

              <div>
                <h5 className="text-2xl font-bold text-[#06BBCC] mb-1">
                  Email
                </h5>

                <p className="text-gray-700 text-lg font-semibold">
                  info@example.com
                </p>
              </div>
            </div>
          </div>

          {/* ================= CENTER - MAP ================= */}
          <div className="w-full h-[450px] overflow-hidden" data-aos="slide-up">
            <iframe
              title="Google Map"
              src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=New%20York&ie=UTF8&t=&z=14&iwloc=B&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
            ></iframe>
          </div>

          <div data-aos="slide-up">
            <form className="w-full" onSubmit={handleSubmit}>
              {/* Name + Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                {/* Name */}
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChanges}
                  placeholder="Your Name"
                  className="w-full h-[70px] border border-gray-300 px-5 text-lg text-gray-900 outline-none focus:border-[#06BBCC]"
                />

                {/* Email */}
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChanges}
                  placeholder="Your Email"
                  className="w-full h-[70px] border border-gray-300 px-5 text-lg text-gray-900 outline-none focus:border-[#06BBCC]"
                />
              </div>

              {/* Subject */}
              <div className="mb-4">
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChanges}
                  placeholder="Subject"
                  className="w-full h-[70px] border border-gray-300 px-5 text-lg text-gray-900 outline-none focus:border-[#06BBCC]"
                />
              </div>

              {/* Message */}
              <div className="mb-4">
                <textarea
                  name="message"
                  placeholder="Message"
                  value={form.message}
                  onChange={handleChanges}
                  className="w-full h-[190px] border border-gray-300 px-5 py-5 text-lg text-gray-700 outline-none resize-none focus:border-[#06BBCC]"
                ></textarea>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full h-[60px] bg-[#06BBCC] text-white text-lg font-semibold hover:bg-[#05a8b7] transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
