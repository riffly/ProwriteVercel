import React from "react";

export default function PackagesBox(props) {
  return (
    <div
      className="grid grid-rows-[15rem_3rem_1fr] bg-white shadow-md"
      data-aos="fade-up"
      data-aos-delay="300"
      data-aos-duration="1000"
      data-aos-offset="0"
      data-aos-once="true"
    >
      <div className="w-full overflow-hidden">
        <div
          className="h-full w-full bg-cover bg-center bg-no-repeat transition-all duration-500 ease-in-out hover:scale-110"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/images/${props.destImage})`,
          }}
        ></div>
      </div>
      <div className="border-test grid w-full grid-cols-3 text-black">
        <div className="flex items-center justify-center border-b-2 border-t-2 border-gray-200 py-2">
          {props.destination}
        </div>
        <div className="flex items-center justify-center border-2 border-gray-200">
          {props.days} Days
        </div>
        <div className="flex items-center justify-center border-b-2 border-t-2 border-gray-200">
          {props.person} Person
        </div>
      </div>
      <div className="border-test flex w-full flex-col items-center justify-between px-6 py-6">
        <h1 className="border-test mb-2 text-2xl font-bold">${props.price}</h1>
        <div className="border-test mb-6 text-xl text-amber-500">
          &#9733;&#9733;&#9733;&#9733;&#9733;
        </div>
        <p className="border-test mb-10 text-center text-sm text-gray-500 sm:text-base">
          {props.detail}
        </p>
        <div className="border-test text-md grid w-full grid-cols-1 gap-4 font-semibold md:grid-cols-2">
          <button className="rounded-md border-2 border-amber-500 bg-amber-500 py-2 text-white transition-all duration-200 hover:bg-white hover:text-amber-500">
            Book Now
          </button>
          <button className="rounded-md border-2 border-amber-500 bg-amber-500 py-2 text-white transition-all duration-200 hover:bg-white hover:text-amber-500">
            More Detail
          </button>
        </div>
      </div>
    </div>
  );
}
