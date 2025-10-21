"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function MenuPage() {
  // Menu items with image placeholders
  const menuItems = [
    { 
      name: "Chicken Platter", 
      price: "$15.99", 
      description: "Fragrant basmati rice with tender chicken and aromatic spices",
      image: "/placeholder-chicken-biryani.jpg" // TODO: Replace with actual dish image path
    },
    { 
      name: "Lamb Platter", 
      price: "$18.99", 
      description: "Slow-cooked lamb in rich, flavorful cut Lamb",
      image: "/placeholder-lamb-curry.jpg" // TODO: Replace with actual dish image path
    },
    { 
      name: "Falafel Wrap", 
      price: "$12.99", 
      description: "Crispy falafel with fresh vegetables and tahini sauce",
      image: "/placeholder-falafel-wrap.jpg" // TODO: Replace with actual dish image path
    },
    { 
      name: "Beef Shawarma", 
      price: "$14.99", 
      description: "Tender beef with garlic sauce and fresh vegetables",
      image: "/placeholder-beef-shawarma.jpg" // TODO: Replace with actual dish image path
    },
    { 
      name: "Chicken Shawarma", 
      price: "$8.99", 
      description: "Crispy chicken with garlic sauce wrapped with fresh vegetables",
      image: "/placeholder-vegetable-samosas.jpg" // TODO: Replace with actual dish image path
    },
    { 
      name: "Mango Lassi", 
      price: "$4.99", 
      description: "Refreshing yogurt drink with sweet mango",
      image: "/placeholder-mango-lassi.jpg" // TODO: Replace with actual dish image path
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Menu Section */}
      <section className="pt-20 py-20 bg-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-primary mb-4">Our Menu</h1>
            <p className="text-xl text-text-light max-w-3xl mx-auto">
              Discover our delicious selection of authentic halal dishes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                {/* Dish Image */}
                <div className="relative h-48 w-full">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                    onError={(e) => {
                      // Fallback to a placeholder if image doesn't exist
                      const target = e.target as HTMLImageElement;
                      target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%236b7280' font-family='Arial' font-size='16'%3EImage Placeholder%3C/text%3E%3C/svg%3E";
                    }}
                  />
                </div>
                
                {/* Dish Details */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-2">{item.name}</h3>
                  <p className="text-text-light mb-4">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-secondary">{item.price}</span>
                    <a 
                      href="https://www.ubereats.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-primary hover:bg-secondary text-white px-4 py-2 rounded-lg transition-colors"
                    >
                      Order Now
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
