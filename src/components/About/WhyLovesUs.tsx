"use client";

import { useState, useEffect } from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

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
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Why People Love Us</h2>
        <p className="text-gray-600 mb-12 text-lg">
          Hear from our happy customers who enjoy every sip of our coffee.
        </p>

        {/* Testimonial Card */}
        <div className="relative bg-mocha p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
          <FaQuoteLeft className="absolute top-4 left-4 text-gray-200 text-xl" />
          <p className="text-gray-300 italic text-lg mt-2">{testimonials[currentIndex].feedback}</p>
          <FaQuoteRight className="absolute bottom-4 right-4 text-gray-200 text-xl" />
          <div className="mt-6">
            <img
              src={testimonials[currentIndex].image}
              alt={testimonials[currentIndex].name}
              className="w-16 h-16 rounded-full mx-auto mb-2"
            />
            <h3 className="text-lg font-semibold">{testimonials[currentIndex].name}</h3>
          </div>
        </div>

        {/* Navigation Buttons */}
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
    </section>
  );
};

export default CustomerTestimonials;
