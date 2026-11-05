"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ORDER_URL } from "../../lib/site";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/menu", label: "Menu" },
  { href: "/franchise", label: "Franchise" },
  { href: "/#location", label: "Location" },
  { href: "/#contact", label: "Contact" },
];

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[var(--nav-color)] border-b border-primary/20 shadow-md">
      <div className="w-full pr-3 sm:pr-6 lg:pr-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="h-20 shrink-0" aria-label="Madina Halal Food home">
            <Image
              src="/Cornerlogo.jpg"
              alt="Madina Halal Food Logo"
              width={120}
              height={80}
              priority
              className="h-20 w-auto object-contain hover:opacity-90 transition-opacity"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-[var(--nav-text)] hover:text-white transition-colors font-medium"
              >
                {l.label}
              </Link>
            ))}
            <a
              href={ORDER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-secondary text-white px-5 py-2 rounded-lg font-semibold transition-colors"
            >
              Order Now
            </a>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={ORDER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-secondary text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
            >
              Order Now
            </a>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              className="text-[var(--nav-text)] hover:text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden bg-[var(--nav-color)] border-t border-primary/20"
          >
            <div className="px-4 py-3 space-y-1">
              {LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="block px-3 py-2 text-[var(--nav-text)] hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
