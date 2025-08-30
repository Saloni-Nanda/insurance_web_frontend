import React from 'react';
import { Helmet } from 'react-helmet-async';

const TermsAndConditions: React.FC = () => {
  const sections = [
    { id: 1, icon: '1', title: 'Use of Website', content: ['You agree to use this website only for lawful purposes.'] },
    { id: 2, icon: '©', title: 'Intellectual Property', content: ['All content on this site is the property of RBG HR Services LLP and may not be copied or distributed without permission.'] },
    { id: 3, icon: '⚡', title: 'Services', content: ['We provide recruitment and HR consulting services. Specific terms may apply for each engagement.'] },
    { id: 4, icon: '⚖', title: 'Limitation of Liability', content: ['We are not liable for damages arising from use of our services or website.'] },
    { id: 5, icon: '🔗', title: 'Third-Party Links', content: ['Our website may contain links to third-party sites. We are not responsible for their content or practices.'] },
    { id: 6, icon: '🏛', title: 'Governing Law', content: ['These terms are governed by the laws of India.'] },
    { id: 7, icon: '🔄', title: 'Changes to Terms', content: ['We may update these Terms at any time. Continued use of the website means acceptance of the revised Terms.'] }
  ];

  return (
    <>
    <Helmet>
                <title>Terms & Conditions | RBG HR Services LLP</title>
                <meta
                  name="description"
                  content="Review the terms of use for RBG HR Services LLP’s
website and services.
              "
                />;
              </Helmet>
    <div className="bg-gray-50 font-roboto">
      <div className="max-w-xl mx-auto p-5"> {/* reduced width */}
        
        {/* Header */}
        <div className="bg-[#1B2951] text-white p-6 rounded-xl mb-6 text-center shadow-lg">
          <h1 className="text-2xl font-bold mb-2">Terms & Conditions</h1>
          <div className="text-sm opacity-90">RBG HR Services LLP</div>
        </div>

        {/* Main Content */}
        <div className="bg-white p-6 rounded-xl shadow-md mb-6">
          <p className="text-gray-700 text-sm mb-6">
            Welcome to <span className="font-semibold">RBG HR Services LLP</span> ("Company", "we", "our", "us"). 
            By accessing our website, you agree to these Terms & Conditions.
          </p>

          {/* Sections */}
          <div className="space-y-6">
            {sections.map((section) => (
              <div key={section.id} className="border border-gray-200 p-4 rounded-lg bg-gray-50">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold shadow mr-3 bg-[#1B2951]">
                    {section.icon}
                  </div>
                  <h2 className="text-lg font-semibold text-[#1B2951]">{section.title}</h2>
                </div>
                <div className="space-y-2">
                  {section.content.map((paragraph, index) => (
                    <p key={index} className="text-gray-700 text-sm leading-relaxed">{paragraph}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-[#1B2951] text-white p-6 rounded-xl text-center shadow-lg mb-4">
          <h2 className="text-xl font-bold mb-2">Contact Us</h2>
          <p className="text-sm mb-3 opacity-90">
            For any questions, concerns, or clarifications regarding these Terms & Conditions, 
            please don’t hesitate to reach out to us.
          </p>
          <a 
            href="mailto:contact@rbghr.com" 
            className="text-[#B99D54] font-medium hover:text-[#d4b96a] transition-colors"
          >
            contact@rbghr.com
          </a>
        </div>

        {/* Footer */}
        <div className="text-center p-4 text-gray-500 text-xs">
          <p>&copy; 2024 RBG HR Services LLP. All rights reserved. | Professional HR Solutions & Recruitment Services</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default TermsAndConditions;
