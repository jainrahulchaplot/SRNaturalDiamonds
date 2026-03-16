import React from 'react';
import { Phone, Mail, MapPin, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-black text-obsidian-200 relative overflow-hidden">
      {/* Background sparkles */}
      <div className="absolute inset-0">
        <div className="absolute top-5 sm:top-10 left-5 sm:left-10 text-white text-xs sm:text-sm sparkle opacity-20">✦</div>
        <div className="absolute top-10 sm:top-20 right-10 sm:right-20 text-white text-sm sm:text-lg sparkle opacity-30">✧</div>
        <div className="absolute bottom-10 sm:bottom-20 left-10 sm:left-20 text-white text-xs sm:text-sm sparkle opacity-20">✦</div>
        <div className="absolute bottom-5 sm:bottom-10 right-5 sm:right-10 text-white text-sm sm:text-lg sparkle opacity-30">✧</div>
        <div className="absolute top-1/2 left-1/4 text-white text-xs sparkle opacity-15">✦</div>
        <div className="absolute top-1/3 right-1/3 text-white text-xs sm:text-sm sparkle opacity-25">✧</div>
      </div>
      
      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg sm:rounded-xl overflow-hidden group-hover:scale-110 transition-transform duration-300">
                <img
                  src="/images/logos/onlylogo.png"
                  alt="SR Élan Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-display text-lg sm:text-xl lg:text-2xl font-bold text-white group-hover:text-obsidian-200 transition-colors duration-300">
                  SR Natural Diamonds
                </span>
                <div className="text-xs sm:text-sm text-obsidian-400 font-medium -mt-1">
                  Legacy meets Luxury
                </div>
              </div>
            </div>
            <p className="text-sm sm:text-base text-obsidian-300 leading-relaxed">
              Bringing authentic luxury and natural diamonds to every Indian woman through 
              traditional craftsmanship and modern elegance.
            </p>
            <div className="flex items-center space-x-2 text-obsidian-300">
              <Heart className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="text-xs sm:text-sm font-medium">Made with love in India</span>
            </div>
          </div>
          
          <div className="space-y-4 sm:space-y-6">
            <h3 className="font-display text-lg sm:text-xl font-semibold text-white">Contact Information</h3>
            <div className="space-y-3 sm:space-y-4 text-sm">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-8 h-8 bg-white text-black rounded-md sm:rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="h-3 w-3 sm:h-4 sm:w-4" />
                </div>
                <span className="text-xs sm:text-sm text-obsidian-300">+91 93525 60093</span>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-8 h-8 bg-white text-black rounded-md sm:rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="h-3 w-3 sm:h-4 sm:w-4" />
                </div>
                <span className="text-xs sm:text-sm text-obsidian-300 break-all">srsonsros@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-8 h-8 bg-white text-black rounded-md sm:rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-3 w-3 sm:h-4 sm:w-4" />
                </div>
                <span className="text-xs sm:text-sm text-obsidian-300">Udaipur & Delhi Branch Office</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-obsidian-800 text-center">
          <p className="text-xs sm:text-sm text-obsidian-400 px-4">
            © 2025 SR Natural Diamonds. All rights reserved. Committed to authenticity and excellence.
          </p>
        </div>
      </div>
    </footer>
  );
};