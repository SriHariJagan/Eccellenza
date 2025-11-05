import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Pages/Footer/Footer";
import ScrollToTop from "./Utils/ScrollToTop";

// ✅ Lazy-loaded pages
const Home = lazy(() => import("./Pages/Home/Home"));
const About = lazy(() => import("./Pages/About/About"));
const Contact = lazy(() => import("./Pages/Contact/Contact"));
const Gallery = lazy(() => import("./Pages/Gallery/Gallery"));
const Portfolio = lazy(() => import("./Pages/Portfolio/Portfoilo"));
const Services = lazy(() => import("./Pages/Services/Services"));

const App = () => {
  return (
    <>
      <Suspense fallback={<div className="loading"><span className="loading-text">Loading...</span></div>}>
        <Navbar />
        <ScrollToTop />
        <div className="mainContent">
          {/* Suspense shows fallback while components load */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/projects" element={<Portfolio />} />
            <Route path="/services" element={<Services />} />
          </Routes>
          <Footer />
        </div>
      </Suspense>
    </>
  );
};

export default App;
