"use client";

const Banner: React.FC = () => {
    
    const scrollToMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const menuSection = document.getElementById("all-items");
        if (menuSection) {
          menuSection.scrollIntoView({ behavior: "smooth"});
        }
      };
    

    return (
      <section
        className="relative w-full h-[500px] bg-cover bg-center text-white flex items-center justify-center"
        style={{ backgroundImage: "url('/menu.avif')" }}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="relative z-10 text-center mt-8">
          <h1 className="text-5xl font-semibold leading-tight">Explore Our Menu</h1>
          <p className="text-lg mt-4">Delicious brews and tasty bites made just for you</p>
          <button 
          onClick={scrollToMenu} 
          className="mt-6 inline-block bg-rust text-white px-6 py-3 rounded-lg text-lg hover:bg-mocha transition"
          >
            Browse Menu
          </button>
        </div>
      </section>
    );
  };
  
  export default Banner;
  