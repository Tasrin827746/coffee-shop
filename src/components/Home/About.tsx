"use client";

import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {

  const scrollToMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      const menuSection = document.getElementById("menu");
      if (menuSection) {
        menuSection.scrollIntoView({ behavior: "smooth"});
      }
    };

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 md:px-12 lg:flex lg:items-center">
        
        {/* Left - Image */}
        <motion.div 
          className="lg:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.2 }} 
        >
          <img 
            src="/about.jpg"
            alt="About Our Coffee Shop" 
            className="w-full rounded-lg shadow-lg"
          />
        </motion.div>

        {/* Right - Text Content */}
        <motion.div 
          className="lg:w-1/2 lg:pl-12 mt-8 lg:mt-0 text-center lg:text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            A Warm Cup, A Cozy Space
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 1 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            Welcome to our café, where every sip tells a story. We craft each cup with passion, using ethically sourced beans to bring you the best flavors. Whether you’re here for a morning boost or a relaxing evening, our cozy ambiance is your perfect escape.
          </motion.p>
          <motion.button
                   onClick={scrollToMenu}
                   className="inline-block bg-yellow-500 text-gray-800 font-bold py-3 px-6 rounded-full shadow-lg hover:bg-yellow-400 transition duration-300 ease-in-out"
                   initial={{ opacity: 0, scale: 0.8 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   transition={{ delay: 1, duration: 0.5 }}
                   viewport={{ once: false, amount: 0.2 }}
                 >
                   Discover Our Coffee
                 </motion.button>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
