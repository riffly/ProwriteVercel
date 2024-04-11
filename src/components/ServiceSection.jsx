import React from "react";
import { FaHotel } from "react-icons/fa";
import { AiFillCar } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { MdTravelExplore } from "react-icons/md";
import { FaHiking } from "react-icons/fa";
import { GiMeal } from "react-icons/gi";
import { MdSupportAgent } from "react-icons/md";
import { RiMapPinTimeFill } from "react-icons/ri";
import ServiceBox from "./ServiceBox";

export default function ServiceSection() {
  return (
    <section className="mt-20 w-full md:mt-32">
      <div className="container px-8 sm:px-10">
        <div className="flex flex-col items-center justify-center">
          <div
            className="mb-10 text-center"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1000"
            data-aos-offset="0"
            data-aos-once="true"
          >
            <h1 className="mb-1 text-4xl font-extrabold text-amber-500 md:text-5xl">
              Services
            </h1>
            <h2 className="text-lg md:text-xl">Our Services</h2>
          </div>

          <div className="border-test w-full">
            <div className="grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              <ServiceBox
                logo={<FaHotel className="text-6xl" />}
                title="Comfortable Accommodations"
                desc="Enjoy a comfortable stay at top-rated hotels and resorts, with amenities such as swimming pools, spa services, and beautiful views."
              />

              <ServiceBox
                logo={<AiFillCar className="text-6xl" />}
                title="Transportation Services"
                desc="We provide reliable and comfortable transportation to and from the airport, as well as throughout your tour, so you can sit back and relax."
              />

              <ServiceBox
                logo={<BsFillPersonFill className="text-6xl" />}
                title="Experienced Local Guides"
                desc="Our knowledgeable local tour guides will take you to the best attractions, share insider tips, and provide interesting insights about the local culture and history."
              />

              <ServiceBox
                logo={<MdTravelExplore className="text-6xl" />}
                title="Admission to Popular Attractions"
                desc="Gain entry to some of the most popular attractions and cultural sites in Thailand, with skip-the-line access and expert commentary."
              />

              <ServiceBox
                logo={<FaHiking className="text-6xl" />}
                title="Exciting Activities and Experiences"
                desc="Choose from a range of exciting activities and experiences, such as snorkeling, zip-lining, or cooking classes, to add some adventure and fun to your trip."
              />

              <ServiceBox
                logo={<GiMeal className="text-6xl" />}
                title="Delicious Meals"
                desc="Experience the authentic flavors of Thai cuisine with delicious meals included in your tour package, featuring fresh ingredients and a variety of dishes to suit all tastes."
              />

              <ServiceBox
                logo={<MdSupportAgent className="text-6xl" />}
                title="24/7 Customer Support"
                desc="Our friendly and knowledgeable customer support team is available around the clock to assist you with any questions or concerns before, during, or after your tour."
              />

              <ServiceBox
                logo={<RiMapPinTimeFill className="text-6xl" />}
                title="Flexible Tour Itineraries"
                desc="We offer flexible tour itineraries that can be customized to meet your preferences and interests, so you can create the perfect itinerary for your dream vacation in Thailand."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
