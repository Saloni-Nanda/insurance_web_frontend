import  { useEffect, useRef, useState } from 'react';

import { Briefcase, Users, ArrowRight } from "lucide-react";
import { Link } from 'react-router-dom';

export default function ServiceSection() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [isInsuranceCardVisible, setIsInsuranceCardVisible] = useState(false);
  const [isLeadershipCardVisible, setIsLeadershipCardVisible] = useState(false);
  const [isBottomCtaVisible, setIsBottomCtaVisible] = useState(false);
  
  const headerRef = useRef<HTMLDivElement>(null);
  const insuranceCardRef = useRef<HTMLDivElement>(null);
  const leadershipCardRef = useRef<HTMLDivElement>(null);
  const bottomCtaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === headerRef.current && entry.isIntersecting) {
            setIsHeaderVisible(true);
          }
          if (entry.target === insuranceCardRef.current && entry.isIntersecting) {
            setIsInsuranceCardVisible(true);
          }
          if (entry.target === leadershipCardRef.current && entry.isIntersecting) {
            setIsLeadershipCardVisible(true);
          }
          if (entry.target === bottomCtaRef.current && entry.isIntersecting) {
            setIsBottomCtaVisible(true);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '-50px 0px'
      }
    );

    if (headerRef.current) observer.observe(headerRef.current);
    if (insuranceCardRef.current) observer.observe(insuranceCardRef.current);
    if (leadershipCardRef.current) observer.observe(leadershipCardRef.current);
    if (bottomCtaRef.current) observer.observe(bottomCtaRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-white py-20 mt-24" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Header Section */}
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-1000 ease-out ${
            isHeaderVisible 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 -translate-x-20'
          }`}
        >
          <p className="text-3xl text-black max-w-2xl mx-auto leading-relaxed font-semibold">
            Exclusively dedicated to the insurance industry since 2014, delivering exceptional talent solutions with precision and expertise.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Insurance Recruitment Card */}
          <div 
            ref={insuranceCardRef}
            className={`group bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden ${
              isInsuranceCardVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 -translate-x-32'
            }`}
            style={{ transitionDuration: '1000ms', transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}
          >
            {/* Subtle background pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#B99D54]/5 to-transparent rounded-full transform translate-x-16 -translate-y-16"></div>

            <div className="relative z-10">
              {/* Icon */}
              <div className={`w-16 h-16 bg-[#1B2951] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#B99D54] transition-all duration-700 delay-200 ${
                isInsuranceCardVisible 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 -translate-x-8'
              }`}>
                <Users className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <div className={`transition-all duration-700 delay-300 ${
                isInsuranceCardVisible 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 -translate-x-12'
              }`}>
                <h3 className="text-2xl font-bold text-[#1B2951] mb-4 group-hover:text-[#1B2951] transition-colors">
                  Insurance Recruitment
                </h3>

                <p className="text-black leading-relaxed mb-6 font-semibold">
                  Since 2014, we've helped insurers build high-performing teams across India. Our recruitment covers frontline,
                  mid-level, senior, and specialist roles - from sales and branch operations to underwriting, claims, product, and
                  compliance - ensuring quick closures, strong retention, and pan-India reach.
                </p>
              </div>

              {/* CTA */}
              <div className={`transition-all duration-700 delay-500 ${
                isInsuranceCardVisible 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 -translate-x-8'
              }`}>
                <Link to='/contact'>
                  <div className="flex items-center text-[#1B2951] font-medium group-hover:text-[#B99D54] transition-colors cursor-pointer">
                    <span className="text-sm">Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Leadership Hiring Card */}
          <div 
            ref={leadershipCardRef}
            className={`group bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden ${
              isLeadershipCardVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 -translate-x-32'
            }`}
            style={{ transitionDuration: '1000ms', transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)', transitionDelay: '200ms' }}
          >
            {/* Subtle background pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#B99D54]/5 to-transparent rounded-full transform translate-x-16 -translate-y-16"></div>

            <div className="relative z-10">
              {/* Icon */}
              <div className={`w-16 h-16 bg-[#1B2951] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#B99D54] transition-all duration-700 delay-400 ${
                isLeadershipCardVisible 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 -translate-x-8'
              }`}>
                <Briefcase className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <div className={`transition-all duration-700 delay-500 ${
                isLeadershipCardVisible 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 -translate-x-12'
              }`}>
                <h3 className="text-2xl font-bold text-[#1B2951] mb-4 group-hover:text-[#1B2951] transition-colors">
                  Leadership Hiring
                </h3>

                <p className="text-black leading-relaxed mb-6 font-semibold">
                  Leadership talent is critical - but it doesn't have to come at a heavy price. Our retainer-based model delivers
                  CXO and senior leadership hiring at just 1% of CTC, giving insurers access to top executives with
                  affordability and uncompromised quality.
                </p>
              </div>

              {/* CTA */}
              <div className={`transition-all duration-700 delay-700 ${
                isLeadershipCardVisible 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 -translate-x-8'
              }`}>
                <Link to='/contact'>
                  <div className="flex items-center text-[#1B2951] font-medium group-hover:text-[#B99D54] transition-colors cursor-pointer">
                    <span className="text-sm">Learn More</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div 
          ref={bottomCtaRef}
          className={`text-center mt-16 pt-12 border-t border-gray-100 flex flex-col items-center justify-center transition-all duration-1000 ease-out ${
            isBottomCtaVisible 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 -translate-x-24'
          }`}
        >
          <p className={`text-gray-600 mb-6 font-semibold transition-all duration-700 delay-200 ${
            isBottomCtaVisible 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 -translate-x-16'
          }`}>
            Ready to find your next exceptional hire?
          </p>
          <div className={`transition-all duration-700 delay-400 ${
            isBottomCtaVisible 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 -translate-x-12'
          }`}>
            <Link to='/'>
              <button className="px-8 py-3.5 bg-[#1B2951] text-white border border-[#1B2951]
                  text-sm font-semibold tracking-widest leading-tight uppercase
                  transition-all duration-300 ease-in-out
                  hover:bg-white hover:border-[#1B2951] hover:text-[#1B2951] hover:scale-105
                  min-w-[140px] flex gap-2">
                Get Started Today
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}