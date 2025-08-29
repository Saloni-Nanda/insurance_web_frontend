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
    <div className="mt-28 md:mt-24 min-h-screen bg-white text-black">
      {/* Popup Overlay */}
      {popup.show && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 transform transition-all duration-300 scale-100">
            {/* Popup Header */}
            <div className={`p-6 rounded-t-2xl ${
              popup.type === 'success' 
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
                      className={`flex-1 px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-105 ${
                        isSubmitting
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

        <div className="mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-[#B99D54]/20">
            <h2 className="text-3xl font-semibold text-[#1B2951] mb-8 text-center">Send us a Message</h2>
            
            <div className="space-y-6">
              {/* Full Name */}
              <div className="relative">
                <div className="block text-[#1B2951] font-medium mb-2 text-sm uppercase tracking-wide">
                  Full Name *
                </div>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#B99D54] w-5 h-5" />
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className={`w-full pl-12 pr-4 py-4 border-2 rounded-xl text-lg transition-all duration-300 bg-gray-50/50 hover:bg-white 
                      ${errors.fullName ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : 'border-[#1B2951]/20 focus:border-[#B99D54] focus:ring-4 focus:ring-[#B99D54]/20'}
                    `}
                    placeholder="Enter your full name"
                  />
                </div>
                {errors.fullName && <p className="text-red-600 text-sm mt-2">{errors.fullName}</p>}
              </div>

              {/* Email */}
              <div className="relative">
                <div className="block text-[#1B2951] font-medium mb-2 text-sm uppercase tracking-wide">
                  Work Email *
                </div>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#B99D54] w-5 h-5" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full pl-12 pr-4 py-4 border-2 rounded-xl text-lg transition-all duration-300 bg-gray-50/50 hover:bg-white 
                      ${errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : 'border-[#1B2951]/20 focus:border-[#B99D54] focus:ring-4 focus:ring-[#B99D54]/20'}
                    `}
                    placeholder="Enter your work email"
                  />
                </div>
                {errors.email && <p className="text-red-600 text-sm mt-2">{errors.email}</p>}
              </div>

              {/* Company */}
              <div className="relative">
                <div className="block text-[#1B2951] font-medium mb-2 text-sm uppercase tracking-wide">
                  Company
                </div>
                <div className="relative">
                  <Building2 className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#B99D54] w-5 h-5" />
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-4 border-2 border-[#1B2951]/20 rounded-xl text-lg focus:border-[#B99D54] focus:ring-4 focus:ring-[#B99D54]/20 transition-all duration-300 bg-gray-50/50 hover:bg-white"
                    placeholder="Enter your company name"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="relative">
                <div className="block text-[#1B2951] font-medium mb-2 text-sm uppercase tracking-wide">
                  Message *
                </div>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-6 text-[#B99D54] w-5 h-5" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className={`w-full pl-12 pr-4 py-4 border-2 rounded-xl text-lg transition-all duration-300 bg-gray-50/50 hover:bg-white resize-none 
                      ${errors.message ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : 'border-[#1B2951]/20 focus:border-[#B99D54] focus:ring-4 focus:ring-[#B99D54]/20'}
                    `}
                    placeholder="Tell us about your requirements, career goals, or how we can assist you..."
                  />
                </div>
                {errors.message && <p className="text-red-600 text-sm mt-2">{errors.message}</p>}
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className={`inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl uppercase tracking-wide min-w-48 ${
                    isSubmitting
                      ? 'bg-gradient-to-r from-gray-400 to-gray-500 cursor-not-allowed'
                      : 'bg-gradient-to-r from-[#1B2951] to-[#2a3f6b] hover:from-[#B99D54] hover:to-[#d4b865] shadow-lg hover:shadow-[#B99D54]/30'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Contact Info and Social Media in Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-[#B99D54]/20 h-full">
              <h2 className="text-lg font-semibold text-[#1B2951] mb-6 text-center">Contact Information</h2>
              
              <div className="space-y-4">
                <div className="flex items-center p-4 rounded-xl hover:bg-[#1B2951]/5 transition-all duration-300 group">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#B99D54] to-[#d4b865] rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#1B2951] mb-1">Phone</h3>
                    <a href="tel:+91-9088020777" className="text-gray-600 text-sm hover:text-[#B99D54] transition-colors duration-300 hover:underline">
                      +91-9088020777
                    </a>
                  </div>
                </div>

                <div className="flex items-center p-4 rounded-xl hover:bg-[#1B2951]/5 transition-all duration-300 group">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#B99D54] to-[#d4b865] rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#1B2951] mb-1">Email</h3>
                    <a href="mailto:contact@rbghr.com" className="text-gray-600 text-sm hover:text-[#B99D54] transition-colors duration-300 hover:underline">
                      contact@rbghr.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center p-4 rounded-xl hover:bg-[#1B2951]/5 transition-all duration-300 group">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#B99D54] to-[#d4b865] rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-[#1B2951] mb-1">Office Location</h3>
                    <p className="text-gray-600 text-sm">Kolkata, India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="lg:col-span-1">
            <div className="relative bg-gradient-to-br from-[#1B2951] to-[#2a3f6b] rounded-2xl p-8 text-center overflow-hidden h-full flex flex-col justify-center">
              {/* Animated top border */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#B99D54] to-transparent animate-pulse"></div>
              
              <h2 className="text-2xl font-bold text-white mb-4">Insurance Hiring Specialists</h2>
              <p className="text-lg text-white/90 mb-8 leading-relaxed">
                Stay connected - follow us on LinkedIn and Facebook for updates, insights, and career opportunities.
              </p>

              <div className="flex justify-center space-x-6">
                <a
                  href="#"
                  className="group relative w-16 h-16 bg-white/10 border-2 border-[#B99D54]/50 rounded-full flex items-center justify-center text-white text-2xl transition-all duration-300 hover:bg-[#B99D54] hover:border-[#B99D54] hover:scale-110 hover:shadow-lg hover:shadow-[#B99D54]/30 backdrop-blur-sm"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-7 h-7 group-hover:scale-110 transition-transform duration-300" />
                </a>
                <a
                  href="#"
                  className="group relative w-16 h-16 bg-white/10 border-2 border-[#B99D54]/50 rounded-full flex items-center justify-center text-white text-2xl transition-all duration-300 hover:bg-[#B99D54] hover:border-[#B99D54] hover:scale-110 hover:shadow-lg hover:shadow-[#B99D54]/30 backdrop-blur-sm"
                  aria-label="Facebook"
                >
                  <Facebook className="w-7 h-7 group-hover:scale-110 transition-transform duration-300" />
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