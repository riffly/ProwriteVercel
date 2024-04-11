import React from "react";
import ServiceSection from "../components/ServiceSection";
import HeaderNavigation from "../components/HeaderNavigation";

export default function Service() {
  return (
    <div
      className="w-full"
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-delay="50"
      data-aos-offset="0"
    >
      <HeaderNavigation
        title="Our Service"
        subtitle="Service"
        image={"hero-service.webp"}
      />
      <div className="border-test -mt-28">
        <ServiceSection />
      </div>
    </div>
  );
}
