import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mic, 
  MicOff, 
  MessageCircle, 
  X, 
  Send, 
  Volume2, 
  VolumeX,
  Gem
} from 'lucide-react';
import { useSpeechRecognition } from '../hooks/useSpeechRecognition';
import { useSpeechSynthesis } from '../hooks/useSpeechSynthesis';
import { VoiceWaveform } from './VoiceWaveform';
import { ChatBubble } from './ChatBubble';
import { VoiceAssistantService } from '../services/voiceAssistantService';
import { Message } from '../types/VoiceAssistant';

interface VoiceAssistantProps {
  isOpen?: boolean;
  setIsOpen?: (open: boolean) => void;
}

export const VoiceAssistant: React.FC<VoiceAssistantProps> = ({ 
  isOpen: externalIsOpen, 
  setIsOpen: externalSetIsOpen 
}) => {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  
  // Use external state if provided, otherwise use internal state
  const isOpen = externalIsOpen !== undefined ? externalIsOpen : internalIsOpen;
  const setIsOpen = externalSetIsOpen || setInternalIsOpen;
  const [messages, setMessages] = useState<Message[]>([]);
  const [textInput, setTextInput] = useState('');
  const [isMuted, setIsMuted] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const assistantService = useRef(new VoiceAssistantService());
  
  const {
    transcript,
    isListening,
    startListening,
    stopListening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();
  
  const { speak, stop: stopSpeaking, isSpeaking } = useSpeechSynthesis();

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Handle voice transcript
  useEffect(() => {
    if (transcript && !isListening && transcript.trim().length > 0) {
      handleUserInput(transcript);
      resetTranscript();
    }
  }, [transcript, isListening]);

  // Welcome message when opened
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage: Message = {
        id: Date.now().toString(),
        type: 'assistant',
        content: "Namaste! I'm Jay, your personal jewelry assistant at SR Natural Diamonds. I can help you explore our collection, understand diamond quality, or answer any questions about our authentic natural diamonds. How may I assist you today?",
        timestamp: new Date()
      };
      setMessages([welcomeMessage]);
      
      if (!isMuted) {
        speak(welcomeMessage.content);
      }
    }
  }, [isOpen, messages.length, isMuted, speak]);

  const handleUserInput = async (input: string) => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: input.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setTextInput('');
    setIsProcessing(true);

    try {
      const response = await assistantService.current.processQuery(input);
      
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'assistant',
        content: response,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
      
      if (!isMuted) {
        speak(response);
      }
    } catch (error) {
      console.error('Error processing query:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'assistant',
        content: "I apologize, but I'm having trouble processing your request right now. Please try again or type your question in the chat.",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleVoiceToggle = () => {
    if (isListening) {
      stopListening();
    } else {
      if (isSpeaking) {
        stopSpeaking();
      }
      startListening();
    }
  };

  const handleTextSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleUserInput(textInput);
  };

  const toggleMute = () => {
    if (isSpeaking) {
      stopSpeaking();
    }
    setIsMuted(!isMuted);
  };

  return (
    <>
      {/* Floating Assistant Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-white to-obsidian-200 text-black rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 z-50 ${
          isOpen ? 'hidden' : 'flex'
        } items-center justify-center group animate-diamond-pulse`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <Gem className="h-6 w-6 sm:h-7 sm:w-7 group-hover:rotate-12 transition-transform duration-300" />
        
        {/* Pulse animation */}
        <div className="absolute inset-0 rounded-full bg-white animate-ping opacity-20"></div>
      </motion.button>

      {/* Assistant Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 400 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 400 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 w-full sm:w-80 md:w-96 h-full bg-obsidian-900 shadow-2xl z-50 flex flex-col border-l border-obsidian-800"
          >
            {/* Header */}
            <div className="bg-black text-white p-3 sm:p-4 flex items-center justify-between border-b border-obsidian-800">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white text-black rounded-full flex items-center justify-center animate-glow">
                  <Gem className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm sm:text-base">Priya</h3>
                  <p className="text-xs text-obsidian-300 hidden sm:block">Your Diamond Assistant</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <button
                  onClick={toggleMute}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors min-h-[44px] min-w-[44px]"
                >
                  {isMuted ? <VolumeX className="h-4 w-4 sm:h-5 sm:w-5" /> : <Volume2 className="h-4 w-4 sm:h-5 sm:w-5" />}
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors min-h-[44px] min-w-[44px]"
                >
                  <X className="h-4 w-4 sm:h-5 sm:w-5" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4 bg-obsidian-900 chat-scroll">
              {messages.map((message) => (
                <ChatBubble key={message.id} message={message} />
              ))}
              
              {isProcessing && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white text-black rounded-full flex items-center justify-center">
                    <Gem className="h-3 w-3 sm:h-4 sm:w-4" />
                  </div>
                  <div className="glass-card px-3 sm:px-4 py-2 sm:py-3 rounded-xl sm:rounded-2xl">
                    <div className="flex space-x-1">
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"
                          animate={{ opacity: [0.3, 1, 0.3] }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            delay: i * 0.2
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Voice Controls */}
            <div className="p-3 sm:p-4 border-t border-obsidian-800 bg-obsidian-900">
              <VoiceWaveform 
                isActive={isListening || isSpeaking} 
                isListening={isListening}
                isSpeaking={isSpeaking}
              />
              
              <div className="flex items-center space-x-2 sm:space-x-3 mt-3 sm:mt-4">
                {browserSupportsSpeechRecognition && (
                  <motion.button
                    onClick={handleVoiceToggle}
                    className={`flex-1 py-3 px-3 sm:px-4 rounded-full font-medium transition-all duration-200 flex items-center justify-center space-x-1 sm:space-x-2 min-h-[44px] ${
                      isListening 
                        ? 'bg-green-500 text-white hover:bg-green-600' 
                        : 'glass-card text-white hover:bg-white/10'
                    }`}
                    whileTap={{ scale: 0.95 }}
                  >
                    {isListening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
                    <span className="text-sm sm:text-base">{isListening ? 'Stop' : 'Voice'}</span>
                  </motion.button>
                )}
                
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-3 text-obsidian-400 hover:text-white hover:bg-obsidian-800 rounded-full transition-all duration-200 min-h-[44px] min-w-[44px]"
                >
                  <MessageCircle className="h-5 w-5" />
                </button>
              </div>

              {/* Text Input */}
              <form onSubmit={handleTextSubmit} className="mt-2 sm:mt-3">
                <div className="flex space-x-1 sm:space-x-2">
                  <input
                    type="text"
                    value={textInput}
                    onChange={(e) => setTextInput(e.target.value)}
                    placeholder="Type your question here..."
                    className="flex-1 px-3 sm:px-4 py-3 bg-obsidian-800 border border-obsidian-700 rounded-full focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent text-xs sm:text-sm text-white placeholder-obsidian-400 min-h-[44px]"
                    disabled={isProcessing}
                  />
                  <motion.button
                    type="submit"
                    disabled={!textInput.trim() || isProcessing}
                    className="p-3 bg-white text-black rounded-full hover:bg-obsidian-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 min-h-[44px] min-w-[44px]"
                    whileTap={{ scale: 0.95 }}
                  >
                    <Send className="h-4 w-4" />
                  </motion.button>
                </div>
              </form>

              {/* Status Indicator */}
              <div className="mt-2 sm:mt-3 text-center">
                <span className={`text-xs px-2 sm:px-3 py-1 rounded-full ${
                  isListening 
                    ? 'bg-green-100 text-green-700' 
                    : isSpeaking 
                    ? 'bg-white/10 text-white'
                    : 'bg-obsidian-800 text-obsidian-400'
                }`}>
                  {isListening ? 'Listening...' : isSpeaking ? 'Speaking...' : 'Ready to help'}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};