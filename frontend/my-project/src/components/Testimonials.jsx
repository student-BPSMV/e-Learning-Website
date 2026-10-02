import React, { useEffect, useState } from "react";

function Testimonials() {
  const [form, setForm] = useState({
    name: "",
    designation: "",
    review: "",
  });

  const [testimonials, setTestimonials] = useState([]);

  const handleChanges = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    fetch("http://localhost:3000/api/testimonials")
      .then((response) => response.json())
      .then((data) => {
        setTestimonials(data);
      })
      .catch((error) => {
        console.error("Error fetching testimonials:", error);
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:3000/api/testimonials", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await response.json();

    alert("Thank you for your response!");

    setTestimonials((prev) => [...prev, data]);

    setForm({ name: "", designation: "", review: "" });
  };

  return (
    <section className="font-[Nunito]">
      <form
        className="flex flex-col items-center text-sm"
        onSubmit={handleSubmit}
      >
        <p
          className="text-lg text-[#06BBCC] font-medium pb-2"
          data-aos="fade-down"
        >
          Write a Review
        </p>
        <h1
          className="text-5xl font-bold text-black 
        pb-4 font-[Nunito]"
          data-aos="fade-down"
        >
          Share your feedback
        </h1>
        <p
          className="text-sm text-gray-500 text-center 
        pb-10"
          data-aos="fade-down"
        >
          Your opinion matters ! Please share your experience with us.
        </p>

        <div
          className="flex flex-col md:flex-row items-center gap-8 w-[350px] md:w-[700px]"
          data-aos="slide-up"
        >
          <div className="w-full">
            <label className="text-black/70 text-lg font-medium" htmlFor="name">
              Your Name
            </label>
            <input
              name="name"
              value={form.name}
              onChange={handleChanges}
              className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-[#06BBCC] focus:border-2"
              type="text"
              required
            />
          </div>
          <div className="w-full">
            <label
              className="text-black/70 text-lg font-medium"
              htmlFor="designation"
            >
              Designation
            </label>
            <input
              name="designation"
              value={form.designation}
              onChange={handleChanges}
              className="h-12 p-2 mt-2 w-full border border-gray-500/30 rounded outline-none focus:border-[#06BBCC] focus:border-2"
              type="text"
              required
            />
          </div>
        </div>

        <div className="mt-6 w-[350px] md:w-[700px]" data-aos="slide-up">
          <label className="text-black/70 text-lg font-medium" htmlFor="review">
            Your Review
          </label>
          <textarea
            name="review"
            value={form.review}
            onChange={handleChanges}
            className="w-full mt-2 p-2 h-40 border border-gray-500/30 rounded resize-none outline-none focus:border-[#06BBCC] focus:border-2"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="mt-5 bg-[#06BBCC] text-white h-12 w-56 px-4 rounded active:scale-95 transition text-lg font-medium active:text-[#06BBCC] active:bg-white active:border-2 active:border-[#06BBCC] mb-20"
          data-aos="slide-up"
        >
          Submit Review
        </button>
      </form>

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
              TESTIMONIALS
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
          Our Students Say!
        </h1>
      </div>

      <div
        className="w-full overflow-x-auto mb-20 px-4 hide-scrollbar"
        data-aos="slide-up"
      >
        <div className="flex gap-6 w-max py-4">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="text-sm w-80 flex-shrink-0 border border-gray-200 rounded-lg bg-white shadow-[0px_4px_15px_0px] shadow-black/5 overflow-hidden"
            >
              <div className="flex items-center gap-4 px-5 py-4 bg-[#06BBCC]">
                <img
                  className="h-12 w-12 rounded-full object-cover"
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=100"
                  alt="User"
                />

                <div>
                  <h2 className="text-lg font-medium text-white">
                    {testimonial.name}
                  </h2>

                  <p className="text-white">{testimonial.designation}</p>
                </div>
              </div>

              <div className="p-5 pb-7">
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      width="22"
                      height="20"
                      viewBox="0 0 22 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.525.464a.5.5 0 0 1 .95 0l2.107 6.482a.5.5 0 0 0 .475.346h6.817a.5.5 0 0 1 .294.904l-5.515 4.007a.5.5 0 0 0-.181.559l2.106 6.483a.5.5 0 0 1-.77.559l-5.514-4.007a.5.5 0 0 0-.588 0l-5.514 4.007a.5.5 0 0 1-.77-.56l2.106-6.482a.5.5 0 0 0-.181-.56L.832 8.197a.5.5 0 0 1 .294-.904h6.817a.5.5 0 0 0 .475-.346z"
                        fill="#06BBCC"
                      />
                    </svg>
                  ))}
                </div>

                <p className="text-gray-500 mt-5 leading-relaxed">
                  {testimonial.review}
                </p>
              </div>

              <a
                href="#"
                className="text-[#06BBCC] underline px-5 pb-5 inline-block"
              >
                Read more
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
