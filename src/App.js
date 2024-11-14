import React from "react";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollTop from "./components/common/ScrollTop.jsx";

import Navbar from "./components/common/Navbar.jsx";
import InitialLoader from './components/loader/InitialLoader'
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Clients from "./pages/Clients";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Footer from "./components/common/Footer.jsx";
import "./App.css"

// Career Routes
import InternshipsAndJobs from "./pages/InternshipsAndJobs.jsx";
import Internships from "./pages/Internships.jsx";
import InternshipsDetail from "./pages/InternshipsDetail.jsx";
import Courses from "./components/internshipJob/Courses.jsx";
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

// career Routes
import CollegeList from "./pages/services/CollegeList.jsx";
import CollegeDetails from "./pages/services/CollegeDetails.jsx";
import HostelDetails from "./pages/services/HostelDetails.jsx";
import PGHostelDetails from "./pages/services/PGHostelDetails";
import HostelRules from "./pages/services/HostelRules";
import CareerGuidance from "./pages/services/CareerGuidance.jsx";
import CareerGuidanceDetails from "./pages/services/CareerGuidanceDetails.jsx";
import ScholarshipDetails from "./pages/services/ScholarshipDetails";
import AdmissionProcess from "./pages/services/AdmissionProcess";
import PlacementStats from "./pages/services/PlacementStats";
import CourseComparison from "./pages/services/CourseComparison";
import CampusLife from "./pages/services/CampusLife";
import CareerRoadmap from "./pages/services/CareerRoadmap";
// tech service
import IT_Tech_Based from "./pages/services/IT_Tech_Based.jsx";
import Aca_Scholarship_program from "./pages/services/Aca_Schorarship_program.jsx";
import CareerGuidanceProgram from "./pages/services/CareerGuidanceProgram.jsx";



// Add these imports
import PrivateRoute from './components/PrivateRoute';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ForgotPassword from './pages/auth/ForgotPassword';
import Profile from './pages/auth/Profile';
import UpdateProfile from './pages/auth/UpdateProfile';
import WhatsAppButton from "./components/common/WhatsAppButton";

//About Routes

import AboutCompany from "./pages/about/AboutCompany.jsx";
import OurStory from "./pages/about/OurStory.jsx";
import OurTeam from "./pages/about/OurTeam.jsx";
import Member from "./components/about1/Member.jsx";
import NotFound from './pages/NotFound';
import Counselling from "./pages/services/Counselling.jsx";
function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 10 });
  }, [location.pathname]);


  useEffect(() => {
    // Initialize AOS animations
    AOS.init({
      once: true,
      duration: 900,
      easing: "ease-out-sine",
      delay: 100,
    });
  }, []);

  AOS.refresh();
  return (
    <div className="w-screen min-h-screen font-poppins overflow-x-hidden">
      <InitialLoader />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Auth Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/profile" element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          } />
          <Route path="/update-profile" element={
            <PrivateRoute>
              <UpdateProfile />
            </PrivateRoute>
          } />
          {/* About Routes */}
          <Route path="/about" element={<About />} />
          <Route path="/about/about-company" element={<AboutCompany />} />
          <Route path="/about/our-story" element={<OurStory />} />
          <Route path="/about/our-team" element={<OurTeam />} />
          <Route path="/about/our-team/:memberName" element={<Member />} />
          <Route path="/about/our-blog" element={<Our_Blog />} />
          <Route path="/about/our-blog/:id" element={<BlogFullArticle />} />

          {/* Career Routes */}
          <Route path="/services/internships-jobs" element={<InternshipsAndJobs />} />
          <Route path="/services/internships-jobs/:type" element={<Courses />} />
          <Route path="/services/internships" element={<Internships />} />
          <Route path="/services/internships/:id" element={<InternshipsDetail />} />
          <Route path="/services/jobs" element={<Jobs />} />
          {/* <Route path="job/:id" element={<JobDetail />} /> */}

          {/* Services Routes */}
          <Route path="/services" element={<Services />} />
          <Route path="/services/counselling-sessions" element={<Counselling/>}/>
          <Route path="/services/career-counselling" element={<CareerCounselling />} />
          <Route path="/services/web-development" element={<WebDevelopment />} />
          <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/services/seo" element={<SEO />} />
          <Route path="/services/graphic-design" element={<GraphicDesign />} />
          <Route path="/services/content-writing" element={<ContentWriting />} />
          {/* career guidance */}
          <Route path="/services/career-guidance" element={<CareerGuidance />} />
          {/* <Route path="/services/career-guidance/:id" element={<CareerGuidanceDetails />} /> */}
          <Route path="/services/colleges" element={<CollegeList />} />
          <Route path="/services/colleges/:id" element={<CollegeDetails />} />
          <Route path="/services/hostels/:id" element={<HostelDetails />} />
          <Route path="/services/pg-hostel-details" element={<PGHostelDetails />} />
          <Route path="/services/hostel-rules" element={<HostelRules />} />
          {/* <Route path="/services/career-guidance/:id" element={<CareerGuidanceDetails />} /> */}
          <Route path="/services/scholarship-details" element={<ScholarshipDetails />} />
          <Route path="/services/admission-process" element={<AdmissionProcess />} />
          <Route path="/services/placement-stats" element={<PlacementStats />} />
          <Route path="/services/course-comparison" element={<CourseComparison />} />
          <Route path="/services/campus-life" element={<CampusLife />} />
          <Route path="/services/career-roadmap" element={<CareerRoadmap />} />

          {/* tech service */}
          <Route path="services/it-tech-based-services" element={<IT_Tech_Based />} />
          <Route path="services/aca-scholarship-program" element={<Aca_Scholarship_program />} />
          <Route path="services/career-guidance-program" element={<CareerGuidanceProgram />} />
          {/* Other Routes */}
          <Route path="/clients" element={<Clients />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <ScrollTop />
      <WhatsAppButton />
      <Footer />

    </div>
  );
}

export default App;