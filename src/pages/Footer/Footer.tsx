import { ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);


  // Show button when user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white text-black py-12 px-4 sm:px-4 lg:px-16 border-t border-gray-200 relative">
      <div className=" mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-8">
          
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 
              className="text-xl font-bold mb-6 text-[#B99D54] leading-tight tracking-tight"
              style={{ fontFamily: "'Roboto', serif" }}
            >
              RBG HR Services LLP
            </h3>
            <p 
              className="text-black mb-6 leading-relaxed"
              style={{ fontFamily: "'Roboto', serif" }}
            >
              Insurance Industry Hiring Specialists Since 2014. Building high-performing teams across India with deep domain expertise.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 
              className="text-lg font-bold mb-6 text-[#B99D54]"
              style={{ fontFamily: "'Roboto', serif" }}
            >
              Quick Links
            </h4>
            <nav className="flex flex-col gap-1 space-y-3 text-lg">
              <Link to='/'>
              <button 
                className="block text-left w-full text-black hover:text-[#B99D54] transition-colors duration-300 "
              >
                Home
              </button>
              </Link>
              <Link to='/about'>
              <button 
                className="block text-left w-full text-black hover:text-[#B99D54] transition-colors duration-300 "
              >
                About Us
              </button>
              </Link>
              <Link to='/service'>
              <button   
                className="block text-left w-full text-black hover:text-[#B99D54] transition-colors duration-300 "
              >
                Services
              </button>
              </Link>
              <Link to='/contact'>
              <button   
                className="block text-left w-full text-black hover:text-[#B99D54] transition-colors duration-300 "
              >
                Contact Us
              </button>
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 
              className="text-lg font-bold mb-6 text-[#B99D54]"
              style={{ fontFamily: "'Roboto', serif" }}
            >
              Contact Info
            </h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-[#B99D54] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                <a 
                  href="tel:+91-9088020777" 
                  className="text-black hover:text-[#B99D54] transition-colors duration-300 "
                >
                  +91-9088020777
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-[#B99D54] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                <a 
                  href="mailto:contact@rbghr.com" 
                  className="text-black hover:text-[#B99D54] transition-colors duration-300 "
                >
                  contact@rbghr.com
                </a>
              </div>

              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-[#B99D54] flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                </svg>
                <span className="text-black ">
                  Kolkata, India
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media & Bottom Bar */}
        <div className="border-t border-gray-300 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            {/* Social Media Links */}
            <div className="flex items-center space-x-6">
              <span className="text-black  text-sm">
                Follow us:
              </span>
              
              <a href="https://linkedin.com/company/rbghr" target="_blank" rel="noopener noreferrer"
                className="text-black hover:text-[#B99D54] transition-colors duration-300"
                aria-label="Follow us on LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>

              <a href="https://facebook.com/rbghr" target="_blank" rel="noopener noreferrer"
                className="text-black hover:text-[#B99D54] transition-colors duration-300"
                aria-label="Follow us on Facebook"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>

            {/* Copyright */}
            <div className="text-black text-sm ">
              © {new Date().getFullYear()} RBG HR Services LLP. All rights reserved.
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-26 right-6  text-[#9c8849] hover:text-white p-3 rounded-full shadow-lg hover:bg-[#9c8849] transition-colors duration-300 z-50"
          aria-label="Back to top"
        >
          <ArrowUp className='w-5 h-5 m-3'/>
        </button>
      )}

      {/* Google Fonts - Roboto */}
      <link 
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap" 
        rel="stylesheet" 
      />
    </footer>
  );
};

export default Footer;
