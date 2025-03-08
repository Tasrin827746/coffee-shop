"use client";

import { motion } from "framer-motion";

const OurValues: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
      className="py-16 bg-[url('/coffee-texture.jpg')] bg-cover bg-center relative"
    >
      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-gray-50"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-black mb-10"
        >
          Our Values
        </motion.h2>

        {/* Grid Layout with Staggered Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Quality",
              description:
                "We source the finest coffee beans and craft each cup with precision and passion.",
              bgColor: "bg-cream",
              textColor: "text-coffee",
              emoji: "☕",
            },
            {
              title: "Community",
              description:
                "We foster a welcoming space for coffee lovers, supporting local artists and initiatives.",
              bgColor: "bg-mocha",
              textColor: "text-cream",
              emoji: "🤝",
              offset: "md:translate-y-8",
            },
            {
              title: "Sustainability",
              description:
                "We prioritize eco-friendly practices, from ethical sourcing to biodegradable packaging.",
              bgColor: "bg-orange-200",
              textColor: "text-coffee",
              emoji: "🌱",
            },
          ].map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.3 }}
              viewport={{ once: true }}
              className={`p-6 rounded-lg shadow-lg border hover:scale-105 transition transform duration-300 ${value.bgColor} ${value.offset || ""}`}
            >
              <div className="flex items-center gap-4">
                <span className="text-5xl">{value.emoji}</span>
                <h3 className={`text-2xl font-semibold ${value.textColor}`}>{value.title}</h3>
              </div>
              <p className={`${value.textColor} mt-4`}>{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default OurValues;
