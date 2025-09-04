import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const DynamicIslandHeader: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleExploreCollection = () => {
    const showcaseElement = document.getElementById('diamond-showcase');
    showcaseElement?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContactUs = () => {
    const footerElement = document.getElementById('footer');
    footerElement?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="fixed top-4 w-full z-50 flex justify-center px-5 sm:px-4"
    >
      <div className={`relative w-full max-w-6xl transition-all duration-500 ${
        isScrolled
          ? 'bg-white/10 backdrop-blur-xl border border-white/30 rounded-2xl px-8 py-2 shadow-2xl shadow-white/20'
          : 'bg-white/5 backdrop-blur-xl border border-white/20 rounded-full px-8 py-2 shadow-xl shadow-white/10'
      }`}
      style={{
        boxShadow: isScrolled 
          ? '0 25px 50px -12px rgba(255, 255, 255, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
          : '0 20px 40px -12px rgba(255, 255, 255, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
      }}>
        
        {/* Background sparkles */}
        <div className="absolute inset-0 overflow-hidden rounded-inherit">
          <div className="absolute top-2 right-4 text-white text-xs opacity-40 animate-sparkle">✦</div>
          <div className="absolute bottom-2 left-6 text-white text-xs opacity-30 animate-sparkle" style={{ animationDelay: '1s' }}>✧</div>
        </div>

        <div className="relative flex items-center justify-between">
          {/* Logo + Title */}
          <Link to="/" className="flex items-center space-x-2 sm:space-x-3 group flex-shrink-0">
            <div className="relative">
              <div className="w-16 h-12 sm:w-20 sm:h-16 rounded-lg overflow-hidden group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <img 
                  src="/images/logos/onlylogo.png" 
                  alt="SR Élan Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="absolute -top-1 -right-1 text-white text-xs opacity-0 group-hover:opacity-80 transition-opacity duration-300 animate-sparkle">✦</div>
            </div>
            <div className="block">
              <span className="text-sm sm:text-lg lg:text-xl font-bold text-white group-hover:text-gray-200 transition-colors duration-300">
                SR Natural Diamonds
              </span>
              <div className="text-xs text-gray-400 font-medium -mt-1">
                Legacy meets Luxury
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className={`hidden md:flex items-center space-x-8 transition-all duration-500 ${isScrolled ? 'opacity-100' : 'opacity-90'} flex-grow justify-center`}>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="relative text-base font-semibold text-white hover:text-gray-200 transition-all duration-300"
            >
              Home
              <span className="absolute -top-2 -right-2 text-white text-xs opacity-0 hover:opacity-60 transition-opacity duration-300 animate-sparkle">✦</span>
            </button>
            <button 
              onClick={handleContactUs}
              className="relative text-base font-semibold text-gray-300 hover:text-white transition-all duration-300"
            >
              Contact Us
              <span className="absolute -top-2 -right-2 text-white text-xs opacity-0 hover:opacity-60 transition-opacity duration-300 animate-sparkle">✦</span>
            </button>
          </nav>

          {/* Explore Collection Button (Desktop) */}
          <div className={`hidden md:block transition-all duration-500 ${isScrolled ? 'opacity-100' : 'opacity-90'} flex-shrink-0`}>
            <button 
              onClick={handleExploreCollection}
              className="group relative bg-white text-black px-6 py-3 rounded-full text-sm font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl min-h-[44px]"
            >
              <span className="relative z-10 flex items-center">
                Explore Collection
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};