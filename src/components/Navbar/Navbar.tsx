import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const navigate = useNavigate();
    const location = useLocation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleNavigation = (sectionId: string) => {
        setActiveSection(sectionId);
        setIsMenuOpen(false);
        navigate(sectionId === 'home' ? '/' : `/${sectionId}`);
    };

    useEffect(() => {
        if (location.pathname === '/') {
            setActiveSection('home');
        } else {
            setActiveSection(location.pathname.replace('/', ''));
        }
    }, [location.pathname]);

    const menuSections = [
        { id: 'about', title: 'ABOUT US' },
        { id: 'service', title: 'SERVICES' },
        { id: 'contact', title: 'CONTACT US' },
    ];

    return (
        <>
            <header className="bg-[#1B2951] sticky top-0 z-50" style={{ fontFamily: 'Roboto, serif' }}>
                <div className="w-full mx-auto px-4 sm:px-4 lg:px-16">
                    <div className="flex items-center justify-between py-2">
                        {/* Logo Section */}
                        <Link to='/'>
                        <div className="flex items-center space-x-2">
                            <img src="/logo.png" alt="Logo" className="h-12 w-auto" />
                        </div>
                        </Link>

                        {/* Desktop Navigation (Right aligned) */}
                        <nav className="hidden md:flex items-center space-x-8 ml-auto">
                            {menuSections.map((section) => (
                                <div key={section.id} className="relative group">
                                    <button
                                        onClick={() => handleNavigation(section.id)}
                                        className={`relative flex items-center space-x-2 px-4 py-2 text-sm font-medium transition-all duration-300 ${activeSection === section.id
                                                ? 'text-white font-bold'
                                                : 'text-white/80 hover:text-white'
                                            }`}
                                    >
                                        {/* Hover Dot */}
                                        <div
                                            className={`absolute -left-2 w-2 h-2 bg-[#B99D54] rounded-full transition-all duration-300 ${activeSection === section.id
                                                    ? 'opacity-100 scale-100'
                                                    : 'opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100'
                                                }`}
                                        />
                                        <span>{section.title}</span>
                                    </button>
                                </div>
                            ))}
                        </nav>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={toggleMenu}
                            className="md:hidden p-2 text-white hover:text-white/80 transition-colors duration-200"
                            aria-label="Toggle menu"
                        >
                            <div className="relative w-6 h-6">
                                <span
                                    className={`absolute top-0 left-0 w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 top-2.5' : ''
                                        }`}
                                />
                                <span
                                    className={`absolute top-2.5 left-0 w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''
                                        }`}
                                />
                                <span
                                    className={`absolute top-5 left-0 w-full h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 top-2.5' : ''
                                        }`}
                                />
                            </div>
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu (full screen overlay) */}
            {isMenuOpen && (
                <div className="fixed inset-0 bg-[#1B2951] z-[60] md:hidden">
                    {/* Mobile Menu Header */}
                    <div className="flex items-center justify-between p-6 border-b border-white/10">
                        {/* Logo in mobile menu - same size as desktop */}
                        <div className="flex items-center space-x-2">
                            <img src="/image.png" alt="Logo" className="h-12 w-auto" />
                        </div>

                        {/* Close Button */}
                        <button
                            onClick={toggleMenu}
                            className="p-2 text-white hover:text-white/80 transition-colors duration-200"
                            aria-label="Close menu"
                        >
                            <div className="relative w-6 h-6">
                                <span className="absolute top-2.5 left-0 w-full h-0.5 bg-current rotate-45" />
                                <span className="absolute top-2.5 left-0 w-full h-0.5 bg-current -rotate-45" />
                            </div>
                        </button>
                    </div>

                    {/* Mobile Menu Content */}
                    <div className="flex-1 flex flex-col items-center justify-center space-y-6 px-4">
                        {menuSections.map((section, index) => (
                            <div
                                key={section.id}
                                className="relative group"
                                style={{
                                    animation: `slideInLeft 0.3s ease-out ${index * 0.1}s both`
                                }}
                            >
                                <button
                                    onClick={() => handleNavigation(section.id)}
                                    className={`relative flex items-center space-x-2 px-4 py-2 text-sm font-medium transition-all duration-300 ${activeSection === section.id
                                            ? 'text-white font-bold'
                                            : 'text-white/80 hover:text-white'
                                        }`}
                                >
                                    {/* Hover Dot - same as desktop */}
                                    <div
                                        className={`absolute -left-2 w-2 h-2 bg-[#B99D54] rounded-full transition-all duration-300 ${activeSection === section.id
                                                ? 'opacity-100 scale-100'
                                                : 'opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100'
                                            }`}
                                    />
                                    <span>{section.title}</span>
                                </button>
                            </div>
                        ))}
                    </div>

                </div>
            )}

            {/* Add keyframes for animation */}
            <style >{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
        </>
    );
};

export default Navbar;