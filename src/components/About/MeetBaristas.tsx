const MeetBaristas: React.FC = () => {
    const baristas = [
      { name: "Emma Carter", role: "Head Barista", image: "/emma.webp" },
      { name: "Liam Johnson", role: "Latte Artist", image: "/liam.webp" },
      { name: "Sophia Brown", role: "Coffee Brewer", image: "/sophia.avif" },
    ];
  
    return (
      <section className="py-16 bg-[#f7f2ea]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Meet Our Baristas</h2>
          <p className="text-gray-600 mb-12 text-lg">
            Passionate, skilled, and always ready to craft the perfect cup for you.
          </p>
  
          {/* Team Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {baristas.map((barista, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg bg-white">
                <img
                  src={barista.image}
                  alt={barista.name}
                  className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-[#c08552] text-white p-4 text-center">
                  <h3 className="text-xl font-semibold">{barista.name}</h3>
                  <p className="text-sm">{barista.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default MeetBaristas;
  