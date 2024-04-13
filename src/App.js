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
<>
      <Navbar />
    
        <Outlet />
      
      <Footer />
    </>
  );
}

export default App;
