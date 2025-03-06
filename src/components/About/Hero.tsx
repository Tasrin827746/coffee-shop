"use client";

import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-[500px]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/beans.jpg"
          alt="About Our Coffee Shop"
          layout="fill"
          objectFit="cover"
          quality={90}
          className="brightness-75"
        />
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
          About Bean & Bliss
        </h1>
        <p className="text-lg text-white mt-4 max-w-2xl drop-shadow-md">
          Brewing happiness, one cup at a time. Experience the finest coffee and cozy atmosphere at Bean & Bliss.
        </p>
      </div>
    </section>
  );
};

export default Hero;
