"use client";

import { Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[var(--footer-bg)] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Madina Halal Food</h3>
            <p className="text-[var(--footer-text)]">
              Authentic halal cuisine served with love and tradition.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-[var(--footer-text)]">
              <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="/#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="/menu" className="hover:text-white transition-colors">Menu</a></li>
              <li><a href="/#location" className="hover:text-white transition-colors">Location</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-[var(--footer-text)]">
              <li>123 Main Street</li>
              <li>City, State 12345</li>
              <li>(555) 123-4567</li>
              <li>info@medinahalal.com</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-3">
              <a href="https://www.instagram.com/your_instagram_username/" target="_blank" rel="noopener noreferrer" className="text-[var(--footer-text)] hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.facebook.com/your_facebook_page/" target="_blank" rel="noopener noreferrer" className="text-[var(--footer-text)] hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://twitter.com/your_twitter_handle/" target="_blank" rel="noopener noreferrer" className="text-[var(--footer-text)] hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-[var(--footer-border)] mt-8 pt-8 text-center text-[var(--footer-text)]">
          <p>&copy; 2025 Madina Halal Food. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
