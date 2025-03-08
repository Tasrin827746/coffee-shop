"use client";

import { motion } from "framer-motion";

const OurStory: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
      className="py-16 bg-[#f5ecde]"
    >
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-gray-800 mb-6"
        >
          Our Coffee Story
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-gray-600 mb-12 text-lg"
        >
          From humble beginnings to the finest brews, here’s how our journey unfolded.
        </motion.p>

        {/* Timeline Container */}
        <div className="relative border-l-4 border-[#c08552] max-w-4xl mx-auto">
          {[
            {
              year: "2015 - The Beginning",
              description:
                "A dream of creating a space where coffee lovers unite. Our first shop opened in a small cozy corner.",
            },
            {
              year: "2018 - Expanding Flavors",
              description:
                "Experimenting with unique blends, we introduced specialty coffees that became instant favorites.",
            },
            {
              year: "2021 - Sustainability Focus",
              description:
                "We partnered with ethical coffee farmers to ensure every cup you enjoy supports sustainable practices.",
            },
            {
              year: "Present - The Community Hub",
              description:
                "Today, Bean & Bliss is more than a coffee shop—it’s a community. We continue to serve with passion and heart.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: index * 0.3 }}
              viewport={{ once: true }}
              className="relative pl-8 pb-12 last:pb-0"
            >
              <span className="absolute top-0 left-[-12px] w-6 h-6 bg-[#c08552] rounded-full"></span>
              <h3 className="text-2xl font-semibold text-gray-800">{item.year}</h3>
              <p className="text-gray-600 mt-2">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default OurStory;
