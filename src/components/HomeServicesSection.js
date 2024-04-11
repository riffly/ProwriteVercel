import React from "react";
import img1 from "../images/DissertationCoaching.webp";
import img2 from "../images/StatisticalConsulting.webp";
import img3 from "../images/QualitativeDataAnalysis.webp";
import img4 from "../images/EditingServices.webp";
import img5 from "../images/Workshops.webp";

function HomeServicesSection() {
  return (
    <div className="mb-10 items-center">
      <div className=" mx-auto items-center sm:flex">
        <div className=" mb-10">
          <img src={img1} alt="" />
          <h2 className=" text-center text-xl font-bold">
            Dissertation Coaching
          </h2>
        </div>

        <div className=" my-10">
          <img src={img2} alt="" />
          <h2 className=" text-center text-xl font-bold">
            Statistical Consulting
          </h2>
        </div>

        <div className=" my-10">
          <img src={img3} alt="" />
          <h2 className=" text-center text-xl font-bold">
            Qualitative Data Analysis
          </h2>
        </div>

        <div className=" my-10">
          <img src={img4} alt="" />
          <h2 className=" text-center text-xl font-bold">Editing Services</h2>
        </div>

        <div className=" my-10">
          <img src={img5} alt="" />
          <h2 className=" text-center text-xl font-bold">Workshops</h2>
        </div>
      </div>
    </div>
  );
}

export default HomeServicesSection;
