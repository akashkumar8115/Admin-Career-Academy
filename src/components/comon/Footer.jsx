import React from 'react'
import { Link } from 'react-router-dom'
import { FaLinkedin, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'
import { IoLocationSharp, IoMail, IoCall } from 'react-icons/io5'
import logo from '../../assets/logo.png'

const quickLinks = [
  { title: "Home", path: "/" },
  { title: "About Us", path: "/about" },
  { title: "Services", path: "/services" },
  { title: "Career Guidance", path: "/services/career-guidance" },
  { title: "Contact", path: "/contact-us" }
]

const services = [
  { title: "Career Counselling", path: "/services/career-counselling" },
  { title: "College Selection", path: "/services/colleges" },
  { title: "PG/Hostel Details", path: "/services/pg-hostel-details" },
  { title: "Internships & Jobs", path: "/internships-jobs" },
  { title: "Placement Support", path: "/services/placement-stats" }
]

const resources = [
  { title: "Blog", path: "/blogs" },
  { title: "Career Roadmap", path: "/services/career-roadmap" },
  { title: "Success Stories", path: "/clients" },
  { title: "Course Comparison", path: "/services/course-comparison" },
  { title: "Campus Life", path: "/services/campus-life" }
]

const Footer = () => {
  return (
      <footer className="bg-gradient-to-b from-white to-green-shade-50 pt-16 pb-8">
          <div className="w-11/12 lg:w-10/12 mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                  {/* Company Info */}
                  <div className="space-y-6">
                      <img src={logo} alt="ACA Logo" className="w-32" />
                      <p className="text-black-600 leading-relaxed">
                          Empowering careers through expert guidance and innovative solutions since 2021.
                      </p>
                      <div className="flex gap-4">
                          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
                             className="text-violet-50 hover:text-violet-100 transition-colors">
                              <FaLinkedin size={24} />
                          </a>
                          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                             className="text-violet-50 hover:text-violet-100 transition-colors">
                              <FaTwitter size={24} />
                          </a>
                          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                             className="text-violet-50 hover:text-violet-100 transition-colors">
                              <FaInstagram size={24} />
                          </a>
                          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"
                             className="text-violet-50 hover:text-violet-100 transition-colors">
                              <FaYoutube size={24} />
                          </a>
                      </div>
                  </div>

                  {/* Quick Links */}
                  <div>
                      <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                      <ul className="space-y-3">
                          {quickLinks.map((link, index) => (
                              <li key={index}>
                                  <Link to={link.path} className="text-black-600 hover:text-violet-50 transition-colors">
                                      {link.title}
                                  </Link>
                              </li>
                          ))}
                      </ul>
                  </div>

                  {/* Services */}
                  <div>
                      <h3 className="text-lg font-semibold mb-4">Our Services</h3>
                      <ul className="space-y-3">
                          {services.map((service, index) => (
                              <li key={index}>
                                  <Link to={service.path} className="text-black-600 hover:text-violet-50 transition-colors">
                                      {service.title}
                                  </Link>
                              </li>
                          ))}
                      </ul>
                  </div>

                  {/* Contact Info */}
                  <div>
                      <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                      <div className="space-y-4">
                          <p className="flex items-center gap-3 text-black-600">
                              <IoLocationSharp className="text-violet-50" />
                              Sector 17, Chandigarh, India
                          </p>
                          <p className="flex items-center gap-3 text-black-600">
                              <IoMail className="text-violet-50" />
                              info@acadmin.com
                          </p>
                          <p className="flex items-center gap-3 text-black-600">
                              <IoCall className="text-violet-50" />
                              +91 98765 43210
                          </p>
                      </div>
                  </div>
              </div>

              {/* Bottom Section */}
              <div className="pt-8 border-t border-gray-200">
                  <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                      <p className="text-black-600">© 2024 ACA Pvt. Ltd. All rights reserved.</p>
                      <div className="flex gap-6">
                          <Link to="/privacy-policy" className="text-black-600 hover:text-violet-50 transition-colors">
                              Privacy Policy
                          </Link>
                          <Link to="/terms" className="text-black-600 hover:text-violet-50 transition-colors">
                              Terms of Service
                          </Link>
                      </div>
                  </div>
              </div>
          </div>
      </footer>
  )
}

export default Footer