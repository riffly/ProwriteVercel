import React from "react";

export default function DestinationBox(props) {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay="300"
      data-aos-duration="1000"
      data-aos-offset="0"
      data-aos-once="true"
    >
      <div
        className="h-[32rem] w-auto bg-cover bg-center bg-no-repeat duration-200 hover:cursor-pointer hover:opacity-80"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/${props.destImage})`,
        }}
      >
        <div className="flex h-full w-full flex-col justify-between p-5">
          <div className="relative left-0 top-0 w-28 bg-white py-2">
            <h1 className="text-center text-lg font-extrabold tracking-wide text-lime-600">
              {props.discount}
            </h1>
          </div>
          <div className="flex h-10 w-full items-center justify-center bg-white text-center">
            <h1 className="header-text text-center text-xl font-extrabold tracking-wide text-amber-600">
              {props.destination}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
