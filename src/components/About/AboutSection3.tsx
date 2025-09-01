import React, { useEffect, useRef, useState } from 'react';
import { Linkedin } from 'lucide-react';

const AboutSection3: React.FC = () => {
    const [isHeaderVisible, setIsHeaderVisible] = useState(false);
    const [isProfileVisible, setIsProfileVisible] = useState(false);
    
    const headerRef = useRef<HTMLDivElement>(null);
    const profileRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.target === headerRef.current && entry.isIntersecting) {
                        setIsHeaderVisible(true);
                    }
                    if (entry.target === profileRef.current && entry.isIntersecting) {
                        setIsProfileVisible(true);
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '-50px 0px'
            }
        );

        if (headerRef.current) observer.observe(headerRef.current);
        if (profileRef.current) observer.observe(profileRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <div className=" bg-white text-black" style={{ fontFamily: 'Roboto, sans-serif' }}>
            <div className="max-w-6xl mx-auto px-6 pt-10 pb-20">
                {/* Header */}
                <div 
                    ref={headerRef}
                    className={`text-center mb-16 transition-all duration-1000 ease-out ${
                        isHeaderVisible 
                            ? 'opacity-100 translate-x-0' 
                            : 'opacity-0 -translate-x-20'
                    }`}
                >
                    <h1 className="text-5xl font-bold text-[#1B2951] mb-4 relative inline-block">
                        Meet Our Founder
                        <div className={`absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-[#1B2951] to-[#B99D54] rounded-full transition-all duration-700 delay-300 ${
                            isHeaderVisible ? 'scale-x-100' : 'scale-x-0'
                        }`}></div>
                    </h1>
                    <p className={`text-xl text-gray-600 mt-8 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-200 ${
                        isHeaderVisible 
                            ? 'opacity-100 translate-x-0' 
                            : 'opacity-0 -translate-x-10'
                    }`}>
                        Leadership excellence backed by decades of industry expertise and unwavering commitment to transforming careers.
                    </p>
                </div>

                {/* Founder Profile Section */}
                <div 
                    ref={profileRef}
                    className={`bg-gradient-to-br from-white to-gray-50/50 rounded-3xl p-12 shadow-2xl border border-[#B99D54]/20 relative overflow-hidden transition-all duration-1000 ease-out ${
                        isProfileVisible 
                            ? 'opacity-100 translate-x-0' 
                            : 'opacity-0 -translate-x-32'
                    }`}
                >
                    {/* Background Pattern */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[#1B2951]/5 to-transparent rounded-full -translate-y-32 translate-x-32"></div>
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-[#B99D54]/5 to-transparent rounded-full translate-y-24 -translate-x-24"></div>

                    <div className="relative z-10">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
                            {/* Profile Image Placeholder */}
                            <div className={`lg:col-span-1 flex justify-center transition-all duration-1000 delay-300 ${
                                isProfileVisible 
                                    ? 'opacity-100 translate-x-0' 
                                    : 'opacity-0 -translate-x-20'
                            }`}>
                                <div className="relative">
                                    <div className="w-72 h-72 bg-gradient-to-br from-[#1B2951] to-[#2a3f6b] rounded-2xl flex items-center justify-center shadow-2xl transform hover:scale-105 transition-transform duration-300">
                                        <div className="text-8xl font-bold text-[#B99D54]">AD</div>
                                    </div>
                                    {/* Decorative elements */}
                                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#B99D54] rounded-full animate-pulse"></div>
                                    <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#1B2951] rounded-full animate-pulse delay-300"></div>
                                </div>
                            </div>

                            {/* Profile Content */}
                            <div className="lg:col-span-2 space-y-8">
                                <div className={`transition-all duration-1000 delay-500 ${
                                    isProfileVisible 
                                        ? 'opacity-100 translate-x-0' 
                                        : 'opacity-0 -translate-x-16'
                                }`}>
                                    <h2 className="text-4xl font-bold text-[#1B2951] mb-2">Ajay Duggar</h2>
                                    <div className="space-y-2">
                                        <h3 className="text-2xl font-semibold text-[#B99D54]">Founder, CEO & Managing Director</h3>
                                        <h4 className="text-xl text-gray-600">RBG HR Services LLP</h4>
                                        <h4 className="text-xl text-gray-600">30+ years of leadership experience in
                                            insurance and HR consulting.</h4>
                                    </div>
                                </div>

                                {/* LinkedIn CTA */}
                                <div className={`flex justify-center lg:justify-start transition-all duration-1000 delay-700 ${
                                    isProfileVisible 
                                        ? 'opacity-100 translate-x-0' 
                                        : 'opacity-0 -translate-x-12'
                                }`}>
                                    <a
                                        href="https://www.linkedin.com/in/ajay-duggar/" target='_blank'
                                        className="group inline-flex items-center px-2 py-2 bg-[#1B2951] text-white border border-[#1B2951]
              text-sm font-medium tracking-widest uppercase
              transition-all duration-300 ease-in-out
              hover:bg-white hover:border-[#1B2951] hover:text-[#1B2951] hover:scale-105"
                                    >
                                        <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection3;