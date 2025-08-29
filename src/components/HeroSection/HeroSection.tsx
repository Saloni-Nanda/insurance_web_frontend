import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';



const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="mt-28 md:mt-24 flex flex-col justify-center items-center  px-4 sm:px-8 py-12 bg-white">
      <div className="max-w-4xl w-full">
        {/* Headline */}
        <h1 
          className={`
            text-4xl sm:text-5xl lg:text-6xl xl:text-7xl 
            font-light text-[#1B2951] mb-8 
            leading-tight tracking-tight
            transition-all duration-1000 ease-out text-center
            ${isVisible 
              ? 'translate-x-0 opacity-100' 
              : '-translate-x-full opacity-0'
            }
          `}
          style={{ fontFamily: "'Roboto', serif" }}
        >
          Insurance Industry Hiring Specialists Since 2014
        </h1>

        {/* Subheading */}
        <p 
          className={`
            text-lg sm:text-xl text-gray-600 mb-12 
            font-light leading-relaxed max-w-2xl mx-auto
            transition-all duration-1000 ease-out delay-300 text-justify
            ${isVisible 
              ? 'translate-x-0 opacity-100' 
              : '-translate-x-full opacity-0'
            }
          `}
          style={{ fontFamily: "'Roboto', serif" }}
        >
          With deep domain expertise and a pan-India delivery model, RBG HR Services LLP helps Life, Health, and
 General Insurers build high-performing teams across India. From frontline to senior roles, we deliver quick
 closures and strong retention.
        </p>

        {/* CTA Buttons */}
        <div 
          className={`
            flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center items-center
            transition-all duration-1000 ease-out delay-600
            ${isVisible 
              ? 'translate-x-0 opacity-100' 
              : '-translate-x-full opacity-0'
            }
          `}
        >
            <Link to='/service'>
          <button 
            className="
              px-8 py-3.5 bg-[#1B2951] text-white border border-[#1B2951]
              text-sm font-medium tracking-widest uppercase
              transition-all duration-300 ease-in-out
              hover:bg-white hover:border-[#1B2951] hover:text-[#1B2951] hover:scale-105
              min-w-[140px]
            "
            style={{ fontFamily: "'Roboto', serif" }}
          >
            Hire With Us
          </button>
          </Link>
          <Link to='/contact'>
          <button 
            className="
              px-8 py-3.5 bg-transparent text-[#1B2951] border border-[#B99D54]
              text-sm font-medium tracking-widest uppercase
              transition-all duration-300 ease-in-out
              hover:bg-[#B99D54] hover:text-white hover:scale-105
              min-w-[140px]
            "
            style={{ fontFamily: "'Roboto', serif" }}
          >
            Learn More
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;