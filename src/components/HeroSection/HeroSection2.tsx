import { Target, Users } from "lucide-react"
import { useEffect, useState } from "react";

const HeroSection2 = () => {
    const [isLeadershipVisible, setIsLeadershipVisible] = useState<boolean>(false);
    const [scrollOffset, setScrollOffset] = useState<number>(0);

    useEffect(() => {
        const handleScroll = () => {
            const leadershipSection = document.getElementById('leadership-section');
            if (leadershipSection) {
                const rect = leadershipSection.getBoundingClientRect();
                const isInView = rect.top < window.innerHeight * 0.8;

                // Set visibility
                if (isInView && !isLeadershipVisible) {
                    setIsLeadershipVisible(true);
                }

                // Calculate scroll offset for icon movement when section is visible
                if (isInView) {
                    const scrollProgress = Math.max(0, Math.min(1, (window.innerHeight * 0.8 - rect.top) / (window.innerHeight * 0.8)));
                    setScrollOffset(scrollProgress * 100); // 0 to 100 based on scroll progress
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check initial position

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isLeadershipVisible]);

    return (
        <div>

            <section
                id="leadership-section"
                className="py-20 bg-gray-100"
            >
                <div className="px-4 sm:px-4 lg:px-16 mx-auto w-full max-w-7xl">
                    {/* Section Title */}
                    <div className="text-center mb-16">
                        <h2
                            className={`
                text-3xl sm:text-4xl lg:text-5xl font-light text-[#1B2951] mb-4
                transition-all duration-1000 ease-out
                ${isLeadershipVisible
                                    ? 'translate-x-0 opacity-100'
                                    : '-translate-x-full opacity-0'
                                }
              `}
                            style={{ fontFamily: "'Roboto', serif" }}
                        >
                            Leadership Hiring, Redefined
                        </h2>
                    </div>

                    {/* Content Layout */}
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Left: Text Content */}
                        <div
                            className={`
                transition-all duration-1000 ease-out delay-300
                ${isLeadershipVisible
                                    ? 'translate-x-0 opacity-100'
                                    : '-translate-x-full opacity-0'
                                }
              `}
                        >
                            <h3
                                className="text-2xl sm:text-3xl font-medium text-[#1B2951] mb-6  leading-tight tracking-tight"
                                style={{ fontFamily: "'Roboto', serif" }}
                            >
                                CXO & Senior Recruitment at Just 1% of CTC
                            </h3>

                            <p
                                className="text-lg text-black leading-relaxed text-justify font-light"
                                style={{ fontFamily: "'Roboto', serif" }}
                            >
                                Our Retainer Model ensures affordability without compromising quality.
                                We understand that finding the right leadership talent is crucial for your organization's success,
                                which is why we've developed a cost-effective approach that delivers exceptional results
                                while maintaining the highest standards of recruitment excellence.
                            </p>
                        </div>

                        {/* Right: Illustration */}
                        <div
                            className={`
    flex justify-center lg:justify-end
    transition-all duration-1000 ease-out delay-600 mr-0 lg:mr-24
    ${isLeadershipVisible
                                    ? 'translate-x-0 opacity-100'
                                    : '-translate-x-full opacity-0'
                                }
  `}
                        >
                            <div className="relative ">
                                {/* Main Image Container */}
                                <div className="w-full h-64 shadow-lg flex items-center justify-center relative">
                                    <img
                                        src="/team.jpg" // replace with actual URL
                                        alt="Leadership illustration"
                                        className="w-full h-full object-cover rounded-lg"
                                    />

                                    {/* Accent Elements with Scroll-Based Movement */}
                                    <div
                                        className={`
                                            absolute -top-4 -right-4 w-12 h-12 bg-[#B99D54] rounded-full 
                                            flex items-center justify-center shadow-md
                                            transition-opacity duration-1000 ease-out delay-1000
                                            ${isLeadershipVisible ? 'opacity-100' : 'opacity-0'}
                                        `}
                                        style={{
                                            transform: isLeadershipVisible
                                                ? `translateX(${scrollOffset * -1.2}px)`
                                                : 'translateX(300px)'
                                        }}
                                    >
                                        <Target size={24} className="text-white" strokeWidth={2} />
                                    </div>
                                    <div
                                        className={`
                                            absolute -bottom-4 -left-4 w-12 h-12 bg-[#1B2951] rounded-full 
                                            flex items-center justify-center shadow-md
                                            transition-opacity duration-1000 ease-out delay-1200
                                            ${isLeadershipVisible ? 'opacity-100' : 'opacity-0'}
                                        `}
                                        style={{
                                            transform: isLeadershipVisible
                                                ? `translateX(${-scrollOffset * -1.2}px)`
                                                : 'translateX(-300px)'
                                        }}
                                    >
                                        <Users size={24} className="text-white" strokeWidth={2} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    )
}

export default HeroSection2