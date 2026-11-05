"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Phone,
  MapPin,
  Clock,
  Heart,
  Users,
  Award,
  Mail,
  Instagram,
  Facebook,
  Twitter,
  ShoppingBag,
  ArrowRight,
} from "lucide-react";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import ReservationButton from "./components/ReservationButton";
import { CONTACT, HOURS_TBD, ORDER_URL, SOCIALS } from "../lib/site";

const FEATURED = [
  { name: "Chicken Platter", price: "$15.99", image: "/menu/chicken-platter.jpg" },
  { name: "Lamb Platter", price: "$18.99", image: "/menu/lamb-platter.jpg" },
  { name: "Chicken Shawarma", price: "$8.99", image: "/menu/chicken-shawarma.jpg" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-[var(--nav-color)]">
        <div className="absolute inset-0 z-0">
          <video
            src="/videoplayback.mov"
            poster="/menu/chicken-platter.jpg"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 pointer-events-none" />
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
              Welcome to <span className="text-accent">Madina Halal Food</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-gray-100">
              Authentic Halal Cuisine • Fresh Ingredients • Traditional Recipes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={ORDER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#d87025] hover:bg-[#fd5506] text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 border-2 border-[#d87025] hover:border-[#fd5506] hover:shadow-lg hover:scale-105"
              >
                <ShoppingBag className="h-5 w-5" />
                Order Now
              </a>
              <ReservationButton className="bg-white hover:bg-gray-100 text-[#d87025] px-8 py-3 rounded-lg font-semibold transition-all duration-300 border-2 border-white hover:border-gray-200 hover:shadow-lg hover:scale-105" />
              <Link
                href="/menu"
                className="text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 border-2 border-white/70 hover:bg-white/10 hover:scale-105"
              >
                View Menu
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-background scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">About Madina Halal Food</h2>
            <p className="text-xl text-text-light max-w-3xl mx-auto">
              We are committed to serving authentic halal cuisine with the highest standards of quality and freshness.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { Icon: Award, title: "Certified Halal", text: "All our ingredients and preparation methods are certified halal by recognized Islamic authorities." },
              { Icon: Heart, title: "Fresh Ingredients", text: "We source the freshest ingredients daily to ensure the highest quality in every dish." },
              { Icon: Users, title: "Family Tradition", text: "Our recipes have been passed down through generations, preserving authentic flavors." },
            ].map(({ Icon, title, text }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="text-center p-8 rounded-xl bg-accent/10"
              >
                <Icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-text-light">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="py-20 bg-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-2">Customer Favorites</h2>
              <p className="text-lg text-text-light">A taste of what&apos;s coming out of our kitchen.</p>
            </div>
            <Link href="/menu" className="inline-flex items-center gap-1 font-semibold text-primary hover:text-secondary">
              See full menu <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURED.map((dish, i) => (
              <motion.div
                key={dish.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative h-72 rounded-xl overflow-hidden shadow-lg"
              >
                <Image src={dish.image} alt={dish.name} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between text-white">
                  <h3 className="text-xl font-semibold">{dish.name}</h3>
                  <span className="text-lg font-bold text-[var(--nav-text)]">{dish.price}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Hours */}
      <section id="location" className="py-20 bg-background scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Visit Us</h2>
            <p className="text-xl text-text-light max-w-3xl mx-auto">
              Our first location is coming soon. In the meantime, order online for delivery.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-xl border border-primary/15 p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-primary mb-6">Location</h3>
              <div className="flex items-start gap-3 mb-6">
                <MapPin className="h-5 w-5 text-primary mt-1 shrink-0" />
                <p>{CONTACT.address}</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href={ORDER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary hover:bg-secondary text-white px-6 py-2.5 rounded-lg font-semibold transition-colors"
                >
                  Order for Delivery
                </a>
                <ReservationButton className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                  Reserve a Table
                </ReservationButton>
              </div>
            </div>

            <div className="rounded-xl border border-primary/15 p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-primary mb-6">Hours</h3>
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary mt-1 shrink-0" />
                <p>{HOURS_TBD}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-[var(--nav-color)] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-[var(--nav-text)] mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-12">
            Catering, large parties, or just a question about the menu — we&apos;d love to hear from you.
          </p>
          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="rounded-xl bg-white/5 p-6">
              <Phone className="h-8 w-8 text-[var(--nav-text)] mx-auto mb-3" />
              <p className="text-sm uppercase tracking-wide text-gray-400 mb-1">Call</p>
              <p className="text-white font-medium">{CONTACT.phone}</p>
            </div>
            <div className="rounded-xl bg-white/5 p-6">
              <Mail className="h-8 w-8 text-[var(--nav-text)] mx-auto mb-3" />
              <p className="text-sm uppercase tracking-wide text-gray-400 mb-1">Email</p>
              <p className="text-white font-medium break-all">{CONTACT.email}</p>
            </div>
            <div className="rounded-xl bg-white/5 p-6">
              <p className="text-sm uppercase tracking-wide text-gray-400 mb-4">Follow</p>
              <div className="flex justify-center gap-3">
                {[
                  { href: SOCIALS.instagram, Icon: Instagram, label: "Instagram" },
                  { href: SOCIALS.facebook, Icon: Facebook, label: "Facebook" },
                  { href: SOCIALS.twitter, Icon: Twitter, label: "X (Twitter)" },
                ].map(({ href, Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="bg-primary hover:bg-secondary text-white p-3 rounded-lg transition-colors"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
