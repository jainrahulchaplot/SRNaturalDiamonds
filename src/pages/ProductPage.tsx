import React, { useState } from 'react';
import { Star, Shield, Gem, ArrowRight, Check, Sparkles, Award, Heart } from 'lucide-react';
import { jewelryBundle } from '../data/products';
import { DiamondParticles } from '../components/DiamondParticles';
import { SparkleEffect } from '../components/SparkleEffect';

export const ProductPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [sparkleProduct, setSparkleProduct] = useState(false);
  const product = jewelryBundle;

  return (
    <div className="min-h-screen bg-obsidian-gradient">
      {/* Hero Section */}
      <section className="bg-obsidian-gradient py-8 sm:py-12 lg:py-16 relative overflow-hidden">
        <DiamondParticles count={15} />
        <SparkleEffect trigger={sparkleProduct} count={10} />
        
        <div className="absolute inset-0">
          <div className="absolute -top-20 sm:-top-40 -right-20 sm:-right-40 w-40 sm:w-80 h-40 sm:h-80 bg-white/5 rounded-full blur-3xl animate-float"></div>
          <div className="absolute -bottom-20 sm:-bottom-40 -left-20 sm:-left-40 w-40 sm:w-80 h-40 sm:h-80 bg-white/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }}></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-5 sm:px-8 z-10">
          <div className="text-center mb-6 sm:mb-8">
            <div 
              className="inline-flex items-center space-x-2 glass-card px-3 sm:px-4 py-2 rounded-full mb-3 sm:mb-4 cursor-pointer"
              onMouseEnter={() => setSparkleProduct(true)}
              onMouseLeave={() => setSparkleProduct(false)}
            >
              <Sparkles className="h-4 w-4 text-white animate-sparkle" />
              <span className="text-xs sm:text-sm font-medium text-obsidian-200">Premium Collection</span>
            </div>
            <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 sparkle px-4">
            Élan Collection
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-obsidian-200 max-w-2xl mx-auto px-4">
              Authentic natural diamonds crafted for the modern Indian woman
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          {/* Product Images */}
          <div className="space-y-4 sm:space-y-6">
            <div className="relative">
              <div className="aspect-square bg-obsidian-800 rounded-2xl sm:rounded-3xl overflow-hidden shadow-obsidian-xl glass-card glow-border floating-card">
                <img 
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                
                {/* Image sparkles */}
                <div className="absolute inset-0">
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4 text-white text-lg sm:text-xl sparkle opacity-70">✦</div>
                  <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 text-white text-base sm:text-lg sparkle opacity-50">✧</div>
                  <div className="absolute top-1/2 right-1/4 text-white text-xs sm:text-sm sparkle opacity-40">✦</div>
                </div>
              </div>
              
              {/* Image badges */}
              <div className="absolute top-3 sm:top-6 left-3 sm:left-6 glass-card-light px-2 sm:px-3 py-1 sm:py-2 rounded-full sparkle">
                <div className="flex items-center space-x-2">
                  <Award className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                  <span className="text-xs sm:text-sm font-medium text-obsidian-200">IGI Certified</span>
                </div>
              </div>
              
              <div className="absolute top-3 sm:top-6 right-3 sm:right-6 glass-card-light px-2 sm:px-3 py-1 sm:py-2 rounded-full sparkle">
                <div className="flex items-center space-x-2">
                  <Shield className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                  <span className="text-xs sm:text-sm font-medium text-obsidian-200">Authentic</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-4 gap-2 sm:gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square bg-obsidian-800 rounded-lg sm:rounded-xl overflow-hidden border-2 transition-all duration-300 glass-card min-h-[44px] ${
                    selectedImage === index 
                      ? 'border-white shadow-glow' 
                      : 'border-obsidian-700 hover:border-obsidian-600 hover:shadow-diamond'
                  }`}
                >
                  <img 
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Information */}
          <div className="space-y-6 sm:space-y-8 lg:space-y-10">
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center space-x-3">
                <div className="flex text-white">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 sm:h-5 sm:w-5 fill-current" />
                  ))}
                </div>
                <span className="text-xs sm:text-sm text-obsidian-300 font-medium">(4.9/5 from 156 reviews)</span>
              </div>
              
              <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                {product.name}
              </h1>
              
              <p className="text-sm sm:text-base lg:text-lg text-obsidian-200 leading-relaxed">
                {product.description}
              </p>
              
              <div className="flex flex-col sm:flex-row sm:items-baseline space-y-2 sm:space-y-0 sm:space-x-4">
                <span className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white sparkle">
                  ₹{product.price.toLocaleString('en-IN')}
                </span>
                <div className="flex items-center space-x-3">
                  <span className="text-base sm:text-lg lg:text-xl text-obsidian-400 line-through">
                    ₹{(product.price * 1.3).toLocaleString('en-IN')}
                  </span>
                  <span className="bg-white text-black text-xs sm:text-sm font-semibold px-3 py-1 sm:px-4 sm:py-2 rounded-full animate-glow sparkle">
                    Save 23%
                  </span>
                </div>
              </div>
            </div>

            {/* Product Features */}
            <div className="space-y-4 sm:space-y-6">
              <h3 className="font-display text-lg sm:text-xl lg:text-2xl font-semibold text-white">What's Included</h3>
              <div className="grid grid-cols-1 gap-3 sm:gap-4">
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 sm:p-4 glass-card rounded-lg sm:rounded-xl">
                    <Check className="h-4 w-4 sm:h-5 sm:w-5 text-white flex-shrink-0" />
                    <span className="text-sm sm:text-base text-obsidian-200 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Specifications */}
            <div className="space-y-4 sm:space-y-6">
              <h3 className="font-display text-lg sm:text-xl lg:text-2xl font-semibold text-white">Specifications</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="p-4 sm:p-6 glass-card-light rounded-xl sm:rounded-2xl floating-card">
                    <div className="text-xs sm:text-sm text-obsidian-400 font-semibold uppercase tracking-wider mb-2">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </div>
                    <div className="text-white font-semibold text-sm sm:text-base lg:text-lg">{value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="space-y-4 sm:space-y-6 pt-6 sm:pt-8 border-t border-obsidian-700">
              <button className="w-full bg-white text-black py-4 sm:py-5 rounded-xl sm:rounded-2xl text-base sm:text-lg lg:text-xl font-semibold hover:shadow-glow-lg transition-all duration-300 btn-premium glow-border sparkle min-h-[44px]">
                Inquire Now
              </button>
              <button className="w-full glass-card text-white py-4 sm:py-5 rounded-xl sm:rounded-2xl text-base sm:text-lg lg:text-xl font-semibold hover:shadow-diamond transition-all duration-300 btn-secondary glow-border min-h-[44px]">
                Schedule Viewing
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 pt-6 sm:pt-8">
              <div className="flex items-center space-x-3 sm:space-x-4 p-4 sm:p-6 glass-card-light rounded-xl sm:rounded-2xl floating-card">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white text-black rounded-lg sm:rounded-xl flex items-center justify-center animate-glow sparkle flex-shrink-0">
                  <Shield className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <div>
                  <div className="font-semibold text-white text-sm sm:text-base">Certified Authentic</div>
                  <div className="text-xs sm:text-sm text-obsidian-300">IGI & BIS Verified</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 sm:space-x-4 p-4 sm:p-6 glass-card-light rounded-xl sm:rounded-2xl floating-card">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white text-black rounded-lg sm:rounded-xl flex items-center justify-center animate-glow sparkle flex-shrink-0">
                  <Gem className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <div>
                  <div className="font-semibold text-white text-sm sm:text-base">Premium Quality</div>
                  <div className="text-xs sm:text-sm text-obsidian-300">VS1-VS2 Clarity</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};