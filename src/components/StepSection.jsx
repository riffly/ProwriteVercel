import React from "react";
import { RiMapPinFill } from "react-icons/ri";
import { FaMoneyBillWave } from "react-icons/fa";
import { FaPlane } from "react-icons/fa";

export default function Step() {
  return (
    <section className="mt-20 w-full md:mt-32">
      <div className="container px-8 sm:px-10">
        <div
          className="mb-10 text-center"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="1000"
          data-aos-offset="0"
          data-aos-once="true"
        >
          <h1 className="mb-1 text-4xl font-extrabold text-amber-500 md:text-5xl">
            Step
          </h1>
          <h1 className="text-lg md:text-xl">3 Simple Steps For Booking</h1>
        </div>

        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          <div
            className="flex flex-col items-center border-[3px] border-amber-500 bg-gray-50 px-6 py-10"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1000"
            data-aos-offset="0"
            data-aos-once="true"
          >
            <div className="mb-2 flex items-center justify-center rounded-full bg-amber-500 p-6 text-white">
              <RiMapPinFill className="text-4xl" />
            </div>
            <h1 className="header-text py-5 text-center text-xl font-bold">
              1: Choose your Destination
            </h1>
            <div className="text-center text-gray-500">
              Browse through our website to choose your preferred destination in
              Thailand. From bustling cities to serene beaches, we have a
              variety of options to suit your preferences and budget.
            </div>
          </div>

          <div
            className="flex flex-col items-center border-[3px] border-amber-500 bg-gray-50 px-6 py-10"
            data-aos="fade-up"
            data-aos-delay="600"
            data-aos-duration="1000"
            data-aos-offset="0"
            data-aos-once="true"
          >
            <div className="mb-2 flex items-center justify-center rounded-full bg-amber-500 p-6 text-white">
              <FaMoneyBillWave className="text-4xl" />
            </div>
            <h1 className="header-text py-5 text-center text-xl font-bold">
              2: Online Payment
            </h1>
            <div className="text-center text-gray-500">
              Once you have selected your desired tour package, you can make a
              secure online payment through our website. We accept various
              payment methods to make the process convenient and hassle-free.
            </div>
          </div>

          <div
            className="flex flex-col items-center border-[3px] border-amber-500 bg-gray-50 px-6 py-10 md:relative md:left-[55%] lg:left-0 lg:flex"
            data-aos="fade-up"
            data-aos-delay="900"
            data-aos-duration="1000"
            data-aos-offset="0"
            data-aos-once="true"
          >
            <div className="mb-2 flex items-center justify-center rounded-full bg-amber-500 p-6 text-white">
              <FaPlane className="text-4xl" />
            </div>
            <h1 className="header-text py-5 text-center text-xl font-bold">
              3: Fly to Thailand
            </h1>
            <div className="text-center text-gray-500">
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
