import React, { useEffect, useRef, useState } from 'react';
import { Shield, Award, Clock, MapPin, DollarSign } from 'lucide-react';

const AboutSection: React.FC = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [isPaused, setIsPaused] = useState(false);

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

    const cards = [
        {
            icon: Shield,
            title: 'Insurance Focused',
            description: '100% specialization in life, general, and health insurance, along with brokers and intermediaries.',
            highlights: ['100% specialization'],
            bgColor: '#B99D54'
        },
        {
            icon: Award,
            title: 'Proven Experience',
            description: 'Over a decade of expertise with frontline to CXO-level hiring.',
            highlights: ['Over a decade', 'CXO-level hiring'],
            bgColor: '#B99D54'
        },
        {
            icon: Clock,
            title: 'Speed & Accuracy',
            description: 'Structured processes and an active talent network for faster closures.',
            highlights: ['active talent network'],
            bgColor: '#B99D54'
        },
        {
            icon: MapPin,
            title: 'Pan-India Reach',
            description: 'Hiring capability across metros and tier-2/3 cities.',
            highlights: ['metros', 'tier-2/3 cities'],
            bgColor: '#B99D54'
        },
        {
            icon: DollarSign,
            title: 'Affordable Leadership Hiring',
            description: 'Retainer model at 1% of CTC.',
            highlights: ['1%', 'of CTC'],
            bgColor: '#B99D54'
        }
    ];

    // Duplicate cards for seamless infinite scroll
    const duplicatedCards = [...cards, ...cards];

    return (
        <section className="mt-28 md:mt-24 bg-white py-16 px-4 sm:px-6 lg:px-16" style={{ fontFamily: 'Roboto, sans-serif' }}>
            <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none; /* Chrome, Safari and Opera */
        }

        .slide-in-card {
          opacity: 0;
          transform: translateX(-100px);
          transition: all 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
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

        .continuous-scroll {
          animation: scroll 50s linear infinite;
        }

        .continuous-scroll.paused {
          animation-play-state: paused;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
            <div className="w-full mx-auto">

                <div className="relative w-full flex items-center justify-center">
                    <div className={`bg-gray-50 p-8 rounded-lg shadow-sm border-x-4  max-w-4xl text-center slide-in-intro ${isVisible ? 'visible' : ''}`}
                        style={{ borderLeftColor: '#1B2951', borderRightColor: '#1B2951'}}>
                        <p className="text-lg text-black leading-relaxed ">
                            <span className="font-bold" style={{ color: '#1B2951' }}>Founded in 2014</span>,
                            <span className="mx-2 font-bold" style={{ color: '#B99D54' }}>RBG HR Services LLP</span>
                            
                            <span className="font-semibold ml-1" style={{ color: '#1B2951' }}>serves exclusively the insurance industry</span>.
                        </p>
                    </div>
                </div>

                {/* Why RBG HR Section */}
                <div className="mt-20" ref={sectionRef}>
                    <div className={`text-center mb-12 slide-in-intro ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
                        <h3 className="text-3xl font-bold leading-tight tracking-tight text-black mb-4">
                            Why RBG HR ?
                        </h3>
                        <p className="text-lg text-black font-semibold max-w-6xl mx-auto leading-relaxed">
                            We understand the unique challenges and requirements of the insurance industry. Our specialized approach ensures we deliver the right talent at every level, from entry-level positions to executive leadership roles.
                        </p>
                    </div>

                    <div className="overflow-hidden w-full  mx-auto">
                        <div
                            ref={scrollContainerRef}
                            className={`flex gap-6 w-fit ${isVisible ? 'continuous-scroll' : ''} ${isPaused ? 'paused' : ''}`}
                            onMouseEnter={() => setIsPaused(true)}
                            onMouseLeave={() => setIsPaused(false)}
                        >
                            {duplicatedCards.map((card, index) => {
                                const Icon = card.icon;
                                return (
                                    <div key={index} className="flex-shrink-0 w-80">
                                        <div className={`group hover:transform hover:-translate-y-2 transition-all duration-300 h-full slide-in-card ${isVisible ? 'visible' : ''}`}
                                            style={{ transitionDelay: `${0.4 + (index % cards.length) * 0.1}s` }}>
                                            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                                                <div className="flex items-center justify-center w-16 h-16 rounded-full mb-6 mx-auto" style={{ backgroundColor: card.bgColor }}>
                                                    <Icon className="w-8 h-8 text-white" />
                                                </div>
                                                <h4 className="text-2xl font-bold text-black mb-4 text-center">{card.title}</h4>
                                                <div className="flex-grow">
                                                    <p className="text-gray-700 text-center leading-relaxed">
                                                        {card.title === 'Insurance Focused' && (
                                                            <>
                                                                <span className="font-semibold" style={{ color: '#1B2951' }}>100% specialization in life, general, and health insurance, along with brokers and intermediaries.</span> 
                                                            </>
                                                        )}
                                                        {card.title === 'Proven Experience' && (
                                                            <>
                                                             <span className="font-semibold" style={{ color: '#1B2951' }}>Over a decade  of expertise with frontline to CXO-level hiring.</span> 
                                                               
                                                            </>
                                                        )}
                                                        {card.title === 'Speed & Accuracy' && (
                                                            <>
                                                            <span className="font-semibold" style={{ color: '#1B2951' }}>Structured processes and an active talent network for faster closures.</span> 
                                                               
                                                            </>
                                                        )}
                                                        {card.title === 'Pan-India Reach' && (
                                                            <>
                                                             <span className="font-semibold" style={{ color: '#1B2951' }}> Hiring capability across metros and tier-2/3 cities</span> 
                                                                
                                                            </>
                                                        )}
                                                        {card.title === 'Affordable Leadership Hiring' && (
                                                            <>
                                                            <span className="font-semibold" style={{ color: '#1B2951' }}>Retainer model at 1% of CTC</span> 
                                                               
                                                            </>
                                                        )}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                
            </div>
        </section>
    );
};

export default AboutSection;