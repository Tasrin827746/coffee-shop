"use client";

import { motion } from "framer-motion";

const MeetBaristas: React.FC = () => {
  const baristas = [
    { name: "Emma Carter", role: "Head Barista", image: "/emma.webp" },
    { name: "Liam Johnson", role: "Latte Artist", image: "/liam.webp" },
    { name: "Sophia Brown", role: "Coffee Brewer", image: "/sophia.avif" },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
      className="py-16 bg-[#f7f2ea]"
    >
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-gray-800 mb-6"
        >
          Meet Our Baristas
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-gray-600 mb-12 text-lg"
        >
          Passionate, skilled, and always ready to craft the perfect cup for you.
        </motion.p>

        {/* Team Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {baristas.map((barista, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative group overflow-hidden rounded-lg shadow-lg bg-white"
            >
              <img
                src={barista.image}
                alt={barista.name}
                className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-[#c08552] text-white p-4 text-center">
                <h3 className="text-xl font-semibold">{barista.name}</h3>
                <p className="text-sm">{barista.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default MeetBaristas;
