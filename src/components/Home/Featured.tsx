"use client";

import React from 'react';
import { motion } from 'framer-motion';

const featured = [
  { id: 1, name: "Espresso", image: "/espresso.jpg", description: "A bold and rich shot of pure coffee." },
  { id: 2, name: "Cappuccino", image: "/cappuccino.webp", description: "Smooth espresso with steamed milk and froth." },
  { id: 3, name: "Latte", image: "/latte.jpg", description: "Creamy, mild, and perfect for any time of the day." },
  { id: 4, name: "Mocha", image: "/mocha.avif", description: "A bold and rich shot of pure coffee." },
  { id: 5, name: "Americano", image: "/americano.webp", description: "Smooth espresso with steamed milk and froth." },
  { id: 6, name: "Doppio", image: "/doppio.webp", description: "Creamy, mild, and perfect for any time of the day." },
];

const Featured: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 text-center">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-6"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          Our Best Brews
        </motion.h2>
        <motion.p 
          className="text-lg text-gray-600 mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          Experience the finest blends crafted with love and expertise.
        </motion.p>

        {/* Coffee Cards */}
        <motion.div 
          className="grid gap-8 md:grid-cols-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, staggerChildren: 0.2 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          {featured.map((coffee) => (
            <motion.div 
              key={coffee.id} 
              className="bg-cream p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <img src={coffee.image} alt={coffee.name} className="w-full h-56 object-cover rounded-lg mb-4" />
              <h3 className="text-2xl font-semibold text-gray-800">{coffee.name}</h3>
              <p className="text-gray-600 mt-2">{coffee.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Featured;
