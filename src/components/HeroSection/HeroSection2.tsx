
import { useEffect, useState } from "react";

const HeroSection2 = () => {
    const [isLeadershipVisible, setIsLeadershipVisible] = useState<boolean>(false);

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
                className="py-10 bg-gray-100"
            >
                <div className="px-4 sm:px-4 lg:px-16 mx-auto w-full max-w-7xl">
                    {/* Section Title */}
                    <div className="text-center mb-6">
                        <h2
                            className={`
                text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1B2951] mb-4
                transition-all duration-1000 ease-out leading-normal  max-w-7xl w-full mx-auto
                ${isLeadershipVisible
                                    ? 'translate-x-0 opacity-100'
                                    : '-translate-x-full opacity-0'
                                }
              `}
                            style={{ fontFamily: "'Roboto', serif" }}
                        >
                            REDEFINING LEADERSHIP HIRING WITH
PRECISION AND TRUST: <br />CXO & Senior Recruitment at Just 1% of CTC
                        </h2>
                    </div>

                    {/* Content Layout */}
                    <div className=" items-center">
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
                                className="text-2xl sm:text-3xl font-medium text-[#1B2951] mb-6  leading-tight tracking-tight "
                                style={{ fontFamily: "'Roboto', serif" }}
                            >
                                
                            </h3>

                            <p
                                className="text-lg text-black leading-relaxed  font-semibold text-center"
                                style={{ fontFamily: "'Roboto', serif" }}
                            >
                                Our Retainer Model ensures affordability without compromising quality.
                                We understand that finding the right leadership talent is crucial for your organization's success,
                                which is why we've developed a cost-effective approach that delivers exceptional results
                                while maintaining the highest standards of recruitment excellence.
                            </p>
                        </div>

                    </div>
                </div>
            </section>


        </div>
    )
}

export default HeroSection2