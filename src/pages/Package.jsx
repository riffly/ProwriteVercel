import React from "react";
import StepSection from "../components/StepSection";
import BookingForm from "../components/BookingForm";
import HeaderNavigation from "../components/HeaderNavigation";
import PackageSection from "../components/PackageSection";

export default function Package() {
  return (
    <div
      className="w-full"
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-delay="50"
      data-aos-offset="0"
    >
      <HeaderNavigation
        title="Our Package"
        subtitle="Package"
        image={"hero-package.webp"}
      />
      <div className="border-test -mt-28">
        <PackageSection />
        <StepSection />
        <BookingForm />
      </div>
    </div>
  );
}
