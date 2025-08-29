import  { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';



const HeroSection3= () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);



  return (
    <>
    <section className="flex flex-col justify-center items-center px-4 sm:px-8 py-16 bg-transparent">
      <div className="max-w-4xl w-full">
        

        {/* Headline */}
        <h1 
          className={`
            text-4xl sm:text-5xl lg:text-6xl xl:text-7xl 
            font-light text-white mb-8 
            leading-tight tracking-tight text-center
            transition-all duration-1000 ease-out
            ${isVisible 
              ? 'translate-x-0 opacity-100' 
              : '-translate-x-full opacity-0'
            }
          `}
          style={{ fontFamily: "'Roboto', serif" }}
        >
          Ready to Build Your Winning Team?
        </h1>

        {/* CTA Button */}
        <div 
          className={`
            flex justify-center items-center
            transition-all duration-1000 ease-out delay-300
            ${isVisible 
              ? 'translate-x-0 opacity-100' 
              : '-translate-x-full opacity-0'
            }
          `}
        >
            <Link to='/contact'>
          <button 
            className="
              px-8 py-3.5 bg-white text-[#1B2951] border border-[#1B2951]
              text-sm font-medium tracking-widest uppercase
              transition-all duration-300 ease-in-out
              hover:bg-[#1B2951] hover:border-[#1B2951] hover:text-white hover:scale-105
              min-w-[140px]
              focus:outline-none focus:ring-2 focus:ring-[#B99D54] focus:ring-opacity-50
            "
            style={{ fontFamily: "'Roboto', serif" }}
          >
            Get in Touch
          </button>
          </Link>
        </div>

        {/* Subtle animation elements
        <div className="absolute inset-0 pointer-events-none">
          <div 
            className={`
              absolute top-1/4 left-1/4 w-2 h-2 rounded-full
              transition-opacity duration-1000 delay-600
              ${isVisible ? 'opacity-20 animate-pulse' : 'opacity-0'}
            `}
            style={{ background: 'linear-gradient(45deg, #B99D54, #1B2951)' }}
          />
          <div 
            className={`
              absolute bottom-1/3 right-1/4 w-1 h-1 rounded-full
              transition-opacity duration-1000 delay-900
              ${isVisible ? 'opacity-30 animate-pulse' : 'opacity-0'}
            `}
            style={{ 
              background: 'linear-gradient(45deg, #1B2951, #B99D54)',
              animationDelay: '1s'
            }}
          />
        </div> */}
      </div>

      {/* Additional subtle background gradient overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          background: `
            radial-gradient(circle at 20% 80%, #1B2951 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, #B99D54 0%, transparent 50%)
          `
        }}
      />
    </section>
    </>
  );
};

export default HeroSection3;