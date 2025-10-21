"use client";

import { motion } from "framer-motion";
import { 
  Phone, 
  MapPin, 
  Clock, 
  Heart,
  Users,
  Award,
  Camera,
  MessageCircle,
  X
} from "lucide-react";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

export default function Home() {
  // Video source - your video file
  const videoSource = "/videoplayback.mov";

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            src={videoSource}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
            onError={(e) => {
              console.error('Video failed to load:', e);
            }}
            onLoadStart={() => {
              console.log('Video started loading');
            }}
            onCanPlay={() => {
              console.log('Video can play');
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 pointer-events-none" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Welcome to <span className="text-accent">Madina Halal Food</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Authentic Halal Cuisine • Fresh Ingredients • Traditional Recipes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/menu" 
                className="bg-[#d87025] hover:bg-[#fd5506] text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 border-2 border-[#d87025] hover:border-[#fd5506] hover:shadow-lg hover:scale-105"
              >
                View Menu
              </a>
              <button className="bg-white hover:bg-gray-100 text-[#d87025] px-8 py-3 rounded-lg font-semibold transition-all duration-300 border-2 border-white hover:border-gray-200 hover:shadow-lg hover:scale-105">
                Make Reservation
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">About Madina Halal Food</h2>
            <p className="text-xl text-text-light max-w-3xl mx-auto">
              We are committed to serving authentic halal cuisine with the highest standards of quality and freshness.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center p-6 rounded-lg bg-accent/10"
            >
              <Award className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Certified Halal</h3>
              <p className="text-text-light">All our ingredients and preparation methods are certified halal by recognized Islamic authorities.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center p-6 rounded-lg bg-accent/10"
            >
              <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Fresh Ingredients</h3>
              <p className="text-text-light">We source the freshest ingredients daily to ensure the highest quality in every dish.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center p-6 rounded-lg bg-accent/10"
            >
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Family Tradition</h3>
              <p className="text-text-light">Our recipes have been passed down through generations, preserving authentic flavors.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location & Contact Section */}
      <section id="location" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Visit Us</h2>
            <p className="text-xl text-text-light max-w-3xl mx-auto">
              Come experience our authentic halal cuisine in a warm and welcoming atmosphere
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-6">Location & Hours</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>123 Main Street, City, State 12345</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <div>
                    <p>Monday - Thursday: 11:00 AM - 10:00 PM</p>
                    <p>Friday - Saturday: 11:00 AM - 11:00 PM</p>
                    <p>Sunday: 12:00 PM - 9:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-primary mb-6">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/your_instagram_username/" target="_blank" rel="noopener noreferrer" className="bg-primary hover:bg-secondary text-white p-3 rounded-lg transition-colors">
                  <Camera className="h-6 w-6" />
                </a>
                <a href="https://www.facebook.com/your_facebook_page/" target="_blank" rel="noopener noreferrer" className="bg-primary hover:bg-secondary text-white p-3 rounded-lg transition-colors">
                  <MessageCircle className="h-6 w-6" />
                </a>
                <a href="https://twitter.com/your_twitter_handle/" target="_blank" rel="noopener noreferrer" className="bg-primary hover:bg-secondary text-white p-3 rounded-lg transition-colors">
                  <X className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}