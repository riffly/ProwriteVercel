import React from "react";
import ServiceSection from "../components/ServiceSection";
import AboutSection from "../components/AboutSection";
import DestinationSection from "../components/DestinationSection";
import PackageSection from "../components/PackageSection";
import StepSection from "../components/StepSection";
import BookingForm from "../components/BookingForm";
import HeroSection from "../components/HeroSection";
import ContainSlider from "../components/slider/ContainSlider";
import ServicesInHome from "../pages/ServicesInHome";
import BlogHome from "../pages/BlogHome";
import ContentHome from "../pages/ContentHome"
import Parralax from "./Parralax";

export default function Home() {
  return (


    <>
   
    <div
      className=""
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-delay="50"
      data-aos-offset="0"
    >
      <ContainSlider />
      <ServicesInHome />
      {/* <ContentHome /> */}
      
      <div className=" flex justify-center">
        <BlogHome />
      </div>
      
      {/* <AboutSection />
      <ServiceSection />
      <DestinationSection />
      <PackageSection />
      <StepSection />
      <BookingForm /> */}
      
    </div>
    <Parralax />
    </>
  );
}
