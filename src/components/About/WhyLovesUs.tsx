"use client";

import { useState, useEffect } from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Emily R.",
    feedback: "The best coffee in town! The atmosphere is cozy, and the baristas are super friendly.",
    image: "/emily.jpg",
  },
  {
    name: "Daniel W.",
    feedback: "I love their espresso! Always perfectly brewed with a rich and smooth taste.",
    image: "/daniel.jpg",
  },
  {
    name: "Maria M.",
    feedback: "Their latte art is stunning! I always enjoy my coffee experience here.",
    image: "/maria.jpg",
  },
];

const CustomerTestimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
      className="py-16 bg-gray-100"
    >
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-gray-800 mb-6"
        >
          Why People Love Us
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-gray-600 mb-12 text-lg"
        >
          Hear from our happy customers who enjoy every sip of our coffee.
        </motion.p>

        {/* Testimonial Card with Animation */}
        <div className="relative bg-mocha p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
          <FaQuoteLeft className="absolute top-4 left-4 text-gray-200 text-xl" />
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-gray-300 italic text-lg mt-2">
                {testimonials[currentIndex].feedback}
              </p>
              <FaQuoteRight className="absolute bottom-4 right-4 text-gray-200 text-xl" />
              <div className="mt-6">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full mx-auto mb-2"
                />
                <h3 className="text-lg font-semibold text-white">
                  {testimonials[currentIndex].name}
                </h3>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-6 space-x-4">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-gray-800" : "bg-gray-400"
              } transition`}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default CustomerTestimonials;
