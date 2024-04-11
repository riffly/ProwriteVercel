import React from "react";
import DestinationBox from "./DestinationBox";

export default function DestinationSection() {
  return (
    <section className="mt-20 w-full md:mt-32">
      <div className="container px-8 sm:px-10">
        <div
          className="text-center"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="1000"
          data-aos-offset="0"
          data-aos-once="true"
        >
          <h1 className="mb-1 text-4xl font-extrabold text-amber-500 md:text-5xl">
            Destination
          </h1>
          <h1 className="text-lg md:text-xl">Popular Destination</h1>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <DestinationBox
            discount="30% OFF"
            destination="CHIANG MAI"
            destImage="destination-01.webp"
          />

          <DestinationBox
            discount="35% OFF"
            destination="PHUKET"
            destImage="destination-02.webp"
          />

          <DestinationBox
            discount="20% OFF"
            destination="BANGKOK"
            destImage="destination-03.webp"
          />

          <DestinationBox
            discount="15% OFF"
            destination="PATTAYA"
            destImage="destination-04.webp"
          />
        </div>
      </div>
    </section>
  );
}
