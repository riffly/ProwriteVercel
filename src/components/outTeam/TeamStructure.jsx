import React from "react";
import ceoimg from "../../images/ceo.webp";

function TeamStructure(props) {
  return (
    <div className="mb-10 flex justify-center">
      <div className=" mx-10 sm:w-1/2 justify-center md:flex">
        <div className="mr-5">
          <img className=" w-[2200px] " src={ceoimg} alt="" />
        </div>
        <div>
          <h1 className=" text-2xl font-bold">{props.title}</h1>
          <p className=" text-xl">{props.description}</p>
        </div>
      </div>
    </div>
  );
}

export default TeamStructure;
