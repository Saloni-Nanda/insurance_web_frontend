


import React, { useState } from "react";
import {
  Mail,
  Linkedin,
  Facebook,
  Send,
  User,
  Building2,
  MessageSquare,
  CheckCircle,
  XCircle,
  X,
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import emailjs from "@emailjs/browser";

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
  type: "success" | "error";
  title: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    company: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [popup, setPopup] = useState<PopupState>({
    show: false,
    type: "success",
    title: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({
      ...prev,
      [name]: undefined,
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

  const showPopup = (
    type: "success" | "error",
    title: string,
    message: string
  ) => {
    setPopup({ show: true, type, title, message });
  };

  const hidePopup = () => setPopup((prev) => ({ ...prev, show: false }));

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    const currentDate = new Date().toLocaleDateString();
    const currentTime = new Date().toLocaleTimeString();

    // Custom HTML email template
    const emailTemplate = `
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Demo Request</title>
</head>
<body style="margin: 0; padding: 10px; background-color: #f8f9fa; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
  <div style="max-width: 650px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 6px 20px rgba(27, 41, 81, 0.1); border: 1px solid rgba(27, 41, 81, 0.08);">
    
    <!-- Header -->
    <div style="background: linear-gradient(135deg, #1B2951 0%, #2A3B6B 100%); padding: 20px; text-align: center; position: relative;">
      <div style="position: absolute; top: 0; left: 0; right: 0; height: 3px; background: linear-gradient(90deg, #B99D54 0%, #D4B968 100%);"></div>
      <p style="color: rgba(255,255,255,0.85); margin: 8px 0 0 0; font-size: 16px; font-weight: 500; letter-spacing: 0.4px;">
        RBG HR SERVICES LLP
      </p>
      <div style="width: 50px; height: 2px; background: #B99D54; margin: 15px auto 0; border-radius: 2px;"></div>
    </div>
    
    <!-- Content -->
    <div style="padding: 25px 20px;">
      
      <!-- Submission Info -->
      <div style="background: #ffffff; padding: 15px; border-radius: 10px; margin-bottom: 20px; border: 1px solid #e8ecf0; border-left: 4px solid #B99D54; box-shadow: 0 1px 5px rgba(27, 41, 81, 0.05);">
        <div style="display: flex; align-items: center; margin-bottom: 10px;">
          <div style="width: 6px; height: 6px; background: #B99D54; border-radius: 50%; margin-right: 8px;"></div>
          <h3 style="color: #1B2951; margin: 0; font-size: 16px; font-weight: 700; letter-spacing: -0.2px;">
            Submission Details
          </h3>
        </div>
        <div style="margin-left: 15px;">
          <p style="color: #333333; margin: 5px 0; font-size: 14px; line-height: 1.5;">
            <strong style="color: #1B2951;">Date:</strong> 
            <span style="color: #555555;">${currentDate}</span>
          </p>
          <p style="color: #333333; margin: 5px 0; font-size: 14px; line-height: 1.5;">
            <strong style="color: #1B2951;">Time:</strong> 
            <span style="color: #555555;">${currentTime}</span>
          </p>
        </div>
      </div>

      <!-- Contact Information -->
      <div style="background: #ffffff; padding: 15px; border-radius: 10px; margin-bottom: 20px; border: 1px solid #e8ecf0; border-left: 4px solid #1B2951; box-shadow: 0 1px 5px rgba(27, 41, 81, 0.05);">
        <div style="display: flex; align-items: center; margin-bottom: 10px;">
          <div style="width: 6px; height: 6px; background: #1B2951; border-radius: 50%; margin-right: 8px;"></div>
          <h3 style="color: #1B2951; margin: 0; font-size: 16px; font-weight: 700; letter-spacing: -0.2px;">
            Contact Information
          </h3>
        </div>
        <div style="margin-left: 15px;">
          <p style="color: #333333; margin: 6px 0; font-size: 14px; line-height: 1.5;">
            <strong style="color: #1B2951;">Full Name:</strong> 
            <span style="color: #555555;">${formData.fullName}</span>
          </p>
          <p style="color: #333333; margin: 6px 0; font-size: 14px; line-height: 1.5;">
            <strong style="color: #1B2951;">Email:</strong> 
            <a href="mailto:${formData.email}" style="color: #B99D54; text-decoration: none; font-weight: 500;">${formData.email}</a>
          </p>
          <p style="color: #333333; margin: 6px 0; font-size: 14px; line-height: 1.5;">
            <strong style="color: #1B2951;">Company Name:</strong> 
            <span style="color: #555555;">${formData.company}</span>
          </p>
          <div style="margin: 10px 0;">
            <strong style="color: #1B2951; display: block; margin-bottom: 5px;">Message:</strong>
            <div style="background: #f8f9fa; padding: 10px; border-radius: 6px; border-left: 3px solid #B99D54; font-style: italic; color: #555555; line-height: 1.5;">
              ${formData.message}
            </div>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div style="background: linear-gradient(135deg, #1B2951 0%, #2A3B6B 100%); padding: 20px; border-radius: 10px; text-align: center; position: relative; overflow: hidden;">
        <div style="position: absolute; top: 0; right: -15px; width: 60px; height: 60px; background: rgba(185, 157, 84, 0.1); border-radius: 50%;"></div>
        <div style="position: absolute; bottom: -8px; left: -20px; width: 40px; height: 40px; background: rgba(185, 157, 84, 0.15); border-radius: 50%;"></div>
        <div style="position: relative; z-index: 1;">
          <div style="width: 10px; height: 10px; background: #B99D54; border-radius: 50%; margin: 0 auto 10px; animation: pulse 2s infinite;"></div>
          <h4 style="color: #ffffff; margin: 0 0 10px 0; font-size: 16px; font-weight: 700;">
            Next Steps
          </h4>
          <p style="color: rgba(255,255,255,0.9); margin: 0; font-size: 14px; line-height: 1.4; max-width: 360px; margin: 0 auto;">
            A new contact form submission is waiting for your response. Please reach out within <strong style="color: #B99D54;">24 hours</strong>.
          </p>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div style="background: #f8f9fa; padding: 15px; text-align: center; border-top: 1px solid #e8ecf0;">
      <p style="color: #666666; margin: 0; font-size: 12px; line-height: 1.4;">
        This email was automatically generated from your website contact form.
      </p>
      <p style="color: #888888; margin: 8px 0 0 0; font-size: 11px;">
        © ${new Date().getFullYear()} <strong style="color: #1B2951;">contact@rbghr.com</strong> - All rights reserved
      </p>
    </div>
  </div>

  <style>
    @keyframes pulse {
      0% { transform: scale(1); opacity: 1; }
      50% { transform: scale(1.1); opacity: 0.7; }
      100% { transform: scale(1); opacity: 1; }
    }
    @media (max-width: 600px) {
      body { padding: 5px !important; }
    }
  </style>
</body>
</html>

    `;

    try {
      await emailjs.send(
        "service_bqfsqbc",
        "template_zeepj8q",
        {
          fullName: formData.fullName,
          email: formData.email,
          company: formData.company,
          message: formData.message,
          message_html: emailTemplate
        },
        "r-HZAkKhK6i44SOgH"
      );

      showPopup(
        "success",
        "Message Sent Successfully!",
        "Thank you for contacting us. Our team will get back to you shortly."
      );
      setFormData({ fullName: "", email: "", company: "", message: "" });
    } catch (err) {
      showPopup(
        "error",
        "Failed to Send Message",
        "We encountered an issue. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>
          Contact RBG HR Services LLP | Insurance Recruitment Experts
        </title>
        <meta
          name="description"
          content="Looking to hire for your insurance business? Contact RBG HR Services LLP today. Fast closures, pan-India delivery, and leadership hiring at 10% of standard cost."
        />
      </Helmet>

      {/* Popup Overlay */}
      {popup.show && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4">
            <div
              className={`p-6 rounded-t-2xl ${popup.type === "success"
                ? "bg-[#1B2951]"
                : "bg-gradient-to-r from-red-500 to-red-600"
                }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  {popup.type === "success" ? (
                    <CheckCircle className="w-8 h-8 text-white mr-3" />
                  ) : (
                    <XCircle className="w-8 h-8 text-white mr-3" />
                  )}
                  <h3 className="text-xl font-bold text-white">
                    {popup.title}
                  </h3>
                </div>
                <button
                  onClick={hidePopup}
                  className="text-white/80 hover:text-white"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-600 text-lg mb-6">{popup.message}</p>
              <div className="flex gap-3">
                <button
                  onClick={hidePopup}
                  className="w-full px-6 py-3 bg-[#1B2951] text-white rounded-xl font-semibold transition-all hover:scale-105"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Contact Section */}
      <div className="mt-28 md:mt-24 bg-white text-black font-roboto">
        <div className="w-full flex justify-center px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 max-w-5xl w-full">
            {/* Left: Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl p-6 shadow-md border border-[#B99D54]/20 h-full">
                <h2 className="text-3xl font-semibold text-[#1B2951] mb-4 text-center">
                  Get In Touch
                </h2>

                <form onSubmit={handleSubmit} className="space-y-3">
                  {/* Full Name */}
                  <div className="relative">
                    <label className="block text-[#1B2951] font-bold mb-1 text-xs uppercase tracking-wide">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 text-[#B99D54] w-4 h-4" />
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className={`w-full pl-10 pr-3 py-2 border rounded-lg text-sm bg-gray-50/50 hover:bg-white ${errors.fullName
                          ? "border-red-500"
                          : "border-[#1B2951]/20 focus:border-[#B99D54] focus:ring-2 focus:ring-[#B99D54]/20"
                          }`}
                        placeholder="Enter your full name"
                      />
                    </div>
                    {errors.fullName && (
                      <p className="text-red-600 text-xs mt-1">
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="relative">
                    <label className="block text-[#1B2951] font-bold mb-1 text-xs uppercase tracking-wide">
                      Work Email *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-[#B99D54] w-4 h-4" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full pl-10 pr-3 py-2 border rounded-lg text-sm bg-gray-50/50 hover:bg-white ${errors.email
                          ? "border-red-500"
                          : "border-[#1B2951]/20 focus:border-[#B99D54] focus:ring-2 focus:ring-[#B99D54]/20"
                          }`}
                        placeholder="Enter your work email"
                      />
                    </div>
                    {errors.email && (
                      <p className="text-red-600 text-xs mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Company */}
                  <div className="relative">
                    <label className="block text-[#1B2951] font-bold mb-1 text-xs uppercase tracking-wide">
                      Company
                    </label>
                    <div className="relative">
                      <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 text-[#B99D54] w-4 h-4" />
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-3 py-2 border rounded-lg text-sm bg-gray-50/50 hover:bg-white focus:border-[#B99D54] focus:ring-2 focus:ring-[#B99D54]/20"
                        placeholder="Enter your company name"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="relative">
                    <label className="block text-[#1B2951] font-bold mb-1 text-xs uppercase tracking-wide">
                      Message *
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 text-[#B99D54] w-4 h-4" />
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={3}
                        className={`w-full pl-10 pr-3 py-2 border rounded-lg text-sm bg-gray-50/50 hover:bg-white resize-none ${errors.message
                          ? "border-red-500"
                          : "border-[#1B2951]/20 focus:border-[#B99D54] focus:ring-2 focus:ring-[#B99D54]/20"
                          }`}
                        placeholder="Write your message..."
                      />
                    </div>
                    {errors.message && (
                      <p className="text-red-600 text-xs mt-1">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit */}
                  <div className="text-center pt-1">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white rounded-lg transition-all min-w-32 ${isSubmitting
                        ? "bg-gradient-to-r from-gray-400 to-gray-500 cursor-not-allowed"
                        : "bg-gradient-to-r from-[#1B2951] to-[#2a3f6b] hover:from-[#B99D54] hover:to-[#d4b865]"
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
                </form>
              </div>
            </div>

            {/* Right: Social Links */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-[#1B2951] to-[#2a3f6b] rounded-xl p-6 text-center h-full flex flex-col justify-center shadow-md relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#B99D54] to-transparent animate-pulse"></div>
                <h2 className="text-lg font-bold text-white mb-2">
                  Insurance Hiring Specialists
                </h2>
                <p className="text-sm text-white/90 mb-6 leading-relaxed">
                  Stay connected - follow us on LinkedIn and Facebook for
                  updates, insights, and career opportunities.
                </p>
                <div className="flex justify-center space-x-4">
                  <a
                    href="https://www.linkedin.com/company/rbg-hr-services-llp/?viewAsMember=true"
                    target="_blank"
                    className="w-12 h-12 bg-white/10 border border-[#B99D54]/50 rounded-full flex items-center justify-center text-white hover:bg-[#B99D54] hover:scale-110 transition-all"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.facebook.com/rbghr"
                    target="_blank"
                    className="w-12 h-12 bg-white/10 border border-[#B99D54]/50 rounded-full flex items-center justify-center text-white hover:bg-[#B99D54] hover:scale-110 transition-all"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
