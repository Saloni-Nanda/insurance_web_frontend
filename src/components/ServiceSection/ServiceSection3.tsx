import React, { useEffect, useRef, useState } from "react";
import { CheckCircle } from "lucide-react";

interface Offering {
  title: string;
  description: string;
}

const ServiceSection3: React.FC = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState<boolean[]>([false, false, false, false]);
  
  const headerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const offerings: Offering[] = [
    {
      title: "CXO & VP Hiring Across Functions",
      description:
        "We specialize in senior-level recruitment, ensuring top leadership talent is placed across diverse functions with precision and speed."
    },
    {
      title: "Dedicated Consultant Support",
      description:
        "Our consultants act as an extension of your HR team, providing personalized support and industry insights throughout the hiring journey."
    },
    {
      title: "Discreet & Confidential Search",
      description:
        "We handle leadership hiring with utmost confidentiality, safeguarding sensitive information while ensuring trust and integrity."
    },
    {
      title: "Competency-Based Assessments",
      description:
        "We evaluate candidates beyond resumes, using proven frameworks to assess leadership qualities, cultural fit, and long-term potential."
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === headerRef.current && entry.isIntersecting) {
            setIsHeaderVisible(true);
          }
          
          // Handle card visibility
          cardRefs.current.forEach((cardRef, index) => {
            if (entry.target === cardRef && entry.isIntersecting) {
              setVisibleCards(prev => {
                const newVisible = [...prev];
                newVisible[index] = true;
                return newVisible;
              });
            }
          });
        });
      },
      {
        threshold: 0.1,
        rootMargin: '-50px 0px'
      }
    );

    if (headerRef.current) observer.observe(headerRef.current);
    cardRefs.current.forEach(cardRef => {
      if (cardRef) observer.observe(cardRef);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-white pb-6 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header */}
        <div 
          ref={headerRef}
          className={`mb-12 transition-all duration-1000 ease-out ${
            isHeaderVisible 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 -translate-x-20'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-light text-[#1B2951] tracking-tight">
            What We Offer
          </h2>
        </div>

        {/* Offerings Grid */}
        <div className="grid md:grid-cols-2 gap-8 text-left">
          {offerings.map((offer, index) => (
            <div
              key={index}
              ref={el => cardRefs.current[index] = el}
              className={`flex items-start gap-4 bg-[#1B2951] text-white p-6 rounded-2xl shadow-lg border border-[#B99D54] hover:shadow-2xl transition-all duration-300 ${
                visibleCards[index] 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 -translate-x-32'
              }`}
              style={{ 
                transitionDuration: '1000ms', 
                transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
                transitionDelay: `${index * 150}ms`
              }}
            >
              <div className={`transition-all duration-700 ${
                visibleCards[index] 
                  ? 'opacity-100 translate-x-0 scale-100' 
                  : 'opacity-0 -translate-x-8 scale-75'
              }`}
              style={{ transitionDelay: `${(index * 150) + 200}ms` }}>
                <CheckCircle className="w-6 h-6 text-[#B99D54] flex-shrink-0 mt-1" />
              </div>
              
              <div className={`transition-all duration-700 ${
                visibleCards[index] 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 -translate-x-12'
              }`}
              style={{ transitionDelay: `${(index * 150) + 300}ms` }}>
                <h3 className="text-xl font-semibold mb-2 text-[#B99D54]">
                  {offer.title}
                </h3>
                <p className="text-base text-gray-200 leading-relaxed">
                  {offer.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceSection3;