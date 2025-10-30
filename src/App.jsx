import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Pages/Footer/Footer";
import Contact from "./Pages/Contact/Contact";
import ScrollToTop from "./Utils/ScrollToTop";
import Gallery from "./Pages/Gallery/Gallery";
import Portfolio from "./Pages/Portfolio/Portfoilo";
import Services from "./Pages/Services/Services";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";

const App = () => {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <div className="mainContent">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/projects" element={<Portfolio />} />
          <Route path="/services" element={<Services />} />
          {/* other routes */}
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;
