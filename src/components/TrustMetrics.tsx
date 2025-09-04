import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Gem, Heart, Award } from 'lucide-react';

interface MetricItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

export const TrustMetrics: React.FC = () => {
  const metrics: MetricItem[] = [
    {
      icon: <Shield className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "75+ Years of Legacy and Trust",
      description: "Generations of hardwork, goodwill and dedication",
      delay: 0.1
    },
    {
      icon: <Gem className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "Authentic Natural Diamonds",
      description: "Authentic luxury accessible",
      delay: 0.2
    },
    {
      icon: <Heart className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "Cultural Heritage and Tradition",
      description: "Premium quality, fair prices",
      delay: 0.3
    },
    {
      icon: <Award className="h-6 w-6 sm:h-8 sm:w-8" />,
      title: "Lifetime Return Guarantee",
      description: "Your satisfaction, our promise",
      delay: 0.4
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 1.6 }}
      className="max-w-6xl mx-auto px-5 sm:px-8 mb-10"
    >
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8">
        {metrics.map((metric, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 + metric.delay }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="group relative"
          >
            {/* Glass card background with enhanced effects */}
            <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 sm:p-6 hover:bg-white/10 transition-all duration-300 overflow-hidden floating-card glow-border">
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Top-down wave effect - contained within card */}
              <div 
                className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-transparent transform -skew-y-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl overflow-hidden"
                style={{
                  animation: 'waveTopDown 2.5s ease-in-out infinite',
                  animationDelay: `${metric.delay * 2}s`,
                  clipPath: 'inset(0)'
                }}
              />
              
              {/* Content */}
              <div className="relative z-10 text-center">
                {/* Icon */}
                <div className="flex justify-center mb-3 sm:mb-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110 animate-glow">
                    <div className="text-white group-hover:text-white/90 transition-colors duration-300">
                      {metric.icon}
                    </div>
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="text-sm sm:text-base lg:text-lg font-bold text-white mb-2 group-hover:text-white/90 transition-colors duration-300 sparkle">
                  {metric.title}
                </h3>
                
                {/* Description */}
                <p className="text-xs sm:text-sm text-gray-300 group-hover:text-gray-200 transition-colors duration-300 leading-relaxed">
                  {metric.description}
                </p>
              </div>
              
              {/* Enhanced sparkle decorations */}
              <div className="absolute top-2 right-2 text-white text-xs opacity-0 group-hover:opacity-60 transition-opacity duration-300 animate-sparkle">
                ✦
              </div>
              <div className="absolute bottom-2 left-2 text-white text-xs opacity-0 group-hover:opacity-40 transition-opacity duration-300 animate-sparkle" style={{ animationDelay: '1s' }}>
                ✧
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
