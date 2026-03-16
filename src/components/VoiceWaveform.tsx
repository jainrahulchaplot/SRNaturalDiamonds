import React from 'react';
import { motion } from 'framer-motion';

interface VoiceWaveformProps {
  isActive: boolean;
  isListening: boolean;
  isSpeaking: boolean;
}

export const VoiceWaveform: React.FC<VoiceWaveformProps> = ({ 
  isActive, 
  isListening, 
  isSpeaking 
}) => {
  const bars = Array.from({ length: 5 }, (_, i) => i);

  if (!isActive) return null;

  return (
    <div className="flex items-center justify-center space-x-1 h-6 sm:h-8">
      {bars.map((bar) => (
        <motion.div
          key={bar}
          className={`w-0.5 sm:w-1 rounded-full ${
            isListening ? 'bg-green-500' : isSpeaking ? 'bg-white' : 'bg-obsidian-600'
          }`}
          animate={{
            height: isListening || isSpeaking ? [3, 16, 3] : 3,
          }}
          transition={{
            duration: 0.8,
            repeat: isListening || isSpeaking ? Infinity : 0,
            delay: bar * 0.1,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};