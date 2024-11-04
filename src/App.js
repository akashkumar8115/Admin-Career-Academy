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

// Career Routes
import InternshipsAndJobs from "./pages/InternshipsAndJobs.jsx";
import Internships from "./pages/Internships.jsx";
import InternshipsDetail from "./pages/InternshipsDetail.jsx";
// import Intern from "./pages/Internships.jsx";
// import InternshipJobs from "./pages/Internships";
// import Internship from "./pages/InternshipsAndJobs.jsx";
import Jobs from "./pages/Jobs";
import JobDetail from "./pages/JobDetail";


// Application Routes
// import JobList from "./pages/JobList";
// import JobSearch from "./pages/JobSearch";
// import JobFilter from "./pages/JobFilter";
// import JobSort from "./pages/JobSort";
// import JobApply from "./pages/JobApply";
// import JobApplication from "./pages/JobApplication";
// import JobApplicationSuccess from "./pages/JobApplicationSuccess";
// import JobApplicationFailure from "./pages/JobApplicationFailure";
// import JobApplicationCancel from "./pages/JobApplicationCancel";
// import JobApplicationError from "./pages/JobApplicationError";
// import JobApplicationPending from "./pages/JobApplicationPending";
// import JobApplicationExpired from "./pages/JobApplicationExpired";
// import JobApplicationRejected from "./pages/JobApplicationRejected";
// import JobApplicationAccepted from "./pages/JobApplicationAccepted";
// import JobApplicationCompleted from "./pages/JobApplicationCompleted";
// import JobApplicationCancelled from "./pages/JobApplicationCancelled";
// import JobApplicationOnHold from "./pages/JobApplicationOnHold";
// import JobApplicationInReview from "./pages/JobApplicationInReview";
// import JobApplicationInProgress from "./pages/JobApplicationInProgress";


// Services Routes
import CareerCounselling from "./pages/services/CareerCounselling";
import WebDevelopment from "./pages/services/WebDevelopment";
import DigitalMarketing from "./pages/services/DigitalMarketing";
import SEO from "./pages/services/SEO";
import GraphicDesign from "./pages/services/GraphicDesign";
import ContentWriting from "./pages/services/ContentWriting";

function App() {
  return (
    <div className="w-screen min-h-screen bg-gray-50 font-poppins overflow-x-hidden">
      <Navbar />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          {/* Career Routes */}
          <Route path="/internships-jobs" element={<InternshipsAndJobs />} />
          <Route path="/internships" element={<Internships />} />
          <Route path="/internships/:id" element={<InternshipsDetail />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/job/:id" element={<JobDetail />} />

          {/* Services Routes */}
          <Route path="/services" element={<Services />} />
          <Route path="/services/career-counselling" element={<CareerCounselling />} />
          <Route path="/services/web-development" element={<WebDevelopment />} />
          <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/services/seo" element={<SEO />} />
          <Route path="/services/graphic-design" element={<GraphicDesign />} />
          <Route path="/services/content-writing" element={<ContentWriting />} />

          {/* Other Routes */}
          <Route path="/clients" element={<Clients />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact-us" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;