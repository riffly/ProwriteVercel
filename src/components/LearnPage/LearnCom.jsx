import React from "react";
import img1 from "../../images/HomeBlogIng001.png";

function LearnCom() {
  return (
    <div className=" flex justify-center">
      <div className=" mx-10 mb-10 w-9/12">
        <div className=" bg-orange-900">
          <img className=" w-96 bg-orange-600 " src={img1} alt="" />
        </div>
        <div className=" w-96">
          <h1 className=" my-2 text-xl font-bold">
            How To Overcome Writing Challenges, Get Unstuck, And Transform Your
            Academic Writing Practice
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
  );
}

export default LearnCom;
