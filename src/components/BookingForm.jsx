import React from "react";

export default function BookingForm() {
  return (
    <section className="mt-20 w-full md:mt-32">
      <div className="container px-8 sm:px-10">
        <div
          className="bg-cover bg-center bg-no-repeat py-3"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/images/booking-bg.webp)`,
            boxShadow: `inset 0 0 0 2000px rgba(0, 0, 0, 0.62)`,
          }}
          data-aos="fade-up"
          data-aos-delay="500"
          data-aos-duration="1000"
          data-aos-offset="0"
          data-aos-once="true"
        >
          <form className="p-8 md:p-12">
            <div>
              <h1 className="mb-7 text-center text-4xl font-bold text-white">
                Book Your Costumized Tour!
              </h1>
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <div className="flex flex-col">
                <label for="fname" className="mb-2 text-lg text-white">
                  First Name
                </label>
                <input
                  type="text"
                  id="fname"
                  placeholder="First Name"
                  className="h-10 border-[1px] border-gray-300 bg-transparent p-3 text-white outline-0"
                ></input>
              </div>
              <div className="flex flex-col">
                <label for="lname" className="mb-2 text-lg text-white">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lname"
                  placeholder="Last Name"
                  className="h-10 border-[1px] border-gray-300 bg-transparent p-3 text-white outline-0"
                ></input>
              </div>
              <div className="flex flex-col">
                <label for="telNumber" className="mb-2 text-lg text-white">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="telNumber"
                  placeholder="Phone Number"
                  className="h-10 border-[1px] border-gray-300 bg-transparent p-3 text-white outline-0"
                ></input>
              </div>
              <div className="flex flex-col">
                <label for="email" className="mb-2 text-lg text-white">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  className="h-10 border-[1px] border-gray-300 bg-transparent p-3 text-white outline-0"
                ></input>
              </div>
              <div className="flex flex-col">
                <label for="from" className="mb-2 text-lg text-white">
                  From (Date)
                </label>
                <input
                  type="date"
                  id="from"
                  placeholder="Date"
                  className="h-10 border-[1px] border-gray-300 bg-transparent p-3 text-white outline-0"
                ></input>
              </div>
              <div className="flex flex-col">
                <label for="to" className="mb-2 text-lg text-white">
                  To (Date)
                </label>
                <input
                  type="date"
                  id="to"
                  placeholder="Date"
                  className="h-10 border-[1px] border-gray-300 bg-transparent p-3 text-white outline-0"
                ></input>
              </div>
              <div className="flex flex-col">
                <label for="person" className="mb-2 text-lg text-white">
                  Number of Person
                </label>
                <input
                  type="number"
                  id="person"
                  placeholder="Person"
                  className="h-10 border-[1px] border-gray-300 bg-transparent p-3 text-white outline-0"
                ></input>
              </div>
              <div className="flex flex-col">
                <label for="destination" className="mb-2 text-lg text-white">
                  Destination
                </label>
                <input
                  type="text"
                  id="destination"
                  placeholder="Destination"
                  className="h-10 border-[1px] border-gray-300 bg-transparent p-3 text-white outline-0"
                ></input>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-5 pt-5">
              <div className="flex flex-col">
                <label for="destination" className="mb-2 text-lg text-white">
                  Special Request (if Any)
                </label>
                <textarea
                  placeholder="Write Your Special Request Here..."
                  className="h-36 border-[1px] border-gray-300 bg-transparent p-3 text-white outline-0"
                ></textarea>
              </div>
              <button
                type="submit"
                className="mt-3 border-[1px] border-gray-300 bg-white py-5 text-xl font-semibold text-black transition-all duration-300 hover:bg-transparent hover:text-white"
              >
                BOOK NOW
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
