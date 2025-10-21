"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Users, MapPin, DollarSign, CheckCircle, Upload } from "lucide-react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function FranchisePage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    currentFranchise: "",
    resume: null as File | null
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({
      ...prev,
      resume: file
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create FormData for file upload
    const submitData = new FormData();
    submitData.append('firstName', formData.firstName);
    submitData.append('lastName', formData.lastName);
    submitData.append('email', formData.email);
    submitData.append('phone', formData.phone);
    submitData.append('currentFranchise', formData.currentFranchise);
    if (formData.resume) {
      submitData.append('resume', formData.resume);
    }

    // TODO: Configure this to send to your company email
    // You can use services like Formspree, Netlify Forms, or your own backend
    console.log('Form submitted:', formData);
    
    // For now, we'll just show an alert
    alert('Thank you for your interest! We will contact you soon.');
    
    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      currentFranchise: "",
      resume: null
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section with Background Image */}
      <section className="relative pt-20 pb-16 bg-gradient-to-r from-primary/90 to-secondary/90">
        {/* Background Image Placeholder */}
        <div className="absolute inset-0 bg-[url('/franchise-background.jpg')] bg-cover bg-center bg-no-repeat opacity-20"></div>
        {/* TODO: Replace '/franchise-background.jpg' with actual franchise background image */}
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ color: '#c14a2a' }}>
                Franchise Opportunity
              </h1>
              <p className="text-xl md:text-2xl mb-8 font-bold max-w-4xl mx-auto" style={{ color: '#c14a2a' }}>
                Join Madina Halal Food in bringing authentic halal cuisine to communities nationwide. 
                Be part of our growing family and share our passion for quality halal food.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Franchise Benefits Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Why Choose Madina Halal Food?</h2>
            <p className="text-xl text-text-light max-w-3xl mx-auto">
              Our proven business model and comprehensive support system make us the ideal franchise partner
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center p-6 rounded-lg bg-accent/10"
            >
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Proven Business Model</h3>
              <p className="text-text-light">Join a successful franchise with established systems and processes that work.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center p-6 rounded-lg bg-accent/10"
            >
              <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Prime Locations</h3>
              <p className="text-text-light">We help you find the perfect location with high foot traffic and community demand.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center p-6 rounded-lg bg-accent/10"
            >
              <DollarSign className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Strong ROI</h3>
              <p className="text-text-light">Our franchisees enjoy strong returns on investment with our profitable business model.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Franchise Process Section */}
      <section className="py-20 bg-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Our Franchise Process</h2>
            <p className="text-xl text-text-light max-w-3xl mx-auto">
              Simple steps to become a Madina Halal Food franchisee
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Application", desc: "Submit your franchise interest form" },
              { step: "2", title: "Review", desc: "We review your application internally" },
              { step: "3", title: "Meeting", desc: "Initial meeting and FDD signing" },
              { step: "4", title: "Launch", desc: "Location selection and grand opening" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-6 text-center"
              >
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-primary mb-2">{item.title}</h3>
                <p className="text-text-light text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Franchise Inquiry Form */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Franchise Inquiry Form</h2>
            <p className="text-xl text-text-light">
              Ready to join our family? Fill out the form below and we'll get back to you soon.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="currentFranchise" className="block text-sm font-medium text-gray-700 mb-2">
                  Do you currently run/operate a Franchise? *
                </label>
                <select
                  id="currentFranchise"
                  name="currentFranchise"
                  required
                  value={formData.currentFranchise}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="">Select an option</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>

              <div>
                <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-2">
                  Upload Resume (Optional)
                </label>
                <div className="relative">
                  <input
                    type="file"
                    id="resume"
                    name="resume"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white hover:file:bg-secondary"
                  />
                  <Upload className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                </div>
                <p className="text-sm text-gray-500 mt-1">Accepted formats: PDF, DOC, DOCX</p>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-[#d87025] hover:bg-[#fd5506] text-white px-12 py-4 rounded-lg font-semibold transition-all duration-300 border-2 border-[#d87025] hover:border-[#fd5506] hover:shadow-lg hover:scale-105"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
