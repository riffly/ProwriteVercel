import React from "react";
import HomeServicesSection from "../components/HomeServicesSection";

function ServicesInHome() {
  return (
    <div>
      <div className=" my-10 md:mx-80">
        <h1 className=" sm:mx-15 mx-5 text-center text-xl text-[#020617] sm:text-2xl">
          <span className="text-2xl font-bold">
            Balancing a busy career with a professional doctorate?
          </span>{" "}
          <br /> Prowrite offers comprehensive academic and clinical research
          services, custom-made for clinicians and medical students. With a
          cadre of seasoned research scientists and adept professional writers
          at your service, we ensure you navigate each phase of your research
          with confidence — from the initial development of your research
          proposal to the detailed editing and formatting of your manuscript,
          and ultimately to its successful publication.{" "}
        </h1>
      </div>
      <div className=" mb-10 text-center">
        <a href="https://www.facebook.com/prowrite.us">
          <button
            className="rounded-full bg-slate-950 px-9 py-4 text-[20px] text-white"
            type="button"
          >
            Talk To Us Now
          </button>
        </a>
      </div>
      <div className=" flex justify-center">
        <HomeServicesSection />
      </div>
    </div>
  );
}

export default ServicesInHome;
