const OurStory: React.FC = () => {
    return (
      <section className="py-16 bg-[#f5ecde]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Coffee Story</h2>
          <p className="text-gray-600 mb-12 text-lg">
            From humble beginnings to the finest brews, here’s how our journey unfolded.
          </p>
  
          {/* Timeline Container */}
          <div className="relative border-l-4 border-[#c08552] max-w-4xl mx-auto">
            {/* Timeline Item 1 */}
            <div className="relative pl-8 pb-12">
              <span className="absolute top-0 left-[-12px] w-6 h-6 bg-[#c08552] rounded-full"></span>
              <h3 className="text-2xl font-semibold text-gray-800">2015 - The Beginning</h3>
              <p className="text-gray-600 mt-2">
                A dream of creating a space where coffee lovers unite. Our first shop opened in a small cozy corner.
              </p>
            </div>
  
            {/* Timeline Item 2 */}
            <div className="relative pl-8 pb-12">
              <span className="absolute top-0 left-[-12px] w-6 h-6 bg-[#c08552] rounded-full"></span>
              <h3 className="text-2xl font-semibold text-gray-800">2018 - Expanding Flavors</h3>
              <p className="text-gray-600 mt-2">
                Experimenting with unique blends, we introduced specialty coffees that became instant favorites.
              </p>
            </div>
  
            {/* Timeline Item 3 */}
            <div className="relative pl-8 pb-12">
              <span className="absolute top-0 left-[-12px] w-6 h-6 bg-[#c08552] rounded-full"></span>
              <h3 className="text-2xl font-semibold text-gray-800">2021 - Sustainability Focus</h3>
              <p className="text-gray-600 mt-2">
                We partnered with ethical coffee farmers to ensure every cup you enjoy supports sustainable practices.
              </p>
            </div>
  
            {/* Timeline Item 4 */}
            <div className="relative pl-8">
              <span className="absolute top-0 left-[-12px] w-6 h-6 bg-[#c08552] rounded-full"></span>
              <h3 className="text-2xl font-semibold text-gray-800">Present - The Community Hub</h3>
              <p className="text-gray-600 mt-2">
                Today, Bean & Bliss is more than a coffee shop—it’s a community. We continue to serve with passion and heart.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default OurStory;
  