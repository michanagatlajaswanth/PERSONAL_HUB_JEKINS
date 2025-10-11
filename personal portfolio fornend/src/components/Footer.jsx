import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-32 py-6 bg-black text-white">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center md:justify-between gap-6 md:gap-0 relative">

        {/* Left: Title */}
        <div className="z-10 md:static">
          <h1 className="text-2xl font-bold">Portfolio</h1>
        </div>

        {/* Center: Navigation (centered on desktop using absolute positioning) */}
        <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
          <div className="flex gap-7">
            <a href="#beranda">Home</a>
            <a href="#tentang">About</a>
            <a href="#proyek">Projects</a>
          </div>
        </div>

        {/* Right: Social Icons */}
        <div className="flex items-center gap-3 z-10">
          <a href="#" className="hover:text-gray-400 transition">
            <i className="ri-github-fill ri-2x"></i>
          </a>
          <a href="#" className="hover:text-gray-400 transition">
            <i className="ri-instagram-fill ri-2x"></i>
          </a>
          <a href="#" className="hover:text-gray-400 transition">
            <i className="ri-reddit-fill ri-2x"></i>
          </a>
          <a href="#" className="hover:text-gray-400 transition">
            <i className="ri-youtube-fill ri-2x"></i>
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
