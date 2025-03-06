"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const initialMenuItems = [
  {
    id: 1,
    name: "Espresso",
    image: "/espresso.jpg",
    price: "$3.50",
    description: "A rich, bold shot of pure coffee energy.",
  },
  {
    id: 2,
    name: "Cappuccino",
    image: "/cappuccino.webp",
    price: "$4.50",
    description: "Smooth, creamy, and topped with delicate foam.",
  },
  {
    id: 3,
    name: "Caramel Latte",
    image: "/caramel-latte.webp",
    price: "$5.00",
    description: "Sweet caramel infused with creamy espresso.",
  },
];

const additionalMenuItems = [
  {
    id: 4,
    name: "Flat White",
    image: "/flat-white.webp",
    price: "$4.00",
    description: "A smooth and velvety coffee with a balance of espresso and steamed milk.",
  },
  {
    id: 5,
    name: "Mocha",
    image: "/mocha.avif",
    price: "$4.75",
    description: "A sweet blend of espresso, chocolate, and steamed milk.",
  },
  {
    id: 6,
    name: "Iced Latte",
    image: "/iced-latte.jpg",
    price: "$4.25",
    description: "Chilled espresso with milk over ice, perfect for hot days.",
  },
  {
    id: 7,
    name: "Americano",
    image: "/americano.webp",
    price: "$4.00",
    description: "A smooth and velvety coffee with a balance of espresso and steamed milk.",
  },
  {
    id: 8,
    name: "Latte",
    image: "/latte.jpg",
    price: "$4.75",
    description: "A sweet blend of espresso, chocolate, and steamed milk.",
  },
  {
    id: 9,
    name: "Doppio",
    image: "/doppio.webp",
    price: "$4.25",
    description: "Chilled espresso with milk over ice, perfect for hot days.",
  },
];

const SpecialMenu: React.FC = () => {
  const [showMore, setShowMore] = useState(false);

  const menuItems = showMore ? [...initialMenuItems, ...additionalMenuItems] : initialMenuItems;

  return (
    <motion.section
      id="menu"
      className="py-16 bg-gradient-to-b from-orange-50 to-yellow-50"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl font-bold text-gray-800 mb-4"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Our Special Menu
        </motion.h2>
        <motion.p
          className="text-gray-600 mb-12 text-lg"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Handcrafted with love, every cup tells a story.
        </motion.p>

        {/* Menu List */}
        <div className="space-y-6">
          {menuItems.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={item.id}
                className={`relative flex items-center ${isEven ? "" : "flex-row-reverse"}`}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-1/3 h-72 object-cover rounded-lg shadow-md transition-transform transform group-hover:scale-105"
                />
                <div className="ml-20 text-left">
                  <h3 className="text-2xl font-semibold text-gray-800">{item.name}</h3>
                  <p className="text-gray-600">{item.description}</p>
                  <span className="text-gray-900 font-bold text-lg">{item.price}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <button
            onClick={() => setShowMore(!showMore)}
            className="inline-block bg-amber-800 text-cream font-bold py-3 px-6 rounded-full shadow-lg hover:bg-amber-600 transition duration-300 ease-in-out"
          >
            {showMore ? "See Less" : "See Full Menu"}
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SpecialMenu;
