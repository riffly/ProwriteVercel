import React from "react";
import AboutUs from "../components/AboutSection";
import HeaderNavigation from "../components/HeaderNavigation";

export default function About() {
  return (
    <div
      className="w-full"
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-delay="50"
      data-aos-offset="0"
    >
      <HeaderNavigation
        title="About Us"
        subtitle="About"
        image={"hero-01.webp"}
      />
      <AboutUs />
    </div>
  );
}
