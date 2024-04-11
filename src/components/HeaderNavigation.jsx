import React from "react";
import { Link } from "react-router-dom";

export default function HeaderNavigation(props) {
  return (
    //relative -top-[72px]
    <div
      className="border-test relative -top-[72px] h-[28.5rem]"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/${props.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        boxShadow: `inset 0 0 0 2000px rgba(0, 0, 0, 0.6)`,
      }}
    >
      <div className="container relative top-[72px] flex h-[24rem] w-full flex-col justify-center px-10 text-center">
        <div className="relative md:-top-3">
          <h1
            className="mb-3 text-5xl font-semibold text-white"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1000"
            data-aos-offset="0"
            data-aos-once="true"
          >
            {props.title}
          </h1>

          <div
            className="mb-5 text-xl text-white"
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="1000"
            data-aos-offset="0"
            data-aos-once="true"
          >
            <span className="text-white transition-all duration-200 hover:text-amber-500 hover:underline">
              <Link to="/">Home</Link>
            </span>
            <span className="px-2"> / </span>
            <span className="text-amber-500">{props.subtitle}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
