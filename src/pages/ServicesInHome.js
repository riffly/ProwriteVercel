import React from "react";
import HomeServicesSection from "../components/HomeServicesSection";

function ServicesInHome() {
  return (
    <div>
      <div className=" my-10 md:mx-80">
        <h1 className=" sm:mx-15 mx-5 text-center text-xl text-[#262a82] sm:text-2xl">
          <span className="text-2xl font-bold">
            Balancing a career with a professional doctorate?
          </span>{" "}
          <br /> Dissertation by Design provides full-service academic and
          dissertation coaching support tailored for working professionals. Our
          experienced academic coaches and consultants will help you confidently
          progress through each research stage – from research proposal
          development to final editing and formatting.{" "}
        </h1>
      </div>
      <div className=" mb-10 text-center">
        <button
          className="rounded-full bg-slate-950 px-9 py-4 text-[20px] text-white"
          type="button"
        >
          Schedule a Free Consultation
        </button>
      </div>
      <div className=" flex justify-center">
        <HomeServicesSection />
      </div>
    </div>
  );
}

export default ServicesInHome;
