import { Instagram, Facebook, Twitter } from "lucide-react";
import Link from "next/link";
import { CONTACT, SOCIALS } from "../../lib/site";

export default function Footer() {
  return (
    <footer className="bg-[var(--footer-bg)] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-[var(--nav-text)]">Madina Halal Food</h3>
            <p className="text-[var(--footer-text)]">
              Authentic halal cuisine served with love and tradition.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-[var(--footer-text)]">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/menu" className="hover:text-white transition-colors">Menu</Link></li>
              <li><Link href="/franchise" className="hover:text-white transition-colors">Franchise</Link></li>
              <li><Link href="/#location" className="hover:text-white transition-colors">Location</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-[var(--footer-text)]">
              <li>{CONTACT.address}</li>
              <li>Phone: {CONTACT.phone}</li>
              <li>Email: {CONTACT.email}</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-3">
              <a href={SOCIALS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-[var(--footer-text)] hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href={SOCIALS.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-[var(--footer-text)] hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href={SOCIALS.twitter} target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="text-[var(--footer-text)] hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-[var(--footer-border)] mt-8 pt-8 text-center text-[var(--footer-text)] text-sm">
          <p>&copy; {new Date().getFullYear()} Madina Halal Food. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
