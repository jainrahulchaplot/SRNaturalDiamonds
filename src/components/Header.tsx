import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Gem, Menu } from 'lucide-react';

export const Header: React.FC = () => {
  const location = useLocation();

  return (
    <header className="bg-black/95 backdrop-blur-xl border-b border-obsidian-800 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-3 group relative">
            <div className="w-10 h-10 bg-white text-black rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 animate-glow">
              <Gem className="h-6 w-6" />
            </div>
            <div>
              <span className="font-display text-2xl font-bold text-white group-hover:text-obsidian-200 transition-colors duration-300">
                SR Natural Diamonds
              </span>
              <div className="text-xs text-obsidian-400 font-medium -mt-1">
                Authentic Luxury
              </div>
            </div>
          
          {/* Header sparkle on hover */}
          <div className="absolute -top-1 -right-1 text-white text-xs sparkle opacity-0 group-hover:opacity-60 transition-opacity duration-300">✦</div>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`text-sm font-semibold transition-colors duration-300 relative ${
                location.pathname === '/' 
                  ? 'text-white' 
                  : 'text-obsidian-300 hover:text-white'
              }`}
            >
              Home
              {location.pathname === '/' && (
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white rounded-full animate-glow sparkle"></div>
              )}
            </Link>
            
            <Link 
              to="/products" 
              className={`text-sm font-semibold transition-colors duration-300 relative ${
                location.pathname === '/products' 
                  ? 'text-white' 
                  : 'text-obsidian-300 hover:text-white'
              }`}
            >
              Collection
              {location.pathname === '/products' && (
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white rounded-full animate-glow sparkle"></div>
              )}
            </Link>
            
            <button className="bg-white text-black px-6 py-3 rounded-full text-sm font-semibold hover:shadow-glow-lg transition-all duration-300 btn-premium glow-border sparkle">
              Contact Us
            </button>
          </nav>

          <button className="md:hidden p-2 text-obsidian-300 hover:text-white hover:bg-obsidian-800 rounded-xl transition-all duration-300">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
};