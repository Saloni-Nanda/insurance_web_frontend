import React, { useState } from 'react';
import { Handshake, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Top: React.FC = () => {
    const [isVisible, setIsVisible] = useState(true);

    const navigate = useNavigate()

    const handleClose = () => {
        setIsVisible(false);
    };

    const handleLearnMore = () => {
        navigate('/contact')
    };

    if (!isVisible) {
        return null;
    }

    return (
        <div className="   bg-[#B99D54] " style={{ fontFamily: 'Roboto, serif' }}>
            <div className="w-full mx-auto px-4 sm:px-6 lg:px-16 py-2">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <div className="text-white flex gap-3">
                            <span><Handshake className='w-6 h-6'/></span>
                            <span className="text-sm md:text-lg font-semibold leading-tight tracking-tight">Your Partner for Leadership & Frontline Insurance Talent</span>

                        </div>
                    </div>

                    <div className="flex items-center space-x-3">
                        <button
                            onClick={handleLearnMore}
                            className="bg-white text-[#D4A574] px-4 sm:px-6 py-2 rounded-full font-semibold text-xs sm:text-sm border-2 border-transparent hover:bg-transparent hover:text-white hover:border-white transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
                        >
                            Learn More
                        </button>

                        <button
                            onClick={handleClose}
                            className="text-white hover:text-blue-200 transition-colors duration-200 p-1 mr-2 hover:bg-white rounded-full leading-tight tracking-tight"
                            aria-label="Close banner"
                        >
                            <X size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Top;