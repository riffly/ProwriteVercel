import React, { useState } from "react";

const Carousel = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const pages = [
    {
      title: "Page 3",
      content:
        "Academic writing is an essential skill for researchers, educators, and students across disciplines. However, it is also a source of considerable anxiety, frustration, and even isolation.",
    },
  ];

  const goToPage = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  return (
    <div className="relative flex h-96 w-full items-center justify-center  overflow-hidden bg-parralax1 bg-cover bg-fixed">
      <div
        className="flex items-center  transition-transform duration-300 ease-in-out"
        style={{ transform: `translateX(-${currentPage * 100}%)` }}
      >
        {pages.map((pages, index) => (
          <div
            key={index}
            className="flex h-full w-full items-center justify-center"
          >
            <div className="flex w-1/2 text-center">
              {/* <h2 className=" mb-4 text-3xl font-bold ">{pages.title}</h2> */}
              <p className="text-2xl">{pages.content}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 left-0 right-0 mb-4 flex items-center justify-center">
        {pages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToPage(index)}
            className={`mx-2 h-3 w-3 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              currentPage === index ? "bg-blue-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
