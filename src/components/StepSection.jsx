import React from "react";
import Reviewimg1 from "../images/review/review001.webp";
import Reviewimg2 from "../images/review/review002.webp";
import Reviewimg3 from "../images/review/review003.webp";

export default function Step() {
  return (
    <section className="mt-20 w-full md:mt-20">
      <div className="container px-8 sm:px-10">
        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          {/* First Section */}
          <div
            className="flex flex-col items-center border-[3px] border-[#020617] bg-gray-50 px-6 py-10"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1000"
            data-aos-offset="0"
            data-aos-once="true"
          >
            <h1 className="header-text py-5 text-center text-xl font-bold">
              Hasmek Siwajian - Student
            </h1>
            <div className="mb-4">
              <img src={Reviewimg1} alt="" />
            </div>
            <div className=" text-justify text-gray-500">
              Browse through our website to choose your preferred destination in
              Thailand. From bustling cities to serene beaches, we have a
              variety of options to suit your preferences and budget.
            </div>
          </div>

          {/* Secound Section */}
          <div
            className="flex flex-col items-center border-[3px] border-[#020617] bg-gray-50 px-6 py-10"
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-duration="1000"
            data-aos-offset="0"
            data-aos-once="true"
          >
            <div className="mb-2 flex items-center justify-center"></div>
            <h1 className="header-text py-5 text-center text-xl font-bold">
              Hasmek Siwajian - Student
            </h1>
            <div className="mb-4">
              <img src={Reviewimg2} alt="" />
            </div>
            <div className="text-justify text-gray-500">
              Once you have selected your desired tour package, you can make a
              secure online payment through our website. We accept various
              payment methods to make the process convenient and hassle-free.
            </div>
          </div>

          {/* Third Section */}
          <div
            className="flex flex-col items-center border-[3px] border-[#020617] bg-gray-50 px-6 py-10 md:relative md:left-[55%] lg:left-0 lg:flex"
            data-aos="fade-up"
            data-aos-delay="900"
            data-aos-duration="1000"
            data-aos-offset="0"
            data-aos-once="true"
          >
            <div className="mb-2 flex items-center justify-center"></div>
            <h1 className="header-text py-5 text-center text-xl font-bold">
              Hasmek Siwajian - Student
            </h1>
            <div className="mb-4">
              <img src={Reviewimg3} alt="" />
            </div>
            <div className="text-justify text-gray-500">
              After completing your booking and payment, you will receive a
              confirmation email with all the details of your tour package.
              Simply pack your bags and fly to Thailand to begin your
              unforgettable tour experience with us.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
