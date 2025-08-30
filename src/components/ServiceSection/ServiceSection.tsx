import { useEffect, useRef, useState } from 'react';
import { Briefcase, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from 'react-router-dom';

export default function ServiceSection() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [isLeadershipCardVisible, setIsLeadershipCardVisible] = useState(false);
  const [isOfferSectionVisible, setIsOfferSectionVisible] = useState(false);
  const [areFeatureCardsVisible, setAreFeatureCardsVisible] = useState(false);
  const [isBottomCtaVisible, setIsBottomCtaVisible] = useState(false);

  const headerRef = useRef(null);
  const leadershipCardRef = useRef(null);
  const offerSectionRef = useRef(null);
  const featureCardsRef = useRef(null);
  const bottomCtaRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === headerRef.current && entry.isIntersecting) {
            setIsHeaderVisible(true);
          }
          if (entry.target === leadershipCardRef.current && entry.isIntersecting) {
            setIsLeadershipCardVisible(true);
          }
          if (entry.target === offerSectionRef.current && entry.isIntersecting) {
            setIsOfferSectionVisible(true);
          }
          if (entry.target === featureCardsRef.current && entry.isIntersecting) {
            setAreFeatureCardsVisible(true);
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
    if (leadershipCardRef.current) observer.observe(leadershipCardRef.current);
    if (offerSectionRef.current) observer.observe(offerSectionRef.current);
    if (featureCardsRef.current) observer.observe(featureCardsRef.current);
    if (bottomCtaRef.current) observer.observe(bottomCtaRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-white py-20 mt-24" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Header Section */}
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-1000 ease-out ${isHeaderVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
            }`}
        >
          <p className="text-3xl text-black max-w-5xl mx-auto leading-relaxed font-semibold">
            Exclusively dedicated to the insurance industry since 2014, delivering exceptional talent solutions with precision and expertise.
          </p>
        </div>

        {/* Leadership Hiring Card - Centered */}
        <div className="flex justify-center mb-20">
          <div
            ref={leadershipCardRef}
            className={`group bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden max-w-4xl w-full ${isLeadershipCardVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-12'
              }`}
            style={{
              transitionDuration: '1000ms',
              transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
              transitionDelay: '200ms'
            }}
          >
            {/* Subtle background pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#B99D54]/5 to-transparent rounded-full transform translate-x-16 -translate-y-16"></div>

            <div className="relative z-10 text-center">
              {/* Icon */}
              <div className={`w-16 h-16 bg-[#1B2951] rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:bg-[#B99D54] transition-all duration-700 delay-400 ${isLeadershipCardVisible
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-90'
                }`}>
                <Briefcase className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <div className={`transition-all duration-700 delay-500 ${isLeadershipCardVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'
                }`}>
                <h3 className="text-4xl font-bold text-[#1B2951] mb-4">
                  Leadership Hiring
                </h3>

                <p className="text-black leading-relaxed mb-6 font-medium">
                  Leadership talent is critical - but it doesn't have to come at a heavy price. Our retainer-based model delivers CXO and senior leadership hiring at just 1% of CTC, giving insurers access to top executives with affordability and uncompromised quality.
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* What We Offer Section */}
        <div
          ref={offerSectionRef}
          className={`text-center mb-12 transition-all duration-1000 ease-out ${isOfferSectionVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
            }`}
        >
          <h2 className="text-4xl font-bold text-[#1B2951] mb-16">What We Offer</h2>
        </div>

        {/* Feature Cards Grid */}
        <div
          ref={featureCardsRef}
          className={`grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 transition-all duration-1000 ease-out ${areFeatureCardsVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-12'
            }`}
        >
          {/* CXO & VP Hiring Card */}
          <div className="bg-[#1B2951] text-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-start mb-4">
              <div className="w-6 h-6 rounded-full border-2 border-[#B99D54] flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                <CheckCircle className="w-4 h-4 text-[#B99D54]" />
              </div>
              <h3 className="text-xl font-bold text-[#B99D54]">CXO & VP Hiring Across Functions</h3>
            </div>
            <p className="text-gray-200 leading-relaxed ml-9">
              We specialize in senior-level recruitment, ensuring top leadership talent is placed across diverse functions with precision and speed.
            </p>
          </div>

          {/* Dedicated Consultant Support Card */}
          <div className="bg-[#1B2951] text-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-start mb-4">
              <div className="w-6 h-6 rounded-full border-2 border-[#B99D54] flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                <CheckCircle className="w-4 h-4 text-[#B99D54]" />
              </div>
              <h3 className="text-xl font-bold text-[#B99D54]">Dedicated Consultant Support</h3>
            </div>
            <p className="text-gray-200 leading-relaxed ml-9">
              Our consultants act as an extension of your HR team, providing personalized support and industry insights throughout the hiring journey.
            </p>
          </div>

          {/* Discreet & Confidential Search Card */}
          <div className="bg-[#1B2951] text-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-start mb-4">
              <div className="w-6 h-6 rounded-full border-2 border-[#B99D54] flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                <CheckCircle className="w-4 h-4 text-[#B99D54]" />
              </div>
              <h3 className="text-xl font-bold text-[#B99D54]">Discreet & Confidential Search</h3>
            </div>
            <p className="text-gray-200 leading-relaxed ml-9">
              We handle leadership hiring with utmost confidentiality, safeguarding sensitive information while ensuring market integrity.
            </p>
          </div>

          {/* Competency-Based Assessments Card */}
          <div className="bg-[#1B2951] text-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="flex items-start mb-4">
              <div className="w-6 h-6 rounded-full border-2 border-[#B99D54] flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                <CheckCircle className="w-4 h-4 text-[#B99D54]" />
              </div>
              <h3 className="text-xl font-bold text-[#B99D54]">Competency-Based Assessments</h3>
            </div>
            <p className="text-gray-200 leading-relaxed ml-9">
              We evaluate candidates beyond resumes, using proven frameworks to assess leadership qualities, cultural fit, and long-term potential.
            </p>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div
          ref={bottomCtaRef}
          className={`text-center pt-12 border-t border-gray-100 transition-all duration-1000 ease-out ${isBottomCtaVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
            }`}
        >
          <Link to='/contact'>
            <button className={`bg-[#1B2951] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#B99D54] transition-all duration-300 inline-flex items-center ${isBottomCtaVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              GET STARTED TODAY
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}