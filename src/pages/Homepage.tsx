import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Shield, Heart, Sparkles, Award, Gem } from 'lucide-react';
import { DiamondParticles } from '../components/DiamondParticles';
import { SparkleEffect } from '../components/SparkleEffect';
import { DiamondBundleShowcase } from '../components/DiamondBundleShowcase';

interface HomepageProps {
  onOpenVoiceAssistant: () => void;
}

export const Homepage: React.FC<HomepageProps> = ({ onOpenVoiceAssistant }) => {
  const [sparkleHero, setSparkleHero] = useState(false);
  const [sparkleValues, setSparkleValues] = useState(false);

  return (
    <div>
      {/* Brand Story Section - Meet Your Founder */}
      <section className="py-12 sm:py-16 lg:py-24 relative overflow-hidden">
        <DiamondParticles count={10} />

        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-10 sm:top-20 right-10 sm:right-20 w-32 sm:w-64 h-32 sm:h-64 bg-white/5 rounded-full blur-3xl animate-glow"></div>
          <div className="absolute bottom-10 sm:bottom-20 left-10 sm:left-20 w-32 sm:w-64 h-32 sm:h-64 bg-white/5 rounded-full blur-3xl animate-glow" style={{ animationDelay: '-2s' }}></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-5 sm:px-8 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 lg:gap-20 items-end">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="aspect-square bg-obsidian-800 rounded-full overflow-hidden shadow-obsidian-lg glass-card glow-border floating-card">
                  <img 
                    src="/images/hero/bothfounders.png"
                    alt="Founder of SR Natural Diamonds"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    style={{ borderRadius: '20px' }}
                  />
                  
                  {/* Image sparkles */}
                  <div className="absolute inset-0">
                    <div className="absolute top-3 sm:top-6 right-3 sm:right-6 text-white text-lg sm:text-xl sparkle opacity-70">✦</div>
                    <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 text-white text-base sm:text-lg sparkle opacity-50">✧</div>
                  </div>
                </div>

                {/* Visionary Founder Card - aligned with image width */}
                <div className="absolute -bottom-4 left-0 right-0 glass-card-light p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-diamond sparkle">
                  <div className="text-center">
                    <div className="font-display text-lg sm:text-2xl font-bold text-white">Mohit Kumar & Leena Chaplot </div>
                    <div className="text-medium sm:text-sm text-obsidian-300 font-medium">Founders</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 space-y-4 sm:space-y-8 pt-4 lg:pt-0">
              <div className="space-y-4 sm:space-y-6">
                <div className="inline-flex items-center space-x-2 glass-card px-3 sm:px-4 py-2 rounded-full">
                  <Heart className="h-4 w-4 text-white animate-sparkle" />
                  <span className="text-xs sm:text-sm font-medium text-obsidian-200">Legacy meets Luxury</span>
                </div>

                <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white sparkle px-4 lg:px-0">
                  Meet Our Founders
                </h2>

                <div className="space-y-4 sm:space-y-6 text-sm sm:text-base lg:text-lg text-obsidian-200 leading-relaxed px-4 lg:px-0">
                  <p>
                    At the heart of SR Natural Diamonds is a legacy carried forward with pride and purpose. Our founder, a seasoned leader from the prestigious SR and Sons family, brings decades of business excellence and deep cultural values to a new frontier of luxury jewelry.
                  </p>
                  <p>
                    As a respected voice within the Jain community and beyond, he embodies the ideals of trust, simplicity, and timeless grace. His journey is not just about launching a brand, but about reimagining how diamonds can be part of every Indian woman's life just not as a status symbol, but as a symbol of strength and self-worth.
                  </p>
                  <p>
                    This vision powers everything we do: to deliver unparalleled craftsmanship, fair value, and emotional resonance with every piece of jewelry that leaves our hands.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diamond Bundle Showcase */}
      <DiamondBundleShowcase />

      {/* Brand Values Section - COMMENTED OUT */}
      {/* <section className="py-12 sm:py-16 lg:py-24 relative overflow-hidden">
        <DiamondParticles count={15} />
        <SparkleEffect trigger={sparkleValues} count={8} />
        
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 sm:top-20 right-10 sm:right-20 w-32 sm:w-64 h-32 sm:h-64 bg-white/3 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-10 sm:bottom-20 left-10 sm:left-20 w-32 sm:w-64 h-32 sm:h-64 bg-white/3 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }}></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-5 sm:px-8 z-10">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <div 
              className="inline-flex items-center space-x-2 glass-card px-3 sm:px-4 py-2 rounded-full mb-4 sm:mb-6 cursor-pointer"
              onMouseEnter={() => setSparkleValues(true)}
              onMouseLeave={() => setSparkleValues(false)}
            >
              <Shield className="h-4 w-4 text-white animate-sparkle" />
              <span className="text-xs sm:text-sm font-medium text-obsidian-200">Why Choose Us</span>
            </div>
            
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 sparkle px-4">
              Crafted with Excellence
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-obsidian-200 max-w-3xl mx-auto font-light leading-relaxed px-4">
              We believe in providing authentic luxury that honors tradition while embracing modern elegance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
            <div className="group text-center p-6 sm:p-8 rounded-xl sm:rounded-2xl glass-card hover:shadow-diamond-lg transition-all duration-500 floating-card glow-border">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white text-black rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-6 sm:mb-8 group-hover:scale-110 transition-transform duration-300 animate-glow sparkle">
                <Star className="h-8 w-8 sm:h-10 sm:w-10" />
              </div>
              <h3 className="font-display text-lg sm:text-xl lg:text-2xl font-semibold text-white mb-3 sm:mb-4">Authentic Natural Diamonds</h3>
              <p className="text-sm sm:text-base text-obsidian-200 leading-relaxed">
                Every diamond is carefully sourced and certified, ensuring you receive 
                only the finest natural stones with complete authenticity.
              </p>
            </div>
            
            <div className="group text-center p-6 sm:p-8 rounded-xl sm:rounded-2xl glass-card hover:shadow-diamond-lg transition-all duration-500 floating-card glow-border">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white text-black rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-6 sm:mb-8 group-hover:scale-110 transition-transform duration-300 animate-glow sparkle">
                <Shield className="h-8 w-8 sm:h-10 sm:w-10" />
              </div>
              <h3 className="font-display text-lg sm:text-xl lg:text-2xl font-semibold text-white mb-3 sm:mb-4">Lifetime Guarantee</h3>
              <p className="text-sm sm:text-base text-obsidian-200 leading-relaxed">
                We stand behind our quality with a comprehensive lifetime guarantee 
                on authenticity and craftsmanship.
              </p>
            </div>
            
            <div className="group text-center p-6 sm:p-8 rounded-xl sm:rounded-2xl glass-card hover:shadow-diamond-lg transition-all duration-500 floating-card glow-border">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white text-black rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-6 sm:mb-8 group-hover:scale-110 transition-transform duration-300 animate-glow sparkle">
                <Heart className="h-8 w-8 sm:h-10 sm:w-10" />
              </div>
              <h3 className="font-display text-lg sm:text-xl lg:text-2xl font-semibold text-white mb-3 sm:mb-4">Cultural Heritage</h3>
              <p className="text-sm sm:text-base text-obsidian-200 leading-relaxed">
                Each piece honors traditional Indian jewelry artistry while 
                incorporating contemporary design elements.
              </p>
            </div>
          </div>
        </div>
      </section> */}




      {/* Call to Action Section */}
      <section className="py-12 sm:py-16 lg:py-24 relative overflow-hidden">
        <DiamondParticles count={20} />
        
        {/* Background sparkles */}
        <div className="absolute inset-0">
          <div className="absolute top-5 sm:top-10 left-5 sm:left-10 text-white text-xs sm:text-sm sparkle opacity-30">✦</div>
          <div className="absolute top-10 sm:top-20 right-10 sm:right-20 text-white text-sm sm:text-lg sparkle opacity-40">✧</div>
          <div className="absolute bottom-10 sm:bottom-20 left-10 sm:left-20 text-white text-xs sm:text-sm sparkle opacity-30">✦</div>
          <div className="absolute bottom-5 sm:bottom-10 right-5 sm:right-10 text-white text-sm sm:text-lg sparkle opacity-40">✧</div>
          <div className="absolute top-1/2 left-1/4 text-white text-xs sparkle opacity-20">✦</div>
          <div className="absolute top-1/3 right-1/3 text-white text-xs sm:text-sm sparkle opacity-30">✧</div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-5 sm:px-8 text-center z-10">
          <div className="space-y-4 sm:space-y-8">
            <div className="inline-flex items-center space-x-2 glass-card px-3 sm:px-4 py-2 rounded-full">
              <Sparkles className="h-4 w-4 text-white animate-sparkle" />
              <span className="text-xs sm:text-sm font-medium text-obsidian-200">Ready to Shine?</span>
            </div>
            
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight sparkle px-4">
              Ready to Experience{' '}
              <span className="shimmer-text">Authentic Luxury?</span>
            </h2>
            
            <p className="text-base sm:text-lg lg:text-xl text-obsidian-200 leading-relaxed max-w-3xl mx-auto px-4">
              Discover our exclusive Élan Collection and embrace the elegance you deserve.
            </p>
            
            <div className="pt-4 px-4">
              <button 
                onClick={onOpenVoiceAssistant}
                className="group inline-flex items-center justify-center bg-white text-black px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5 rounded-full text-base sm:text-lg lg:text-xl font-semibold hover:shadow-glow-lg transition-all duration-300 hover:scale-105 btn-premium glow-border sparkle min-h-[44px] w-full sm:w-auto max-w-sm"
              >
                Talk to Our Diamond Expert
                <ArrowRight className="ml-2 sm:ml-3 h-5 w-5 sm:h-6 sm:w-6 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};