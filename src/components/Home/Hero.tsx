"use client";

import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {

  const scrollToMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const menuSection = document.getElementById("menu");
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: "smooth"});
    }
  };

  return (
    <section 
      className="relative bg-cover bg-center h-screen flex items-center justify-center text-white" 
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <motion.div 
        className="relative z-10 text-center px-6 md:px-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <motion.h1 
          className="text-4xl md:text-6xl font-semibold leading-tight mb-4"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          Savor the Perfect Brew
        </motion.h1>
        <motion.p 
          className="text-lg md:text-2xl mb-8"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          Experience the finest coffee in town, made with love and passion.
        </motion.p>
        <motion.button
          onClick={scrollToMenu}
          className="inline-block bg-yellow-500 text-gray-800 font-bold py-3 px-6 rounded-full shadow-lg hover:bg-yellow-400 transition duration-300 ease-in-out"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          Explore Our Menu
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
