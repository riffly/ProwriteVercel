import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className="grid text-gray-700"
      data-aos="fade-zoom-in"
      data-aos-easing="ease-in-back"
      data-aos-delay="100"
      data-aos-offset="0"
    >
      <Navbar />
      <div className="-translate-y-72 md:translate-y-0">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
