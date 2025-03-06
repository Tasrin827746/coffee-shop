"use client";

import React, { useState, useEffect } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Joy Moark",
    image: "/dp1.jpg",
    review:
      "Now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many websites still in their infancy.",
  },
  {
    id: 2,
    name: "Emily Johnson",
    image: "/dp2.jpg",
    review:
      "The best coffee I’ve ever had! Cozy atmosphere and amazing service.",
  },
  {
    id: 3,
    name: "Michael Brown",
    image: "/dp4.jpeg",
    review: "A great place to relax and enjoy a perfect cappuccino.",
  },
  {
    id: 4,
    name: "Sophia Lee",
    image: "/dp3.jpg",
    review: "Absolutely love this café! The espresso is top-notch.",
  },
];

const CustomerReview: React.FC = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-mocha">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-gray-300 text-left mb-6"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          WHAT SAYS CUSTOMERS
        </motion.h2>

        <div className="flex items-center space-x-8">
          {/* Image */}
          <motion.div 
            className="w-1/3"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={testimonials[index].image}
              alt={testimonials[index].name}
              className="w-400px h-300px rounded-lg shadow-md"
            />
          </motion.div>

          {/* Review Content */}
          <motion.div 
            className="w-2/3"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-gray-300">
              {testimonials[index].name}
            </h3>
            <p className="text-gray-300 mt-4">{testimonials[index].review}</p>
          </motion.div>

          {/* Navigation Buttons */}
          <div className="flex flex-col space-y-4">
            <button
              onClick={nextSlide}
              className="p-3 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition"
            >
              <FaArrowRight />
            </button>
            <button
              onClick={prevSlide}
              className="p-3 bg-cream text-black rounded-md hover:bg-red-500 transition"
            >
              <FaArrowLeft />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerReview;