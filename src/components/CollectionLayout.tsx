import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Gem, ArrowRight } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
}

export type CollectionLayoutType = 'video-grid' | 'products-only' | 'earrings-row' | 'pendant-showcase' | 'hero-grid';

interface CollectionLayoutProps {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  products: Product[];
  bundlePrice: number;
  videoSrc?: string;
  imageSrc?: string;
  whatsIncluded: string[];
  specifications: Array<{ category: string; value: string }>;
  layoutType: CollectionLayoutType;
  className?: string;
}

export const CollectionLayout: React.FC<CollectionLayoutProps> = ({
  id,
  title,
  subtitle,
  description,
  products,
  bundlePrice,
  videoSrc,
  imageSrc,
  whatsIncluded,
  specifications,
  layoutType,
  className = ""
}) => {
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);

  const renderHeader = () => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center mb-12 sm:mb-16 lg:mb-20"
    >
      <div className="inline-flex items-center space-x-2 glass-card px-4 py-2 rounded-full mb-6">
        <Sparkles className="h-4 w-4 text-white animate-sparkle" />
        <span className="text-sm font-medium text-obsidian-200">{subtitle}</span>
      </div>
      
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight sparkle">
        {title}
      </h2>
      
      <p className="text-lg sm:text-xl text-obsidian-200 max-w-3xl mx-auto leading-relaxed">
        {description}
      </p>
    </motion.div>
  );

  const renderProductCard = (product: Product, index: number, size: 'small' | 'medium' | 'large' = 'medium') => (
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
      <div className={`glass-card rounded-2xl hover:shadow-diamond-lg transition-all duration-300 hover:-translate-y-1 floating-card glow-border h-full overflow-hidden ${
        size === 'large' ? 'p-6 sm:p-8' : size === 'small' ? 'p-3 sm:p-4' : 'p-4 sm:p-6'
      }`}>
        <div className={`bg-obsidian-800 rounded-xl overflow-hidden mb-3 sm:mb-4 relative ${
          size === 'large' ? 'aspect-[4/3]' : size === 'small' ? 'aspect-square' : 'aspect-square'
        }`}>
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
          <h3 className={`font-semibold text-white leading-tight ${
            size === 'large' ? 'text-lg sm:text-xl' : size === 'small' ? 'text-sm' : 'text-sm sm:text-lg'
          }`}>
            {product.name}
          </h3>
          <p className={`text-obsidian-200 leading-relaxed ${
            size === 'large' ? 'text-sm sm:text-base' : size === 'small' ? 'text-xs' : 'text-xs sm:text-sm'
          }`}>
            {product.description}
          </p>
        </div>
      </div>
    </motion.div>
  );

  const renderVideoGridLayout = () => (
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
            {videoSrc ? (
              <video 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 rounded-2xl sm:rounded-3xl"
                autoPlay 
                muted 
                loop 
                playsInline
              >
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img 
                src={imageSrc}
                alt={title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 rounded-2xl sm:rounded-3xl"
              />
            )}
            
            {/* Video/Image sparkles */}
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
          {products.map((product, index) => renderProductCard(product, index))}
        </div>
      </motion.div>
    </div>
  );

  const renderProductsOnlyLayout = () => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
        {products.map((product, index) => renderProductCard(product, index, 'large'))}
      </div>
    </motion.div>
  );

  const renderEarringsRowLayout = () => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
    >
      {/* Full width left image with compact price component on right */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
        {/* Main product image - full width on left */}
        <div className="order-2 lg:order-1">
          {renderProductCard(products[0], 0, 'large')}
        </div>
        
        {/* Compact price component on right */}
        <div className="order-1 lg:order-2">
          <div className="glass-card-light rounded-2xl p-6 hover:shadow-diamond-lg transition-all duration-300 floating-card glow-border relative overflow-hidden">
            
            {/* Background sparkles */}
            <div className="absolute inset-0">
              <div className="absolute top-3 right-3 text-white text-sm animate-sparkle opacity-60">✦</div>
              <div className="absolute bottom-3 left-3 text-white text-xs animate-sparkle opacity-50" style={{ animationDelay: '1s' }}>✧</div>
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-white text-black rounded-xl flex items-center justify-center animate-glow sparkle">
                  <Gem className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-white">{title}</h3>
                  <p className="text-obsidian-300 text-sm">{subtitle}</p>
                </div>
              </div>
              
              <div className="space-y-4">
                {/* Price */}
                <div className="flex items-center justify-between">
                  <span className="text-white font-semibold text-base">Collection Price:</span>
                  <div className="text-right">
                    <div className="text-xl font-bold text-white">
                      ₹{bundlePrice.toLocaleString('en-IN')}
                    </div>
                  </div>
                </div>
                
                {/* Product image */}
                <div className="text-center">
                  <div className="aspect-square bg-obsidian-800 rounded-lg overflow-hidden mb-2 max-w-32 mx-auto">
                    <img 
                      src={products[0].image}
                      alt={products[0].name}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="text-xs text-obsidian-300 font-medium">{products[0].name}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );

  const renderPendantShowcaseLayout = () => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
    >
      {/* Single pendant product with creative showcase */}
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Main pendant image */}
          <div className="order-2 lg:order-1">
            {renderProductCard(products[0], 0, 'large')}
          </div>
          
          {/* Pendant details and chain options */}
          <div className="order-1 lg:order-2 space-y-6">
            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Chain Options</h3>
              <div className="grid grid-cols-2 gap-4">
                {['18K Gold Chain', 'Diamond Chain', 'Pearl Chain', 'Custom Length'].map((chain, index) => (
                  <div key={index} className="glass-card rounded-xl p-4 text-center hover:bg-white/5 transition-all duration-300">
                    <div className="text-sm text-obsidian-300 font-medium mb-2">{chain}</div>
                    <div className="text-xs text-white">Included</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Symbolic Meaning</h3>
              <p className="text-obsidian-200 text-sm leading-relaxed">
                Each pendant carries deep spiritual significance, crafted to connect you with your inner self while showcasing the timeless beauty of natural diamonds.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );

  const renderHeroGridLayout = () => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        {/* Hero product - takes 2 columns */}
        <div className="lg:col-span-2">
          {renderProductCard(products[0], 0, 'large')}
        </div>
        
        {/* Side products */}
        <div className="space-y-4 sm:space-y-6">
          {products.slice(1).map((product, index) => renderProductCard(product, index + 1))}
        </div>
      </div>
    </motion.div>
  );

  const renderMainContent = () => {
    switch (layoutType) {
      case 'video-grid':
        return renderVideoGridLayout();
      case 'products-only':
        return renderProductsOnlyLayout();
      case 'earrings-row':
        return renderEarringsRowLayout();
      case 'pendant-showcase':
        return renderPendantShowcaseLayout();
      case 'hero-grid':
        return renderHeroGridLayout();
      default:
        return renderProductsOnlyLayout();
    }
  };

  const renderBundleSection = () => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      viewport={{ once: true }}
      className="mt-6 sm:mt-8 lg:mt-10"
    >
      {/* What's Included & Specifications Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="mb-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 items-stretch">
          {/* What's Included - Left Column */}
          <div className="glass-card rounded-2xl p-6 sm:p-8 hover:shadow-diamond-lg transition-all duration-300 floating-card glow-border">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-6 sm:mb-8 text-center">
              What's Included
            </h3>
            
            <div className="space-y-4 sm:space-y-5">
              {whatsIncluded.map((item, index) => (
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
              {specifications.map((spec, index) => (
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

      {/* Bundle Pricing Section */}
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
              <h3 className="font-bold text-xl sm:text-2xl lg:text-3xl text-white">{title}</h3>
              <p className="text-obsidian-300 text-sm sm:text-base">{subtitle}</p>
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
                </div>
              </div>
            </div>
            
            {/* Product Grid - Show all products or single product with variations */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {products.length === 1 ? (
                // For single products, show the product 4 times with different angles/variations
                <>
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
                  {/* Add 3 more variations for single products */}
                  {Array.from({ length: 3 }).map((_, index) => (
                    <div key={`variation-${index}`} className="text-center">
                      <div className="aspect-square bg-obsidian-800 rounded-lg overflow-hidden mb-2">
                        <img 
                          src={products[0].image}
                          alt={`${products[0].name} - View ${index + 2}`}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                      <div className="text-xs text-obsidian-300 font-medium">View {index + 2}</div>
                    </div>
                  ))}
                </>
              ) : (
                // For multiple products, show all products
                products.map((product) => (
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
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section 
      id={id}
      className={`py-6 sm:py-16 lg:py-12 relative overflow-hidden ${className}`}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/3 rounded-full blur-3xl animate-glow"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 z-10">
        {renderHeader()}
        {renderMainContent()}
        {renderBundleSection()}
      </div>
    </section>
  );
};
