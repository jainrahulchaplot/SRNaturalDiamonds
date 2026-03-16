import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Sparkle {
  id: string;
  x: number;
  y: number;
  size: number;
  delay: number;
}

interface SparkleEffectProps {
  trigger?: boolean;
  count?: number;
  className?: string;
}

export const SparkleEffect: React.FC<SparkleEffectProps> = ({ 
  trigger = false, 
  count = 8,
  className = ''
}) => {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    if (trigger) {
      const newSparkles: Sparkle[] = Array.from({ length: count }, (_, i) => ({
        id: `sparkle-${Date.now()}-${i}`,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 8 + 4,
        delay: Math.random() * 0.5
      }));

      setSparkles(newSparkles);

      // Clear sparkles after animation
      const timer = setTimeout(() => {
        setSparkles([]);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [trigger, count]);

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      <AnimatePresence>
        {sparkles.map((sparkle) => (
          <motion.div
            key={sparkle.id}
            className="absolute text-white"
            style={{
              left: `${sparkle.x}%`,
              top: `${sparkle.y}%`,
              fontSize: `${sparkle.size}px`
            }}
            initial={{ opacity: 0, scale: 0, rotate: 0 }}
            animate={{ 
              opacity: [0, 1, 0], 
              scale: [0, 1, 0], 
              rotate: [0, 180, 360] 
            }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{
              duration: 1.5,
              delay: sparkle.delay,
              ease: "easeOut"
            }}
          >
            ✦
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};