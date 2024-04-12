import React from "react";
// import AboutUs from "../components/AboutSection";
import HeaderNavigation from "../components/HeaderNavigation";
import OurTeamComp from "../components/outTeam/OurTeamComp";

export default function OurTeam() {
  return (
    <div
      className="w-full"
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-delay="50"
      data-aos-offset="0"
    >
      <HeaderNavigation
        title="Our Team"
        subtitle="Our Team"
        image={"hero-01.webp"}
      />
      <OurTeamComp />
    </div>
  );
}
