import React from "react";
import img1 from "../images/HomeBlogIng001.png";
import img2 from "../images/HomeBlogIng002.png";
import img3 from "../images/HomeBlogIng003.png";

function BlogHome() {
  return (
    <div>
      <div className=" xl:mx-30 mx-auto items-center sm:flex">
        <div className=" mx-10 mb-10">
          <div className=" bg-orange-900">
            <img className=" w-96 bg-orange-600 " src={img1} alt="" />
          </div>
          <div className=" w-96">
            <h1 className=" my-2 text-xl font-bold">
              How To Overcome Writing Challenges, Get Unstuck, And Transform
              Your Academic Writing Practice
            </h1>
            <p>
              Academic writing is an essential skill for researchers, educators,
              and students across disciplines. However, it is also a source of
              considerable anxiety, frustration, and even isolation.
            </p>
            <button className="rounded-md bg-orange-600 px-5 py-2 text-white">
              Continue
            </button>
          </div>
        </div>

        <div className=" mx-10 mb-10">
          <div className=" bg-orange-900">
            <img className=" w-96 bg-orange-600 " src={img2} alt="" />
          </div>
          <div className=" w-96">
            <h1 className=" my-2 text-xl font-bold">
              How To Overcome Writing Challenges, Get Unstuck, And Transform
              Your Academic Writing Practice
            </h1>
            <p>
              Academic writing is an essential skill for researchers, educators,
              and students across disciplines. However, it is also a source of
              considerable anxiety, frustration, and even isolation.
            </p>
            <button className="rounded-md bg-orange-600 px-5 py-2 text-white">
              Continue
            </button>
          </div>
        </div>

        <div className=" mx-10 mb-10">
          <div className=" bg-orange-900">
            <img className=" w-96 bg-orange-600 " src={img3} alt="" />
          </div>
          <div className=" w-96">
            <h1 className=" my-2 text-xl font-bold">
              How To Overcome Writing Challenges, Get Unstuck, And Transform
              Your Academic Writing Practice
            </h1>
            <p>
              Academic writing is an essential skill for researchers, educators,
              and students across disciplines. However, it is also a source of
              considerable anxiety, frustration, and even isolation.
            </p>
            <button className="rounded-md bg-orange-600 px-5 py-2 text-white">
              Continue
            </button>
          </div>
        </div>
      </div>
      <div className=" flex justify-center mb-10">
        <button className=" items-center rounded-md bg-[#020617] px-9 py-3 text-white">
          Read More
        </button>
      </div>
    </div>
  );
}

export default BlogHome;
