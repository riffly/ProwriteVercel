import React from "react";
import ContactSection from "../components/ContactSection";
import HeaderNavigation from "../components/HeaderNavigation";

export default function Contact() {
  return (
    <div
      className="w-full"
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-delay="50"
      data-aos-offset="0"
    >
      <HeaderNavigation
        title="Contact Us"
        subtitle="Contact"
        image={"hero-contact.webp"}
      />
      <div className="border-test container px-8 sm:px-10">
        <ContactSection />
      </div>
    </div>
  );
}
