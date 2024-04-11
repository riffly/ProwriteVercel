import React from "react";
import PackagesBox from "./PackagesBox";
import { packages } from "../data/Packages";

export default function PackageSection() {
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
            Packages
          </h1>
          <h1 className="text-lg md:text-xl">Recommend Packages For You</h1>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
            {packages.map((item) => {
              return <PackagesBox {...item} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
