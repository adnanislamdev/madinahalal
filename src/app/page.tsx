"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Menu, 
  X, 
  Phone, 
  MapPin, 
  Clock, 
  Star, 
  UtensilsCrossed,
  Heart,
  Users,
  Award,
  Camera,
  MessageCircle
} from "lucide-react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Video source - your video file
  const videoSource = "/videoplayback.mov";

  // Logo image - replace this path with your actual logo
  const logoImage = "/Logo3(1).png";

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-primary/20">
        <div className="w-full px-2 sm:px-4 lg:px-6">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Image
                src={logoImage}
                alt="Madina Halal Food Logo"
                width={120}
                height={40}
                className="h-10 w-auto"
                priority
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-baseline space-x-8">
                <a href="#home" className="text-foreground hover:text-primary transition-colors">Home</a>
                <a href="#about" className="text-foreground hover:text-primary transition-colors">About</a>
                <a href="#menu" className="text-foreground hover:text-primary transition-colors">Menu</a>
                <a href="#location" className="text-foreground hover:text-primary transition-colors">Location</a>
                <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-foreground hover:text-primary"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-background border-t border-primary/20"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a href="#home" className="block px-3 py-2 text-foreground hover:text-primary">Home</a>
                <a href="#about" className="block px-3 py-2 text-foreground hover:text-primary">About</a>
                <a href="#menu" className="block px-3 py-2 text-foreground hover:text-primary">Menu</a>
                <a href="#location" className="block px-3 py-2 text-foreground hover:text-primary">Location</a>
                <a href="#contact" className="block px-3 py-2 text-foreground hover:text-primary">Contact</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

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
              <button className="bg-primary hover:bg-secondary text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                View Menu
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-3 rounded-lg font-semibold transition-colors">
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

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Our Menu</h2>
            <p className="text-xl text-text-light max-w-3xl mx-auto">
              Discover our delicious selection of authentic halal dishes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Chicken Biryani", price: "$15.99", description: "Fragrant basmati rice with tender chicken and aromatic spices" },
              { name: "Lamb Curry", price: "$18.99", description: "Slow-cooked lamb in rich, flavorful curry sauce" },
              { name: "Falafel Wrap", price: "$12.99", description: "Crispy falafel with fresh vegetables and tahini sauce" },
              { name: "Beef Shawarma", price: "$14.99", description: "Tender beef with garlic sauce and fresh vegetables" },
              { name: "Vegetable Samosas", price: "$8.99", description: "Crispy pastries filled with spiced vegetables" },
              { name: "Mango Lassi", price: "$4.99", description: "Refreshing yogurt drink with sweet mango" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-semibold text-primary mb-2">{item.name}</h3>
                <p className="text-text-light mb-4">{item.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-secondary">{item.price}</span>
                  <button className="bg-primary hover:bg-secondary text-white px-4 py-2 rounded-lg transition-colors">
                    Order Now
                  </button>
                </div>
              </motion.div>
            ))}
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

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Madina Halal Food</h3>
              <p className="text-gray-300">
                Authentic halal cuisine served with love and tradition.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#menu" className="hover:text-white transition-colors">Menu</a></li>
                <li><a href="#location" className="hover:text-white transition-colors">Location</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-300">
                <li>123 Main Street</li>
                <li>City, State 12345</li>
                <li>(555) 123-4567</li>
                <li>info@medinahalal.com</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-3">
                <a href="https://www.instagram.com/your_instagram_username/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                  <Camera className="h-5 w-5" />
                </a>
                <a href="https://www.facebook.com/your_facebook_page/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                  <MessageCircle className="h-5 w-5" />
                </a>
                <a href="https://twitter.com/your_twitter_handle/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                  <X className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 Madina Halal Food. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
