import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { RiArrowDropRightLine } from "react-icons/ri";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <div className="mt-0 w-full bg-gradient-to-r from-slate-950 to-slate-800 text-gray-300 ">
      <div className="container px-8 py-10 sm:px-10">
        <div className="border-test mb-10 flex w-full flex-col items-center justify-center">
          <div className="border-test mb-4 text-center text-xl">
            Social Media
          </div>
          <div className="border-test flex w-52 justify-between">
            <Link
              to={"/"}
              className="linear flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-2 border-gray-300 text-2xl transition-all duration-300 hover:bg-gray-300 hover:text-slate-900"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              <FaFacebookF />
            </Link>
            <Link
              to={"/"}
              className="linear flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-2 border-gray-300 text-2xl transition-all duration-300 hover:bg-gray-300 hover:text-slate-900"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              <AiOutlineTwitter />
            </Link>
            <Link
              to={"/"}
              className="linear flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-2 border-gray-300 text-2xl transition-all duration-300 hover:bg-gray-300 hover:text-slate-900"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              <AiFillInstagram />
            </Link>
            <Link
              to={"/"}
              className="linear flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-2 border-gray-300 text-2xl transition-all duration-300 hover:bg-gray-300 hover:text-slate-900"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              <AiFillYoutube />
            </Link>
          </div>
        </div>
        <div className="border-test grid w-full gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="border-test flex justify-center md:justify-start">
            <div className="border-test text-start">
              <h1 className="border-test mb-4 text-center text-xl md:text-left">
                Company
              </h1>
              <Link
                className="mb-1 flex items-center transition-all duration-200 hover:text-amber-500"
                to={"/about"}
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                <div className="text-3xl text-amber-500">
                  <RiArrowDropRightLine />
                </div>
                About Us
              </Link>
              <Link
                className="mb-1 flex items-center transition-all duration-200 hover:text-amber-500"
                to={"/contact"}
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                <div className="text-3xl text-amber-500">
                  <RiArrowDropRightLine />
                </div>
                Contact Us
              </Link>
              <Link
                className="mb-1 flex items-center transition-all duration-200 hover:text-amber-500"
                to={"/"}
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                <div className="text-3xl text-amber-500">
                  <RiArrowDropRightLine />
                </div>
                Privacy Policy
              </Link>
              <Link
                className="mb-1 flex items-center transition-all duration-200 hover:text-amber-500"
                to={"/"}
                onClick={() => {
                  window.scrollTo(0, 0);
                }}
              >
                <div className="text-3xl text-amber-500">
                  <RiArrowDropRightLine />
                </div>
                Help
              </Link>
            </div>
          </div>
          <div className="border-test flex justify-center md:justify-start">
            <div className="border-test text-start">
              <h1 className="mb-4 text-center text-xl md:text-left">Contact</h1>
              <p className=" mb-1 flex items-center">
                <div className="me-3 text-amber-500">
                  <FaMapMarkerAlt />
                </div>{" "}
                85th Floor, One World Trade Center, New York, NY, United State,
                10007
              </p>
              <p className=" mb-1 flex items-center">
                <div className="me-3 text-amber-500">
                  <BsFillTelephoneFill />
                </div>{" "}
                +1 347 441 4178
              </p>
              <p className=" mb-1 flex items-center">
                <div className="me-3 text-amber-500">
                  <MdEmail />
                </div>{" "}
                hello@prowrite.us
              </p>
            </div>
          </div>
          <div className="border-test flex justify-center md:justify-start">
            <div className="border-test text-start">
              <h1 className="mb-4 text-center text-xl md:text-left">
                Join Our Community
              </h1>
              <p className="mb-2 text-center md:text-left">
                Get Newsletter From Us!
              </p>
              <form className="">
                <input
                  type="email"
                  className="w-2/3 px-2 py-2"
                  placeholder="Your Email"
                ></input>
                <button
                  type="submit"
                  className="w-1/3 bg-amber-500 px-6 py-2 text-white transition-all duration-100 hover:bg-amber-400"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="border-test mt-12 grid w-full grid-cols-1 md:flex md:justify-between">
          <div className="max-md:flex max-md:justify-center">
            <p className="max-sm:text-center">
              &copy; 2024 Prowrite, All Right Reserved.
            </p>
          </div>
          <div className=" max-md:mt-3 max-md:flex max-md:flex-wrap max-md:justify-center">
            <Link
              className="px-5 transition-all duration-200 hover:text-white"
              to={"/"}
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              Home
            </Link>
            <Link
              className="border-l-[1px] px-5 transition-all duration-200 hover:text-white"
              to={"/"}
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              Cookies
            </Link>
            <Link
              className="border-l-[1px] px-5 transition-all duration-200 hover:text-white"
              to={"/"}
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              Help
            </Link>
            <Link
              className="border-l-[1px] ps-5 transition-all duration-200 hover:text-white"
              to={"/"}
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              FQAs
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
