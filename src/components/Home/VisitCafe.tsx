"use client";

import Link from "next/link";
import { MapPin } from "lucide-react";
import { motion } from "framer-motion";

const VisitOurCafe: React.FC = () => {
  return (
    <section className="bg-cream py-16 px-6 md:px-12 text-center">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          className="text-4xl font-bold text-coffee mb-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
        >
          Visit Our Cafe
        </motion.h2>
        <motion.p
          className="text-lg text-espresso mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          Experience the cozy ambiance, rich aromas, and handcrafted coffee at Bean & Bliss.
          We’re excited to welcome you!
        </motion.p>
        
        {/* Address & Map */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <MapPin size={24} className="text-rust" />
          <p className="text-lg text-espresso">123 Coffee Street, Blisstown, CO 12345</p>
        </motion.div>
        
        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <Link
            href="/contact"
            className="mt-6 inline-block bg-rust text-cream px-6 py-3 rounded-lg text-lg font-semibold hover:bg-espresso transition"
          >
            Get Directions
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default VisitOurCafe;
