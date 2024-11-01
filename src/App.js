import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/comon/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Clients from "./pages/Clients";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Footer from "./components/comon/Footer";
import "./App.css"

// service
import CareerCounselling from "./pages/services/CareerCounselling.jsx";
import WebDevelopment from "./pages/services/WebDevelopment.jsx";
import DigitalMarketing from "./pages/services/DigitalMarketing.jsx";
import SEO from "./pages/services/SEO.jsx";
import GraphicDesign from "./pages/services/GraphicDesign.jsx";
import ContentWriting from "./pages/services/ContentWriting.jsx";
function App() {
  return (
    <div className="w-screen min-h-screen font-poppins overflow-x-hidden">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/career-counselling" element={<CareerCounselling />} />
        <Route path="/services/web-development" element={<WebDevelopment />} />
        <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/services/search-engine-optimization" element={<SEO />} />
        <Route path="/services/graphic-designing" element={<GraphicDesign />} />
        <Route path="/services/content-writing" element={<ContentWriting />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact-us" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;