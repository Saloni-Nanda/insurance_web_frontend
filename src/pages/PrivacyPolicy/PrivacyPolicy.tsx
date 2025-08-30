import React from "react";
import { Helmet } from "react-helmet-async";

const PrivacyPolicy: React.FC = () => {
  const sections = [
    {
      id: 1,
      icon: "📑",
      title: "Information We Collect",
      content: [
        "Personal Information: name, email address, phone number, and other details you provide.",
        "Non-Personal Information: browser type, IP address, and usage data."
      ]
    },
    {
      id: 2,
      icon: "⚙️",
      title: "How We Use Your Information",
      content: [
        "We use your information to provide services, improve our website, communicate with you, and comply with legal obligations."
      ]
    },
    {
      id: 3,
      icon: "🤝",
      title: "Sharing of Information",
      content: [
        "We do not sell or rent your information. We may share data with service providers or as required by law."
      ]
    },
    {
      id: 4,
      icon: "🔒",
      title: "Security of Information",
      content: [
        "We implement reasonable measures to protect your data."
      ]
    },
    {
      id: 5,
      icon: "📝",
      title: "Your Rights",
      content: [
        "You may request access, correction, or deletion of your data."
      ]
    },
    {
      id: 6,
      icon: "🔄",
      title: "Changes to This Policy",
      content: [
        "We may update this policy from time to time. Continued use of our website means acceptance of the revised policy."
      ]
    },

  ];

  return (
    <>
      <Helmet>
        <title>Privacy Policy | RBG HR Services LLP</title>
        <meta
          name="description"
          content="Learn how RBG HR Services LLP protects your personal
information and data privacy while delivering recruitment services.
                  "
        />;
      </Helmet>
      <div className="min-h-screen bg-gray-50 font-roboto">
        <div className="max-w-3xl mx-auto p-5">
          {/* Header */}
          <div className="bg-[#1B2951] text-white p-6 rounded-xl mb-6 text-center shadow-lg">
            <h1 className="text-2xl font-bold mb-2">Privacy Policy</h1>
            <div className="text-sm opacity-90">RBG HR Services LLP</div>
          </div>

          {/* Main Content */}
          <div className="bg-white p-6 rounded-xl shadow-md mb-6">
            {/* Intro */}
            <p className="text-gray-700 text-sm mb-6 leading-relaxed">
              RBG HR Services LLP (“Company”, “we”, “our”, “us”) is committed to
              protecting your privacy. This Privacy Policy explains how we
              collect, use, disclose, and safeguard your information when you
              visit our website.
            </p>

            {/* Sections */}
            <div className="space-y-6">
              {sections.map((section) => (
                <div
                  key={section.id}
                  className="border border-gray-200 p-4 rounded-lg bg-gray-50"
                >
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold shadow mr-3 bg-[#1B2951]">
                      {section.icon}
                    </div>
                    <h2 className="text-lg font-semibold text-[#1B2951]">
                      {section.title}
                    </h2>
                  </div>
                  <div className="space-y-2">
                    {section.content.map((paragraph, index) => (
                      <p
                        key={index}
                        className="text-gray-700 text-sm leading-relaxed"
                      >
                        {paragraph}
                      </p>
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
              For any questions, concerns, or clarifications regarding these Policy,
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
            <p>
              &copy; 2024 RBG HR Services LLP. All rights reserved. | Professional
              HR Solutions & Recruitment Services
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
