import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Gem } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  description: string;
}

interface DiamondBundleShowcaseProps {
  className?: string;
}

export const DiamondBundleShowcase: React.FC<DiamondBundleShowcaseProps> = ({ 
  className = '' 
}) => {
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);

  const products: Product[] = [
    {
      id: 'left-earring',
      name: 'Élan Grace Earring',
      price: 25000,
      image: '/images/products/leftear.png',
      description: 'Elegant left earring featuring a brilliant-cut natural diamond, handcrafted to complement your natural beauty with timeless sophistication'
    },
    {
      id: 'nose-piece',
      name: 'Heritage Nose Pin',
      price: 15000,
      image: '/images/products/nosepiece.png',
      description: 'Delicate nose pin adorned with a single natural diamond, celebrating traditional Indian elegance with modern refinement'
    },
    {
      id: 'necklace',
      name: 'Royal Élan Necklace',
      price: 45000,
      image: '/images/products/necklace.png',
      description: 'Stunning statement necklace featuring multiple natural diamonds in an intricate traditional design, perfect for special occasions'
    },
    {
      id: 'right-earring',
      name: 'Élan Grace Earring',
      price: 25000,
      image: '/images/products/rightear.png',
      description: 'Matching right earring with brilliant-cut natural diamond, completing the perfect pair for a harmonious and elegant look'
    }
  ];

  const bundlePrice = 21000;
  const originalBundlePrice = 156000;
  const discountPercentage = Math.round(((originalBundlePrice - bundlePrice) / originalBundlePrice) * 100);


  return (
    <section 
      id="diamond-showcase"
      className={`py-6 sm:py-16 lg:py-12 relative overflow-hidden ${className}`}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/3 rounded-full blur-3xl animate-glow"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center space-x-2 glass-card px-4 py-2 rounded-full mb-6">
            <Sparkles className="h-4 w-4 text-white animate-sparkle" />
            <span className="text-sm font-medium text-obsidian-200">Élan Collection</span>
          </div>
          
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight sparkle">
            The Complete{' '}
            <span className="shimmer-text">
              Élan Collection
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-obsidian-200 max-w-3xl mx-auto leading-relaxed">
            Four exquisite pieces of natural diamond jewelry, each handcrafted with precision and passion. 
            From the delicate Heritage Nose Pin to the majestic Royal Élan Necklace, this collection embodies 
            the perfect harmony of traditional Indian elegance and modern sophistication.
          </p>
        </motion.div>

        {/* Main Showcase Layout - Desktop: 2 columns, Mobile: Stacked */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 items-start">
          
          {/* Model Portrait - Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="order-1 lg:order-1"
          >
            <div className="relative">
              <div className="aspect-[3/4] bg-obsidian-800 rounded-2xl sm:rounded-3xl overflow-hidden shadow-obsidian-lg glass-card glow-border floating-card">
                <video 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 rounded-2xl sm:rounded-3xl"
                  autoPlay 
                  muted 
                  loop 
                  playsInline
                >
                  <source src="/videos/product-showcase/product_showcase.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                {/* Video sparkles */}
                <div className="absolute inset-0">
                  <div className="absolute top-3 sm:top-6 right-3 sm:right-6 text-white text-lg sm:text-xl sparkle opacity-70">✦</div>
                  <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 text-white text-base sm:text-lg sparkle opacity-50">✧</div>
                </div>
              </div>
              
            </div>
          </motion.div>

          {/* Product Grid - Right Column: 2x2 Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="order-2 lg:order-2"
          >
            <div className="grid grid-cols-2 gap-3 sm:gap-6">
              {products.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                  onMouseEnter={() => setHoveredProduct(product.id)}
                  onMouseLeave={() => setHoveredProduct(null)}
                >
                  <div className="glass-card rounded-2xl p-4 sm:p-6 hover:shadow-diamond-lg transition-all duration-300 hover:-translate-y-1 floating-card glow-border h-full overflow-hidden">
                    <div className="aspect-square bg-obsidian-800 rounded-xl overflow-hidden mb-3 sm:mb-4 relative">
                      <img 
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 rounded-xl"
                      />
                      
                      {/* Hover sparkle effect */}
                      {hoveredProduct === product.id && (
                        <div className="absolute inset-0">
                          <div className="absolute top-2 right-2 text-white text-sm animate-sparkle">✦</div>
                          <div className="absolute bottom-2 left-2 text-white text-xs animate-sparkle" style={{ animationDelay: '0.5s' }}>✧</div>
                        </div>
                      )}
                    </div>
                    
                    <div className="space-y-2 sm:space-y-3">
                      <h3 className="font-semibold text-sm sm:text-lg text-white leading-tight">{product.name}</h3>
                      <p className="text-xs sm:text-sm text-obsidian-200 leading-relaxed">{product.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* What's Included & Specifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-10 mb-10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 items-stretch">
            {/* What's Included - Left Column */}
            <div className="glass-card rounded-2xl p-6 sm:p-8 hover:shadow-diamond-lg transition-all duration-300 floating-card glow-border">
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8 text-center">
                What's Included
              </h3>
              
              <div className="space-y-4 sm:space-y-5">
                {[
                  "Heritage Nose Pin with natural diamond",
                  "Élan Grace Earrings (matching pair)", 
                  "Royal Élan Statement Necklace",
                  "Certified natural diamonds (VS1 clarity)",
                  "Traditional Indian craftsmanship",
                  "Premium 18K gold setting",
                  "Lifetime authenticity guarantee",
                  "Complimentary luxury jewelry box"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 sm:space-x-4">
                    <div className="w-6 h-6 sm:w-7 sm:h-7 bg-white text-black rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-sm sm:text-base font-bold">✓</span>
                    </div>
                    <span className="text-sm sm:text-base lg:text-lg text-white font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Specifications - Right Column */}
            <div className="glass-card rounded-2xl p-6 sm:p-8 hover:shadow-diamond-lg transition-all duration-300 floating-card glow-border">
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8 text-center">
                Specifications
              </h3>
              
              <div className="grid grid-cols-2 gap-3 sm:gap-6">
                {[
                  { category: "MATERIAL", value: "18K Gold with Natural Diamonds" },
                  { category: "PURITY", value: "VS1-VS2 Clarity, F-G Color Grade" },
                  { category: "WEIGHT", value: "Total Diamond Weight: 2.5 Carats" },
                  { category: "CERTIFICATION", value: "IGI & BIS Hallmarked" }
                ].map((spec, index) => (
                  <div key={index} className="glass-card rounded-xl p-4 sm:p-5 text-center hover:bg-white/5 transition-all duration-300">
                    <div className="text-xs sm:text-sm text-obsidian-300 font-medium uppercase tracking-wide mb-2 sm:mb-3">
                      {spec.category}
                    </div>
                    <div className="text-sm sm:text-base lg:text-lg text-white font-bold leading-tight">
                      {spec.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bundle Component - Full Width Below */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-6 sm:mt-8 lg:mt-10"
        >
          <div className="glass-card-light rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 hover:shadow-diamond-lg transition-all duration-300 floating-card glow-border relative overflow-hidden">
            
            {/* Background sparkles */}
            <div className="absolute inset-0">
              <div className="absolute top-4 right-4 text-white text-lg animate-sparkle opacity-60">✦</div>
              <div className="absolute bottom-4 left-4 text-white text-sm animate-sparkle opacity-50" style={{ animationDelay: '1s' }}>✧</div>
              <div className="absolute top-1/2 right-1/4 text-white text-xs animate-sparkle opacity-40" style={{ animationDelay: '2s' }}>✦</div>
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center space-x-3 sm:space-x-4 mb-6 sm:mb-8">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white text-black rounded-xl flex items-center justify-center animate-glow sparkle">
                  <Gem className="h-6 w-6 sm:h-8 sm:w-8" />
                </div>
                <div>
                  <h3 className="font-bold text-xl sm:text-2xl lg:text-3xl text-white">Complete Élan Collection</h3>
                  <p className="text-obsidian-300 text-sm sm:text-base">Heritage Nose Pin • Élan Grace Earrings (Pair) • Royal Élan Necklace</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
                {/* Bundle Details */}
                <div className="space-y-4 sm:space-y-6">
                  
                  <div className="flex items-center justify-between">
                    <span className="text-white font-semibold text-lg sm:text-xl">Collection Price:</span>
                    <div className="text-right">
                      <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                        ₹{bundlePrice.toLocaleString('en-IN')}
                      </div>
                      {/* <div className="bg-white text-black text-sm font-bold px-3 py-1 rounded-full inline-block animate-glow sparkle">
                        Save {discountPercentage}%
                      </div> */}
                    </div>
                  </div>
                  
                  <button
                    className="w-full bg-white text-black py-4 rounded-xl font-bold text-lg hover:shadow-glow-lg transition-all duration-300 hover:-translate-y-0.5 btn-premium glow-border sparkle min-h-[44px] relative overflow-hidden group"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      Book Complete Collection
                      <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </button>
                </div>
                
                {/* Product Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {products.map((product) => (
                    <div key={product.id} className="text-center">
                      <div className="aspect-square bg-obsidian-800 rounded-lg overflow-hidden mb-2">
                        <img 
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                      <div className="text-xs text-obsidian-300 font-medium">{product.name}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-3 sm:gap-6 mt-8 sm:mt-16"
        >
          <div className="text-center p-4 glass-card rounded-xl floating-card glow-border">
            <div className="text-2xl sm:text-3xl font-bold text-white mb-1 sparkle">5000+</div>
            <div className="text-xs sm:text-sm text-obsidian-300 font-medium">Happy Customers</div>
          </div>
          <div className="text-center p-4 glass-card rounded-xl floating-card glow-border">
            <div className="text-2xl sm:text-3xl font-bold text-white mb-1 sparkle">15+</div>
            <div className="text-xs sm:text-sm text-obsidian-300 font-medium">Years Experience</div>
          </div>
          <div className="text-center p-4 glass-card rounded-xl floating-card glow-border">
            <div className="text-2xl sm:text-3xl font-bold text-white mb-1 sparkle">100%</div>
            <div className="text-xs sm:text-sm text-obsidian-300 font-medium">Authentic</div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};