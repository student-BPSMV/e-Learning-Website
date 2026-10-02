import React from "react";

function Footer() {
  const galleryImages = [
    "/imgi_5_cat-2.jpg",
    "/imgi_6_cat-3.jpg",
    "/imgi_10_course-3.jpg",
    "/imgi_6_cat-3.jpg",
    "/imgi_10_course-3.jpg",
    "/imgi_5_cat-2.jpg",
  ];

  return (
    <footer className="bg-[#181d38] text-white pl-10 pr-10" data-aos="fade-up">
      <div className="max-w-[1660px] mx-auto px-8 lg:px-10 pt-20 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-14">
          <div>
            <h3 className="text-2xl font-semibold mb-7">Quick Link</h3>

            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="flex items-center gap-3 text-lg hover:text-[#06bbcc] transition"
                >
                  <span>›</span>
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="flex items-center gap-3 text-lg hover:text-[#06bbcc] transition"
                >
                  <span>›</span>
                  Contact Us
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="flex items-center gap-3 text-lg hover:text-[#06bbcc] transition"
                >
                  <span>›</span>
                  Privacy Policy
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="flex items-center gap-3 text-lg     hover:text-[#06bbcc] transition"
                >
                  <span>›</span>
                  Terms & Condition
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="flex items-center gap-3 text-lg hover:text-[#06bbcc] transition"
                >
                  {/* Add chevron icon here */}
                  <span>›</span>
                  FAQs & Help
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-7">Contact</h3>

            <div className="space-y-3">
              <div className="flex items-start gap-5">
                {/* Add location icon here */}
                <span className="text-lg">
                  <i class="fa-solid fa-location-dot"></i>
                </span>

                <p className="text-lg">123 Street, New York, USA</p>
              </div>

              <div className="flex items-center gap-5">
                {/* Add phone icon here */}
                <span className="text-lg">
                  <i class="fa-solid fa-phone-flip"></i>
                </span>

                <p className="text-lg">+012 345 67890</p>
              </div>

              <div className="flex items-center gap-5">
                {/* Add email icon here */}
                <span className="text-lg">
                  <i class="fa-solid fa-envelope"></i>
                </span>

                <p className="text-lg">info@example.com</p>
              </div>
            </div>

            {/* ================= SOCIAL ICONS ================= */}
            <div className="flex gap-2 mt-8">
              <a
                href="#"
                className="w-[50px] h-[50px] text-lg border border-white rounded-full flex items-center justify-center hover:bg-[#06bbcc] hover:border-[#06bbcc] transition"
              >
                <i class="fa-brands fa-twitter"></i>
              </a>

              <a
                href="#"
                className="w-[50px] h-[50px]  text-lg border border-white rounded-full flex items-center justify-center hover:bg-[#06bbcc] hover:border-[#06bbcc] transition"
              >
                <i class="fa-brands fa-facebook-f"></i>
              </a>

              <a
                href="#"
                className="w-[50px] h-[50px]  text-lg border border-white rounded-full flex items-center justify-center hover:bg-[#06bbcc] hover:border-[#06bbcc] transition"
              >
                <i class="fa-brands fa-youtube"></i>
              </a>

              <a
                href="#"
                className="w-[50px] h-[50px] text-lg border border-white rounded-full flex items-center justify-center hover:bg-[#06bbcc] hover:border-[#06bbcc] transition"
              >
                <i class="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-7">Gallery</h3>

            <div className="grid grid-cols-3 gap-3">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="bg-white p-2 h-[80px] overflow-hidden"
                >
                  <img
                    src={image}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-7">Newsletter</h3>

            <p className="text-lg leading-9 mb-7">
              Dolor amet sit justo amet elitr
              <br />
              clita ipsum elitr est.
            </p>

            <div className="bg-white p-3 flex items-center h-[62px]">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 min-w-0 px-4 text-lg text-gray-900 outline-none"
              />

              <button className="bg-[#06bbcc] text-white px-4 h-[50px] text-lg font-medium hover:bg-[#05a8b8] transition">
                SignUp
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1660px] mx-auto px-8 lg:px-12">
        <div className="border-t border-white/10"></div>

        <div className="py-8 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
          <div className="text-lg">
            <p>
              ©{" "}
              <a
                href="#"
                className="border-b border-white hover:text-[#06bbcc]"
              >
                Your Site Name
              </a>
              , All Right Reserved. Designed By{" "}
              <a
                href="#"
                className="border-b border-white hover:text-[#06bbcc]"
              >
                HTML Codex
              </a>
            </p>

            <p className="mt-8">
              Distributed By{" "}
              <a
                href="#"
                className="border-b border-white hover:text-[#06bbcc]"
              >
                ThemeWagon
              </a>
            </p>
          </div>

          <div className="flex items-center">
            <a href="#" className="px-4 text-lg hover:text-[#06bbcc]">
              Home
            </a>

            <span className="h-8 border-l border-white/10"></span>

            <a href="#" className="px-4 text-lg hover:text-[#06bbcc]">
              Cookies
            </a>

            <span className="h-8 border-l border-white/10"></span>

            <a href="#" className="px-4 text-lg hover:text-[#06bbcc]">
              Help
            </a>

            <span className="h-8 border-l border-white/10"></span>

            <a href="#" className="px-4 text-lg hover:text-[#06bbcc]">
              FAQs
            </a>
          </div>
        </div>
      </div>

      <a
        href="#"
        className="fixed bottom-7 right-8 w-[72px] h-[70px] bg-[#06bbcc] flex items-center justify-center text-white text-xl hover:bg-[#05a8b8] transition"
      >
        <i class="fa-solid fa-arrow-up"></i>
      </a>
    </footer>
  );
}

export default Footer;
