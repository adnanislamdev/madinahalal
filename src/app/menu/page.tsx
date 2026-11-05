"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { ORDER_URL } from "../../lib/site";

const menuItems = [
  {
    name: "Chicken Platter",
    price: "$15.99",
    description: "Seasoned chicken over fragrant basmati rice with fresh salad and white sauce",
    image: "/menu/chicken-platter.jpg",
  },
  {
    name: "Lamb Platter",
    price: "$18.99",
    description: "Slow-cooked, tender lamb over rice with grilled pepper and house salad",
    image: "/menu/lamb-platter.jpg",
  },
  {
    name: "Falafel Wrap",
    price: "$12.99",
    description: "Crispy falafel with fresh vegetables and tahini sauce",
    image: "/menu/falafel-wrap.jpg",
  },
  {
    name: "Beef Shawarma",
    price: "$14.99",
    description: "Tender beef with garlic sauce and fresh vegetables",
    image: "/menu/beef-shawarma.jpg",
  },
  {
    name: "Chicken Shawarma",
    price: "$8.99",
    description: "Crispy chicken with garlic sauce wrapped with fresh vegetables",
    image: "/menu/chicken-shawarma.jpg",
  },
  {
    name: "Mango Lassi",
    price: "$4.99",
    description: "Refreshing yogurt drink with sweet mango",
    image: "/menu/mango-lassi.jpg",
  },
];

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-32 pb-20 bg-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Our Menu</h1>
            <p className="text-xl text-text-light max-w-3xl mx-auto">
              Discover our delicious selection of authentic halal dishes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col"
              >
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-semibold text-primary mb-2">{item.name}</h3>
                  <p className="text-text-light mb-4 flex-1">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-secondary">{item.price}</span>
                    <a
                      href={ORDER_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-primary hover:bg-secondary text-white px-4 py-2 rounded-lg font-semibold transition-colors"
                    >
                      Order Now
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="mt-12 text-center text-xs text-gray-500">
            Photos via Wikimedia Commons (CC0; Beef Shawarma by Hill93 and Mango Lassi by Nithyasrm,{" "}
            <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer" className="underline">
              CC BY-SA 4.0
            </a>
            ).
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
