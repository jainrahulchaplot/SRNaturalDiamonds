import React from 'react';
import { motion } from 'framer-motion';
import { User, Gem } from 'lucide-react';
import { Message } from '../types/VoiceAssistant';

interface ChatBubbleProps {
  message: Message;
}

export const ChatBubble: React.FC<ChatBubbleProps> = ({ message }) => {
  const isUser = message.type === 'user';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`flex items-start space-x-3 ${isUser ? 'flex-row-reverse space-x-reverse' : ''}`}
    >
      <div className={`flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center ${
        isUser ? 'bg-obsidian-700' : 'bg-white text-black'
      }`}>
        {isUser ? (
          <User className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
        ) : (
          <Gem className="h-3 w-3 sm:h-4 sm:w-4" />
        )}
      </div>
      
      <div className={`max-w-xs lg:max-w-sm px-3 sm:px-4 py-2 sm:py-3 rounded-xl sm:rounded-2xl ${
        isUser 
          ? 'bg-obsidian-800 text-white' 
          : 'glass-card-light text-white'
      }`}>
        <p className="text-xs sm:text-sm leading-relaxed">{message.content}</p>
        <div className="text-xs text-obsidian-400 mt-1">
          {message.timestamp.toLocaleTimeString('en-IN', { 
            hour: '2-digit', 
            minute: '2-digit' 
          })}
        </div>
      </div>
    </motion.div>
  );
};