"use client";

import { motion } from "framer-motion";

const Banner: React.FC = () => {
    
    const scrollToMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const menuSection = document.getElementById("all-items");
        if (menuSection) {
          menuSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative w-full h-[500px] bg-cover bg-center text-white flex items-center justify-center"
        style={{ backgroundImage: "url('/menu.avif')" }}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="relative z-10 text-center mt-8">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl font-semibold leading-tight"
          >
            Explore Our Menu
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-lg mt-4"
          >
            Delicious brews and tasty bites made just for you
          </motion.p>
          <motion.button 
            onClick={scrollToMenu}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-6 inline-block bg-rust text-white px-6 py-3 rounded-lg text-lg hover:bg-mocha transition"
          >
            Browse Menu
          </motion.button>
        </div>
      </motion.section>
    );
};

export default Banner;
