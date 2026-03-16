export interface VoiceAssistantState {
  isListening: boolean;
  isActive: boolean;
  isSpeaking: boolean;
  transcript: string;
  response: string;
  error: string | null;
}

export interface Message {
  id: string;
  type: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export interface VoiceAssistantConfig {
  language: string;
  voice: string;
  rate: number;
  pitch: number;
  volume: number;
}

export interface ProductKnowledge {
  diamondQuality: {
    cut: string;
    clarity: string;
    carat: string;
    color: string;
  };
  brandUSP: string[];
  pricing: string;
  authenticity: string;
}