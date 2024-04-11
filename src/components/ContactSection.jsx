import React from "react";

import { FaMapMarkerAlt } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

export default function ContactSection() {
  return (
    <div className="container h-full w-full pt-0">
      <div className="grid grid-cols-1 gap-14 md:grid-cols-2">
        <div
          className="border-test"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="1000"
          data-aos-offset="0"
          data-aos-once="true"
        >
          <div className="border-test mb-8 text-center md:text-left">
            <h1 className="mb-2 text-2xl font-bold">Contact</h1>
            <p className="text-gray-600">
              Connect with us effortlessly for an unforgettable experience.
              Reach out at our office or call us at phone number or send us
              email to start planning your dream getaway.
            </p>
          </div>

          <div className="flex justify-center md:justify-start">
            <div className="">
              <div className="mb-8 flex h-14 gap-5">
                <div className="flex h-full w-14 items-center justify-center bg-amber-500">
                  <FaMapMarkerAlt className="text-2xl text-white" />
                </div>
                <div className="border-test flex flex-col justify-between">
                  <p className="text-xl font-bold text-amber-500">Office</p>
                  <p className="text-gray-600">48/8 Bangkok, Thailand</p>
                </div>
              </div>
              <div className="mb-8 flex h-14 gap-5">
                <div className="flex h-full w-14 items-center justify-center bg-amber-500">
                  <BsFillTelephoneFill className="text-2xl text-white" />
                </div>
                <div className="border-test flex flex-col justify-between">
                  <p className="text-xl font-bold text-amber-500">Phone</p>
                  <p className="text-gray-600">+66 099 988 9898</p>
                </div>
              </div>
              <div className="mb-8 flex h-14 gap-5">
                <div className="flex h-full w-14 items-center justify-center bg-amber-500">
                  <MdEmail className="text-2xl text-white" />
                </div>
                <div className="border-test flex flex-col justify-between">
                  <p className="text-xl font-bold text-amber-500">Email</p>
                  <p className="text-gray-600">backpackOfficial@example.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="border-test"
          data-aos="fade-up"
          data-aos-delay="600"
          data-aos-duration="1000"
          data-aos-offset="0"
          data-aos-once="true"
        >
          <div className="border-test">
            <form action="/" className="grid grid-cols-1 gap-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <input
                  type="text"
                  className="border-[1px] border-gray-300 px-3 py-3 outline-none"
                  placeholder="First Name"
                />
                <input
                  type="text"
                  className="border-[1px] border-gray-300 px-3 py-3 outline-none"
                  placeholder="Last Name"
                />
              </div>
              <input
                type="email"
                className="border-[1px] border-gray-300 px-3 py-3 outline-none"
                placeholder="Email"
              />
              <textarea
                name=""
                id=""
                rows="7"
                className="border-[1px] border-gray-300 px-3 py-3 outline-none"
                placeholder="Your Message"
              ></textarea>
              <button
                className="bg-amber-500 py-4 text-lg font-semibold text-white transition-all duration-200 hover:bg-amber-400"
                type="submit"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
