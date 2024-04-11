import React from "react";
import { GoSearch } from "react-icons/go";

export default function HeroSection() {
  return (
    <div
      className="relative -top-[72px]"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/hero-homepage.jpg)`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.55)",
        minHeight: "100vh",
      }}
    >
      <div
        className="border-test container relative top-[72px] z-50 flex items-center justify-center"
        style={{
          minHeight: "calc(100vh - 72px)",
        }}
      >
        <div className="container relative flex h-full flex-col items-center justify-center p-10 text-center md:-top-5">
          <h1
            className="mb-6 text-4xl font-bold text-white sm:text-5xl"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1000"
            data-aos-offset="0"
            data-aos-once="true"
          >
            Make Your Holiday In Thailand With Us
          </h1>

          <p
            className="mb-8 text-base font-normal text-white sm:text-xl"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1000"
            data-aos-offset="0"
            data-aos-once="true"
          >
            Join us for an unforgettable vacation with comfortable
            accommodations and expert guides!
          </p>

          <form
            className="border-test flex w-full items-center rounded-full bg-white py-1 sm:w-[60%]"
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="1000"
            data-aos-offset="0"
            data-aos-once="true"
          >
            <input
              type="text"
              required
              className="h-full w-full rounded-full ps-5 outline-0"
              placeholder="Eg. Chiang Mai"
            />
            <button
              type="submit"
              className="me-1 flex items-center justify-center rounded-full bg-amber-500 p-2 transition-all duration-200 hover:bg-amber-400"
            >
              <GoSearch className="text-2xl text-white" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
