import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

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
      name: 'Heritage Earring',
      price: 25000,
      image: '/images/products/leftear.png',
      description: 'Elegant left earring featuring a brilliant-cut natural diamond, handcrafted to complement your natural beauty with timeless sophistication'
    },
    {
      id: 'nose-piece',
      name: 'Imperial Nose Pin',
      price: 15000,
      image: '/images/products/nosepiece.png',
      description: 'Delicate nose pin adorned with a single natural diamond, celebrating traditional Indian elegance with modern refinement'
    },
    {
      id: 'necklace',
      name: 'Majestic Royal Bliss Pendant',
      price: 45000,
      image: '/images/products/necklace.png',
      description: 'Stunning statement Pendant featuring multiple natural diamonds in an intricate traditional design, perfect for special occasions'
    },
    {
      id: 'right-earring',
      name: 'Heritage Earring',
      price: 25000,
      image: '/images/products/rightear.png',
      description: 'Matching right earring with brilliant-cut natural diamond, completing the perfect pair for a harmonious and elegant look'
    }
  ];


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
            <span className="text-sm font-medium text-obsidian-200">ENT Collection</span>
          </div>
          
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight sparkle">
            The Complete{' '}
            <span className="shimmer-text">
              ENT Collection
            </span>
          </h2>
          
          <p className="text-lg sm:text-xl text-obsidian-200 max-w-3xl mx-auto leading-relaxed">
            Four exquisite pieces of natural diamond Jewellery, each handcrafted with precision and passion. 
            From the delicate Heritage Earrings, Imperial Nose Pin to the Majestic Royal Bliss Pendant, this ENT Collection embodies 
            the perfect harmony of traditional Indian elegance and modern sophistication.
          </p>
        </motion.div>

        {/* Main Showcase Layout - Single row with 4 columns */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
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
    </section>
  );
};