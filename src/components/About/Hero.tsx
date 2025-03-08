"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="relative w-full h-[500px]"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute inset-0"
        >
          <Image
            src="/beans.jpg"
            alt="About Our Coffee Shop"
            layout="fill"
            objectFit="cover"
            quality={90}
            className="brightness-75"
          />
        </motion.div>
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg"
        >
          About Bean & Bliss
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-lg text-white mt-4 max-w-2xl drop-shadow-md"
        >
          Brewing happiness, one cup at a time. Experience the finest coffee and cozy atmosphere at Bean & Bliss.
        </motion.p>
      </div>
    </motion.section>
  );
};

export default Hero;
