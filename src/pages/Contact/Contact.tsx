import React, { useState } from 'react';
import { Phone, Mail, MapPin, Linkedin, Facebook, Send, User, Building2, MessageSquare, CheckCircle, XCircle, X } from 'lucide-react';
import axios from 'axios';

interface FormData {
  fullName: string;
  email: string;
  company: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  message?: string;
}

interface PopupState {
  show: boolean;
  type: 'success' | 'error';
  title: string;
  message: string;
}

const Contact: React.FC = () => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    company: '',
    message: ''
  });

  console.log(formData)

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [popup, setPopup] = useState<PopupState>({
    show: false,
    type: 'success',
    title: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // clear error while typing
    setErrors(prev => ({
      ...prev,
      [name]: undefined
    }));
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const showPopup = (type: 'success' | 'error', title: string, message: string) => {
    setPopup({
      show: true,
      type,
      title,
      message
    });
  };

  const hidePopup = () => {
    setPopup(prev => ({ ...prev, show: false }));
  };

  const handleSubmit = async () => {
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const res = await axios.post(`${backendUrl}/send-email`, formData);
      console.log(formData)
      console.log("Email sent successfully:", res.data);

      // Show success popup
      showPopup(
        'success',
        'Message Sent Successfully!',
        'Thank you for reaching out! We will get back to you soon with relevant opportunities and insights.'
      );

      // Reset form after successful submission
      setFormData({
        fullName: '',
        email: '',
        company: '',
        message: ''
      });

    } catch (err) {
      console.error("Failed to send message:", err);

      // Show error popup
      showPopup(
        'error',
        'Failed to Send Message',
        'We encountered an issue while sending your message. Please check your connection and try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleTryAgain = () => {
    hidePopup();
    handleSubmit();
  };

  return (
    <div className="mt-28 md:mt-24  bg-white text-black">
      {/* Popup Overlay */}
      {popup.show && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 transform transition-all duration-300 scale-100">
            {/* Popup Header */}
            <div className={`p-6 rounded-t-2xl ${popup.type === 'success'
                ? 'bg-[#1B2951]'
                : 'bg-gradient-to-r from-red-500 to-red-600'
              }`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  {popup.type === 'success' ? (
                    <CheckCircle className="w-8 h-8 text-white mr-3" />
                  ) : (
                    <XCircle className="w-8 h-8 text-white mr-3" />
                  )}
                  <h3 className="text-xl font-bold text-white">{popup.title}</h3>
                </div>
                <button
                  onClick={hidePopup}
                  className="text-white/80 hover:text-white transition-colors duration-200"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Popup Body */}
            <div className="p-6">
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {popup.message}
              </p>

              {/* Action Buttons */}
              <div className="flex gap-3">
                {popup.type === 'error' ? (
                  <>
                    <button
                      onClick={handleTryAgain}
                      disabled={isSubmitting}
                      className={`flex-1 px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-105 ${isSubmitting
                          ? 'bg-gray-400 cursor-not-allowed'
                          : 'bg-gradient-to-r from-[#1B2951] to-[#2a3f6b] hover:from-[#B99D54] hover:to-[#d4b865] shadow-lg hover:shadow-xl'
                        }`}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2 inline-block"></div>
                          Sending...
                        </>
                      ) : (
                        'Try Again'
                      )}
                    </button>
                    <button
                      onClick={hidePopup}
                      className="flex-1 px-6 py-3 bg-gray-200 text-gray-700 rounded-xl font-semibold  transition-all duration-300 transform hover:scale-105"
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <button
                    onClick={hidePopup}
                    className="w-full px-6 py-3 bg-[#1B2951] text-white rounded-xl font-semibold  transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    Close
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="max-w-4xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-[#1B2951] mb-4 relative inline-block">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600 mt-8 max-w-2xl mx-auto leading-relaxed">
            Ready to transform your insurance career? Connect with our specialists today and discover
            opportunities that match your expertise and ambitions.
          </p>
        </div>

        <div className="mb-6">
          <div className="bg-white rounded-xl p-4 shadow-md border border-[#B99D54]/20 max-w-md mx-auto">
            <h2 className="text-xl font-semibold text-[#1B2951] mb-4 text-center">
              Send us a Message
            </h2>

            <div className="space-y-3">
              {/* Full Name */}
              <div className="relative">
                <label className="block text-[#1B2951] font-medium mb-1 text-xs uppercase tracking-wide">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#B99D54] w-4 h-4" />
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className={`w-full pl-10 pr-3 py-2 border rounded-lg text-sm bg-gray-50/50 hover:bg-white transition-all duration-300 
              ${errors.fullName ? 'border-red-500' : 'border-[#1B2951]/20 focus:border-[#B99D54] focus:ring-2 focus:ring-[#B99D54]/20'}
            `}
                    placeholder="Enter your full name"
                  />
                </div>
                {errors.fullName && <p className="text-red-600 text-xs mt-1">{errors.fullName}</p>}
              </div>

              {/* Email */}
              <div className="relative">
                <label className="block text-[#1B2951] font-medium mb-1 text-xs uppercase tracking-wide">
                  Work Email *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#B99D54] w-4 h-4" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full pl-10 pr-3 py-2 border rounded-lg text-sm bg-gray-50/50 hover:bg-white transition-all duration-300 
              ${errors.email ? 'border-red-500' : 'border-[#1B2951]/20 focus:border-[#B99D54] focus:ring-2 focus:ring-[#B99D54]/20'}
            `}
                    placeholder="Enter your work email"
                  />
                </div>
                {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email}</p>}
              </div>

              {/* Company */}
              <div className="relative">
                <label className="block text-[#1B2951] font-medium mb-1 text-xs uppercase tracking-wide">
                  Company
                </label>
                <div className="relative">
                  <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#B99D54] w-4 h-4" />
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-3 py-2 border rounded-lg text-sm bg-gray-50/50 hover:bg-white focus:border-[#B99D54] focus:ring-2 focus:ring-[#B99D54]/20 transition-all duration-300"
                    placeholder="Enter your company name"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="relative">
                <label className="block text-[#1B2951] font-medium mb-1 text-xs uppercase tracking-wide">
                  Message *
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 text-[#B99D54] w-4 h-4" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={3}
                    className={`w-full pl-10 pr-3 py-2 border rounded-lg text-sm bg-gray-50/50 hover:bg-white resize-none transition-all duration-300 
              ${errors.message ? 'border-red-500' : 'border-[#1B2951]/20 focus:border-[#B99D54] focus:ring-2 focus:ring-[#B99D54]/20'}
            `}
                    placeholder="Write your message..."
                  />
                </div>
                {errors.message && <p className="text-red-600 text-xs mt-1">{errors.message}</p>}
              </div>

              {/* Submit Button */}
              <div className="text-center pt-1">
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className={`inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white rounded-lg transition-all duration-300 min-w-32 ${isSubmitting
                      ? 'bg-gradient-to-r from-gray-400 to-gray-500 cursor-not-allowed'
                      : 'bg-gradient-to-r from-[#1B2951] to-[#2a3f6b] hover:from-[#B99D54] hover:to-[#d4b865]'
                    }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>


        {/* Bottom Section - Contact Info and Social Media in Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Contact Information */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl p-5 shadow-md border border-[#B99D54]/20 h-full">
              <h2 className="text-base font-semibold text-[#1B2951] mb-4 text-center">
                Contact Information
              </h2>

              <div className="space-y-3">
                <div className="flex items-center p-3 rounded-lg hover:bg-[#1B2951]/5 transition-all duration-300 group">
                  <div className="w-8 h-8 bg-gradient-to-r from-[#B99D54] to-[#d4b865] rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-3.5 h-3.5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-[#1B2951] mb-0.5">Phone</h3>
                    <a href="tel:+91-9088020777" className="text-gray-600 text-xs hover:text-[#B99D54] transition-colors duration-300 hover:underline">
                      +91-9088020777
                    </a>
                  </div>
                </div>

                <div className="flex items-center p-3 rounded-lg hover:bg-[#1B2951]/5 transition-all duration-300 group">
                  <div className="w-8 h-8 bg-gradient-to-r from-[#B99D54] to-[#d4b865] rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-3.5 h-3.5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-[#1B2951] mb-0.5">Email</h3>
                    <a href="mailto:contact@rbghr.com" className="text-gray-600 text-xs hover:text-[#B99D54] transition-colors duration-300 hover:underline">
                      contact@rbghr.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center p-3 rounded-lg hover:bg-[#1B2951]/5 transition-all duration-300 group">
                  <div className="w-8 h-8 bg-gradient-to-r from-[#B99D54] to-[#d4b865] rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-3.5 h-3.5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xs font-semibold text-[#1B2951] mb-0.5">Office Location</h3>
                    <p className="text-gray-600 text-xs">Kolkata, India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="lg:col-span-1">
            <div className="relative bg-gradient-to-br from-[#1B2951] to-[#2a3f6b] rounded-xl p-5 text-center overflow-hidden h-full flex flex-col justify-center">
              {/* Animated top border */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#B99D54] to-transparent animate-pulse"></div>

              <h2 className="text-lg font-bold text-white mb-2">Insurance Hiring Specialists</h2>
              <p className="text-sm text-white/90 mb-6 leading-relaxed">
                Stay connected - follow us on LinkedIn and Facebook for updates, insights, and career opportunities.
              </p>

              <div className="flex justify-center space-x-4">
                <a
                  href="https://www.linkedin.com/company/rbg-hr-services-llp/?viewAsMember=true" target='_blank'
                  className="group relative w-12 h-12 bg-white/10 border border-[#B99D54]/50 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:bg-[#B99D54] hover:border-[#B99D54] hover:scale-110 hover:shadow-lg hover:shadow-[#B99D54]/30 backdrop-blur-sm"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                </a>
                <a
                  href="https://www.facebook.com/rbghr" target='_blank'
                  className="group relative w-12 h-12 bg-white/10 border border-[#B99D54]/50 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:bg-[#B99D54] hover:border-[#B99D54] hover:scale-110 hover:shadow-lg hover:shadow-[#B99D54]/30 backdrop-blur-sm"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;