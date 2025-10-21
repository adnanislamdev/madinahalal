"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Logo image - replace this path with your actual logo
  const logoImage = "/Cornerlogo.jpg";

  return (
    <nav className="fixed top-0 w-full z-50 bg-[var(--nav-color)] border-b border-primary/20">
      {/* Corner Logo - positioned absolutely */}
      <div className="absolute top-0 left-0 z-10">
        <Link href="/">
          <Image
            src={logoImage}
            alt="Madina Halal Food Logo"
            width={120}
            height={40}
            // className="h-12 w-auto object-contain"
            priority
            className="cursor-pointer hover:opacity-80 transition-opacity"
          />
        </Link>
      </div>
      
      <div className="w-full px-2 sm:px-4 lg:px-6">
        <div className="flex justify-end items-center h-20">
          {/* Desktop Navigation - aligned to right */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8 h-full">
              <Link href="/" className="text-[var(--nav-text)] hover:text-[var(--nav-text-hover)] transition-colors">Home</Link>
              <Link href="/#about" className="text-[var(--nav-text)] hover:text-[var(--nav-text-hover)] transition-colors">About</Link>
              <Link href="/menu" className="text-[var(--nav-text)] hover:text-[var(--nav-text-hover)] transition-colors">Menu</Link>
              <Link href="/franchise" className="text-[var(--nav-text)] hover:text-[var(--nav-text-hover)] transition-colors">Franchise Interest</Link>
              <Link href="/#location" className="text-[var(--nav-text)] hover:text-[var(--nav-text-hover)] transition-colors">Location</Link>
              <Link href="/#contact" className="text-[var(--nav-text)] hover:text-[var(--nav-text-hover)] transition-colors">Contact</Link>
            </div>
          </div>

          {/* Hamburger menu button - always visible */}
          <div className="ml-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[var(--nav-text)] hover:text-[var(--nav-text-hover)] p-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Hamburger Menu Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full right-0 w-64 bg-[var(--nav-color)] border border-primary/20 rounded-lg shadow-lg z-50"
          >
            <div className="px-4 pt-4 pb-3 space-y-2">
              <Link 
                href="/" 
                className="block px-3 py-2 text-[var(--nav-text)] hover:text-[var(--nav-text-hover)] hover:bg-white/10 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/#about" 
                className="block px-3 py-2 text-[var(--nav-text)] hover:text-[var(--nav-text-hover)] hover:bg-white/10 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/menu" 
                className="block px-3 py-2 text-[var(--nav-text)] hover:text-[var(--nav-text-hover)] hover:bg-white/10 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Menu
              </Link>
              <Link 
                href="/franchise" 
                className="block px-3 py-2 text-[var(--nav-text)] hover:text-[var(--nav-text-hover)] hover:bg-white/10 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Franchise Interest
              </Link>
              <Link 
                href="/#location" 
                className="block px-3 py-2 text-[var(--nav-text)] hover:text-[var(--nav-text-hover)] hover:bg-white/10 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Location
              </Link>
              <Link 
                href="/#contact" 
                className="block px-3 py-2 text-[var(--nav-text)] hover:text-[var(--nav-text-hover)] hover:bg-white/10 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
