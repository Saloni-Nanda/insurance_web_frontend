import React, { useEffect, useRef, useState } from 'react';
import { Shield, Handshake, Award } from 'lucide-react';

const AboutSection2: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if section is visible for animation
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top < windowHeight * 0.8 && rect.bottom > 0) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="bg-white  px-4 sm:px-6 lg:px-8" ref={sectionRef}>
      <style>{`
        .slide-in-card {
          opacity: 0;
          transform: translateX(-100px);
          transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .slide-in-card.visible {
          opacity: 1;
          transform: translateX(0);
        }

        .slide-in-intro {
          opacity: 0;
          transform: translateX(-50px);
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .slide-in-intro.visible {
          opacity: 1;
          transform: translateX(0);
        }

        .slide-in-mission {
          opacity: 0;
          transform: translateX(-80px);
          transition: all 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .slide-in-mission.visible {
          opacity: 1;
          transform: translateX(0);
        }
      `}</style>
      <div className="max-w-4xl mx-auto">
        <div className={`text-center mb-12 slide-in-intro ${isVisible ? 'visible' : ''}`}>
          <h2 className="text-4xl font-bold leading-tight tracking-tight text-black mb-4">
            Our Mission
          </h2>
        </div>

        <div className="relative">
          <div className="pl-8 relative">
            <div className={`text-center bg-gray-50 px-4 py-4 rounded-lg shadow-sm border-x-4 slide-in-mission ${isVisible ? 'visible' : ''}`}
              style={{ borderLeftColor: '#1B2951', borderRightColor: '#1B2951', transitionDelay: '0.2s' }}>
              <p className="text-xl text-black leading-relaxed font-semibold">
                To connect insurers with the right talent, at the right time, and at the
right cost — helping our clients build high-performing teams that
drive growth.

              </p>
            </div>
          </div>
        </div>

        {/* Our Values Section */}
        <div className="mt-20">
          <div className={`text-center mb-12 slide-in-intro ${isVisible ? 'visible' : ''}`}
            style={{ transitionDelay: '0.4s' }}>
            <h3 className="text-4xl font-bold leading-tight tracking-tight text-black mb-4">
              Our Values
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Integrity */}
            <div className={`group hover:transform hover:-translate-y-2 transition-all duration-300 slide-in-card ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: '0.6s' }}>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                <div className="flex items-center justify-center w-16 h-16 rounded-full mb-6 mx-auto" style={{ backgroundColor: '#1B2951' }}>
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-black mb-4 text-center">Integrity</h4>
                <div className="flex-grow">
                  <p className="text-black font-semibold text-center leading-relaxed">
                    Transparent processes and ethical hiring practices.
                  </p>
                </div>
              </div>
            </div>

            {/* Partnership */}
            <div className={`group hover:transform hover:-translate-y-2 transition-all duration-300 slide-in-card ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: '0.7s' }}>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                <div className="flex items-center justify-center w-16 h-16 rounded-full mb-6 mx-auto" style={{ backgroundColor: '#1B2951' }}>
                  <Handshake className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-black mb-4 text-center">Partnership</h4>
                <div className="flex-grow">
                  <p className="text-black font-semibold text-center leading-relaxed">
                    Acting as an extension of your HR and Talent Acquisition team.
                  </p>
                </div>
              </div>
            </div>

            {/* Excellence */}
            <div className={`group hover:transform hover:-translate-y-2 transition-all duration-300 slide-in-card ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: '0.8s' }}>
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                <div className="flex items-center justify-center w-16 h-16 rounded-full mb-6 mx-auto" style={{ backgroundColor: '#1B2951' }}>
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-black mb-4 text-center">Excellence</h4>
                <div className="flex-grow">
                  <p className="text-black font-semibold text-center leading-relaxed">
                    Every mandate handled with rigor, speed, and quality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`mt-16 text-center slide-in-intro ${isVisible ? 'visible' : ''}`}
          style={{ transitionDelay: '0.9s' }}>
          <div className="inline-flex items-center space-x-2">
            <div
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: '#B99D54' }}
            ></div>
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: '#1B2951' }}
            ></div>
            <div
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: '#B99D54' }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection2;