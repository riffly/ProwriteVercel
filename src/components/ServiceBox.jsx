import React from "react";

export default function ServiceBox(props) {
  return (
    <div
      className=""
      data-aos="fade-up"
      data-aos-delay="300"
      data-aos-duration="1000"
      data-aos-offset="0"
      data-aos-once="true"
    >
      <div className="group h-full bg-white p-5 shadow-md transition-all duration-500 ease-in-out hover:bg-amber-500 hover:text-white">
        <div className="m-4">
          <div className="flex items-center text-7xl text-amber-500 transition-all duration-500 ease-in-out group-hover:text-white">
            {props.logo}
          </div>
          <div className="mb-3 mt-7 text-xl font-bold">
            <h1>{props.title}</h1>
          </div>
          <div className="text-md text-gray-500 transition-all duration-500 ease-in-out group-hover:text-white">
            <p>{props.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
