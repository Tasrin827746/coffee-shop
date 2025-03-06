const OurValues: React.FC = () => {
  return (
    <section className="py-16 bg-[url('/coffee-texture.jpg')] bg-cover bg-center relative">
      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-gray-50"></div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl font-bold text-center text-black mb-10">Our Values</h2>

        {/* Grid Layout with Staggered Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Quality */}
          <div className="bg-cream backdrop-blur-md p-6 rounded-lg shadow-lg border hover:scale-105 transition transform duration-300">
            <div className="flex items-center gap-4">
              <span className="text-5xl">☕</span>
              <h3 className="text-2xl font-semibold text-coffee">Quality</h3>
            </div>
            <p className="text-coffee mt-4">
              We source the finest coffee beans and craft each cup with precision and passion.
            </p>
          </div>

          {/* Community - Placed Higher */}
          <div className="bg-mocha backdrop-blur-md p-6 rounded-lg shadow-lg border hover:scale-105 transition transform duration-300 md:translate-y-8">
            <div className="flex items-center gap-4">
              <span className="text-5xl">🤝</span>
              <h3 className="text-2xl font-semibold text-cream">Community</h3>
            </div>
            <p className="text-cream mt-4">
              We foster a welcoming space for coffee lovers, supporting local artists and initiatives.
            </p>
          </div>

          {/* Sustainability */}
          <div className="bg-orange-200 backdrop-blur-md p-6 rounded-lg shadow-lg border hover:scale-105 transition transform duration-300">
            <div className="flex items-center gap-4">
              <span className="text-5xl">🌱</span>
              <h3 className="text-2xl font-semibold text-coffee">Sustainability</h3>
            </div>
            <p className="text-coffee mt-4">
              We prioritize eco-friendly practices, from ethical sourcing to biodegradable packaging.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurValues;
