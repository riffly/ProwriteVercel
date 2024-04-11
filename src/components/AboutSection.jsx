import React from "react";
import { TiTick } from "react-icons/ti";

export default function AboutSection() {
  return (
    <section className="border-test">
      <div className="border-test container px-8 sm:px-10">
        <div className="border-test flex flex-col items-center justify-center">
          <div className="border-test w-full flex-col items-center">
            <div className="border-test grid h-[50rem] grid-cols-1 gap-10 md:h-[25rem] md:grid-cols-2 md:gap-8">
              <div
                className="h-full w-full bg-cover bg-center"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="1000"
                data-aos-offset="0"
                data-aos-once="true"
                style={{
                  backgroundImage: `url(${process.env.PUBLIC_URL}/images/about-02.webp)`,
                }}
              ></div>
              <div
                className="h-full w-full bg-cover bg-center"
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-duration="1000"
                data-aos-offset="0"
                data-aos-once="true"
                style={{
                  backgroundImage: `url(${process.env.PUBLIC_URL}/images/about-01.webp)`,
                }}
              ></div>
            </div>
            <div className="border-test mt-12 md:mt-16">
              <div
                className="mb-10 text-center"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="1000"
                data-aos-offset="0"
                data-aos-once="true"
              >
                <h1 className="mb-1 text-4xl font-extrabold text-amber-500 md:text-5xl">
                  About Us
                </h1>
                <h2 className="text-lg md:text-xl">Welcome to Backpack</h2>
              </div>

              <p
                className="text-base md:text-lg"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="1000"
                data-aos-offset="0"
                data-aos-once="true"
              >
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Welcome to Backpack,
                our tour company in Thailand! We are delighted to have you visit
                our website and explore the many amazing travel opportunities
                that await you in this beautiful country. As a leading provider
                of personalized tours, we pride ourselves on creating unique and
                unforgettable experiences for our clients. Whether you are
                seeking adventure, relaxation, or cultural immersion, we have a
                wide range of itineraries that cater to your individual needs
                and interests.
                <br />
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; With our team of
                experienced guides and travel experts, we are committed to
                ensuring that your trip to Thailand is everything you imagined
                and more. From the bustling streets of Bangkok to the tranquil
                beaches of Phuket, we offer a diverse array of destinations and
                activities that showcase the best of this vibrant country. Let
                us take care of all the details, from accommodations to
                transportation, so that you can focus on enjoying your journey.
                Contact us today to start planning your dream vacation in
                Thailand!
              </p>
            </div>
            <div className="border-test mt-16 grid grid-cols-1 gap-16 md:grid-cols-2">
              <div className="border-test">
                <div
                  className="h-[30rem] w-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL}/images/about-03.webp)`,
                  }}
                  data-aos="fade-up"
                  data-aos-delay="300"
                  data-aos-duration="1000"
                  data-aos-offset="0"
                  data-aos-once="true"
                ></div>
              </div>
              <div
                className="border-test flex flex-col justify-center"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="1000"
                data-aos-offset="0"
                data-aos-once="true"
              >
                <ul className="border-test grid grid-cols-1 gap-6 text-base md:grid-cols-2 md:text-lg">
                  <li className="border-test flex items-center">
                    <TiTick className="relative -top-[2px] text-4xl text-amber-500" />
                    Hassle-Free Planning
                  </li>
                  <li className="border-test flex items-center">
                    <TiTick className="relative -top-[2px] text-4xl text-amber-500" />
                    Time-Saving
                  </li>
                  <li className="border-test flex items-center">
                    <TiTick className="relative -top-[2px] text-4xl text-amber-500" />
                    Flexibility
                  </li>
                  <li className="border-test flex items-center">
                    <TiTick className="relative -top-[2px] text-4xl text-amber-500" />
                    Expert Local Guides
                  </li>
                  <li className="border-test flex items-center">
                    <TiTick className="relative -top-[2px] text-4xl text-amber-500" />
                    Safety and Security
                  </li>
                  <li className="border-test flex items-center">
                    <TiTick className="relative -top-[2px] text-4xl text-amber-500" />
                    Cultural Immersion
                  </li>
                  <li className="border-test flex items-center">
                    <TiTick className="relative -top-[2px] text-4xl text-amber-500" />
                    3+ Star Hotels
                  </li>
                  <li className="border-test flex items-center">
                    <TiTick className="relative -top-[2px] text-4xl text-amber-500" />
                    24/7 Services
                  </li>
                </ul>
                <div
                  className="border-test mt-16 text-center md:text-left"
                  data-aos="fade-up"
                  data-aos-delay="200"
                  data-aos-duration="1000"
                  data-aos-offset="0"
                  data-aos-once="true"
                >
                  <button className="bg-amber-500 px-16 py-4 text-xl font-semibold text-white transition-all duration-200 hover:bg-amber-400">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
