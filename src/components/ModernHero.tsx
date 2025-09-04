import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Sparkles, Wand2 } from 'lucide-react';
import { TrustMetrics } from './TrustMetrics';

interface ModernHeroProps {
  onOpenVoiceAssistant?: () => void;
}

export const ModernHero: React.FC<ModernHeroProps> = ({ onOpenVoiceAssistant }) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    // Simulate video loading
    const timer = setTimeout(() => setIsVideoLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        {/* Video Placeholder with Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800">
          {/* Animated diamond pattern overlay */}
          <div className="absolute inset-0 opacity-20">
            <div 
              className="absolute inset-0 bg-repeat"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M30 30l15-15v30l-15-15zm-15 0l15 15v-30l-15 15z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                backgroundSize: '60px 60px',
                animation: 'float 20s ease-in-out infinite'
              }}
            />
          </div>
          
          {/* Video placeholder with play icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: isVideoLoaded ? 0.1 : 0.3, scale: 1 }}
              transition={{ duration: 2 }}
              className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm"
            >
              <Play className="h-8 w-8 text-white/50" />
            </motion.div>
          </div>
        </div>
        
        {/* Semi-transparent overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent z-10" />
        
      </div>

      {/* Hero Content */}
      <div className="relative z-20 w-full">
        <div className="max-w-6xl mx-auto text-center py-8 sm:py-12 lg:py-16 px-5 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="space-y-4 sm:space-y-8 lg:space-y-10"
          >
            {/* Premium Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="inline-flex mt-20 sm:mt-20 items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 sm:px-6 sm:py-3 rounded-full border border-white/20"
            >
              <Sparkles className="h-4 w-4 text-white" />
              <span className="text-xs sm:text-sm font-medium text-white tracking-wide">
                Authentic Natural Diamonds
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light italic text-white leading-tight tracking-tight px-4 sm:px-6"
            >
              Every Woman in India
            </motion.h1>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight tracking-tight px-4 sm:px-6"
              style={{ marginTop: '10px' }}
            >
              <span className="relative inline-block">
                <span className="relative overflow-hidden inline-block rounded-full">
                  <span className="inline-block relative z-10 px-4">Deserves Real Diamonds</span>
                  {/* Wave light effect */}
                  <span 
                    className="absolute top-0 left-0 right-0 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12"
                    style={{
                      animation: 'waveLight 3s ease-in-out infinite',
                      animationDelay: '2s'
                    }}
                  />
                </span>
                {/* Sparkle decorations */}
                <span className="absolute -top-3 sm:-top-4 -right-3 sm:-right-4 text-white text-sm sm:text-lg animate-sparkle opacity-80">✦</span>
                <span className="absolute -bottom-2 sm:-bottom-3 -left-2 sm:-left-3 text-white text-xs sm:text-sm animate-sparkle opacity-60" style={{ animationDelay: '1s' }}>
                  ✧
                </span>
              </span>
            </motion.h1>


            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.3 }}
              className="text-lg sm:text-xl lg:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-light px-4 pb-5"
            >
              Discover authentic luxury with our handcrafted natural diamond jewelry, 
              designed to celebrate the elegance and strength of Indian women.
            </motion.p>

            {/* Video Showcase */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.4 }}
              className="max-w-4xl mx-auto px-4 pb-10"
            >
              <div className="relative aspect-video bg-obsidian-800 rounded-2xl sm:rounded-3xl overflow-hidden shadow-obsidian-xl glass-card glow-border">
                {/* Video */}
                <video 
                  className="absolute inset-0 w-full h-full mbobject-cover rounded-2xl sm:rounded-3xl"
                  autoPlay 
                  muted 
                  loop 
                  playsInline
                >
                  <source src="/videos/hero/ad_video1.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                {/* Video overlay for better text readability */}
                <div className="absolute inset-0 bg-black/20" />
                
                {/* Center play button overlay - Hidden */}
                {/* <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center cursor-pointer hover:bg-white/30 transition-all duration-300 group"
                  >
                    <Play className="h-6 w-6 sm:h-8 sm:w-8 text-white ml-1 group-hover:scale-110 transition-transform duration-300" />
                  </motion.div>
                </div> */}
                
                {/* Video sparkles */}
                <div className="absolute inset-0">
                  <div className="absolute top-4 right-4 text-white text-lg animate-sparkle opacity-60">✦</div>
                  <div className="absolute bottom-4 left-4 text-white text-sm animate-sparkle opacity-50" style={{ animationDelay: '1s' }}>✧</div>
                  <div className="absolute top-1/4 left-1/4 text-white text-xs animate-sparkle opacity-40" style={{ animationDelay: '2s' }}>✦</div>
                  <div className="absolute bottom-1/4 right-1/4 text-white text-sm animate-sparkle opacity-50" style={{ animationDelay: '1.5s' }}>✧</div>
                </div>
                
              </div>
              
              {/* AI Expert Button - Below Video on Mobile, Overlay on Desktop */}
              {/* <div className="mt-5 sm:mt-0 sm:absolute sm:bottom-4 sm:left-4 sm:right-4">
                <div 
                  className="glass-card-light px-4 py-3 rounded-xl cursor-pointer hover:bg-white/20 transition-all duration-300"
                  onClick={onOpenVoiceAssistant}
                >
                  <div className="flex items-center space-x-2">
                    <Sparkles className="h-4 w-4 text-white" />
                    <span className="text-sm font-medium text-white">Talk to our AI Powered Diamond Expert</span>
                  </div>
                </div>
              </div> */}
            </motion.div>

            {/* Trust Metrics */}
            <div className="mt-5 sm:mt-10">
              <TrustMetrics />
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.8 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center pt-4 sm:pt-6 pb-4 px-4"
            >
              <button 
                onClick={() => {
                  const showcaseElement = document.getElementById('diamond-showcase');
                  showcaseElement?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group relative bg-white text-black px-6 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl min-h-[44px] w-full sm:w-auto max-w-xs"
              >
                <span className="relative z-10 flex items-center">
                  Explore Collection
                  <ArrowRight className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                {/* Shimmer effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
              </button>
              
              <button 
                onClick={onOpenVoiceAssistant}
                className="group relative bg-transparent border-2 border-white text-white px-5 py-3 sm:px-8 sm:py-4 rounded-full text-base sm:text-lg font-semibold overflow-hidden transition-all duration-300 hover:bg-white hover:text-black hover:scale-105 hover:shadow-2xl min-h-[44px] w-full sm:w-auto max-w-xs mx-auto"
              >
                <span className="relative z-10 flex items-center justify-center">
                  <Wand2 className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5" />
                  Talk to Our Diamond Expert
                </span>
                {/* Shimmer effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
              </button>
            </motion.div>

          </motion.div>
        </div>
      </div>

      {/* Floating Diamond Particles */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-white opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 6 + 6}px`
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.6, 0.2],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          >
            {i % 2 === 0 ? '✦' : '✧'}
          </motion.div>
        ))}
      </div>
    </section>
  );
};