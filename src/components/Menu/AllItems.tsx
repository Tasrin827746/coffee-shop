"use client";
import React from "react";
import { motion } from "framer-motion";

const items = [
  { name: "Espresso", description: "Rich and bold coffee with a smooth finish", price: "$3.99", image: "/espresso.jpg" },
  { name: "Cappuccino", description: "Creamy coffee with steamed milk and a rich foam", price: "$4.49", image: "/cappuccino.webp" },
  { name: "Latte", description: "A smooth blend of espresso and steamed milk", price: "$4.19", image: "/latte.jpg" },
  { name: "Chocolate Croissant", description: "Flaky, buttery, and filled with rich chocolate", price: "$2.99", image: "/chocolate-croissant.jpg" },
  { name: "Blueberry Muffin", description: "Freshly baked with juicy blueberries", price: "$2.49", image: "/blueberry-muffin.jpg" },
  { name: "Americano", description: "A bold shot of espresso with hot water", price: "$3.69", image: "/americano.webp" },
  { name: "Flat White", description: "A creamy espresso drink with steamed milk", price: "$4.39", image: "/flat-white.webp" },
  { name: "Mocha", description: "Espresso with steamed milk and chocolate syrup", price: "$4.79", image: "/mocha.avif" },
  { name: "Macchiato", description: "Espresso topped with a small amount of steamed milk", price: "$3.89", image: "/macchiato.webp" },
  { name: "Affogato", description: "A scoop of vanilla ice cream topped with a shot of espresso", price: "$5.49", image: "/affogato.jpg" },
  { name: "Caramel Latte", description: "A sweet and creamy latte with caramel syrup", price: "$4.59", image: "/caramel-latte.webp" },
  { name: "Doppio", description: "A fall favorite with pumpkin spice and steamed milk", price: "$4.99", image: "/doppio.webp" },
  { name: "Iced Latte", description: "Espresso combined with chilled milk and ice", price: "$4.29", image: "/iced-latte.jpg" },
  { name: "Cold Brew", description: "Smooth coffee brewed with cold water for 12 hours", price: "$3.99", image: "/cold-brew.jpg" },
  { name: "French Toast", description: "Golden, fluffy French toast served with syrup", price: "$5.99", image: "/french-toast.jpg" },
  { name: "Cinnamon Roll", description: "Sweet, gooey cinnamon roll with icing", price: "$3.99", image: "/cinamon.jpg" }
];

const AllItems: React.FC = () => {
  return (
    <section id="all-items" className="py-16 bg-cream">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-semibold">All Items</h2>
        <p className="text-lg text-gray-600 mt-4">Discover our full menu with prices</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-lg cursor-pointer rounded-lg overflow-hidden group"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }} 
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-64 object-cover transition-transform duration-300"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold">{item.name}</h3>
              <p className="text-gray-600 mt-2">{item.description}</p>
              <p className="text-lg font-semibold mt-4">{item.price}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AllItems;
