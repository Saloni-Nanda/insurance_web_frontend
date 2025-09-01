import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  // Sample background images - replace these URLs with your actual images
  const backgroundImages = [
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2084&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2070&auto=format&fit=crop'
  ];

  useEffect(() => {
    // Trigger text animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Auto-slide images every 6 seconds
    const slideInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % backgroundImages.length
      );
    }, 6000);

    return () => clearInterval(slideInterval);
  }, [backgroundImages.length]);

  return (
    <section className="mt-28 md:mt-24 relative  flex flex-col justify-center items-center px-4 sm:px-8 py-12 overflow-hidden" style={{ fontFamily: 'Roboto, sans-serif' }}>
      {/* Background Image Carousel */}
      <div className="absolute inset-0 w-full h-full">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`
              absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat
              transition-all duration-1000 ease-in-out
              ${index === currentImageIndex 
                ? 'opacity-70 scale-110' 
                : 'opacity-0 scale-100'
              }
            `}
            style={{
              backgroundImage: `url(${image})`,
              animation: index === currentImageIndex 
                ? 'slowZoom 6s ease-in-out forwards' 
                : 'none'
            }}
          />
        ))}
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 to-white/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl w-full ">
        {/* Headline */}
        <h1 
          className={`
            text-3xl sm:text-4xl lg:text-5xl 
            font-semibold text-[#1B2951] mb-8 
            leading-tight tracking-tight
            transition-all duration-1000 ease-out text-center  mx-auto
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
            text-lg sm:text-xl text-black mb-12 
            font-bold leading-relaxed max-w-8xl mx-auto
            transition-all duration-1000 ease-out delay-300 text-center
            drop-shadow-sm
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
         
          <Link to='/about'>
            <button 
              className="
                px-8 py-3.5 bg-white/90 text-[#1B2951] border border-[#B99D54]
                text-sm font-semibold tracking-widest uppercase
                transition-all duration-300 ease-in-out
                hover:bg-[#B99D54] hover:text-white hover:scale-105
                min-w-[140px] drop-shadow-lg backdrop-blur-sm
              "
              style={{ fontFamily: "'Roboto', serif" }}
            >
              Learn More
            </button>
          </Link>
        </div>

       
      </div>

      {/* CSS Animation for Zoom Effect */}
      <style>{`
        @keyframes slowZoom {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(1.1);
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;