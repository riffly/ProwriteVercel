import React, { useState } from "react";

const Carousel = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const pages = [
    {
      title: "Page 1",
      content: "This is the content of page 1.",
    },
    {
      title: "Page 2",
      content: "This is the content of page 2.",
    },
    {
      title: "Page 3",
      content: "This is the content of page 3.",
    },
  ];

  const goToPage = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  return (
    <div className="relative w-full h-64 overflow-hidden bg-parralax1 bg-cover  bg-fixed">
      <div className="flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${currentPage * 100}%)` }}>
        {pages.map((page, index) => (
          <div key={index} className="w-full h-full flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">{page.title}</h2>
              <p>{page.content}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center mb-4">
        {pages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToPage(index)}
            className={`w-3 h-3 mx-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 ${currentPage === index ? 'bg-blue-500' : 'bg-gray-300'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
