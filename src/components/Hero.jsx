import React from 'react';

const Hero = () => {
  return (
    <section 
      id="hero" 
      className="h-[70vh] bg-cover bg-center flex items-center justify-center" 
      style={{ backgroundImage: "url('hero-bg.jpg')" }} // Relative path from the public folder
    >
      <h1 
        className="text-4xl md:text-6xl text-white font-bold bg-black bg-opacity-50 px-6 py-4 rounded-md" 
        style={{ fontFamily: "'NOURD', sans-serif", fontWeight: 'bold' }}
      >
        Contact Us
      </h1>
    </section>
  );
};

export default Hero;
