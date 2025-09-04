import { useState, useCallback, useRef } from 'react';

interface SpeechSynthesisHook {
  speak: (text: string) => void;
  stop: () => void;
  isSpeaking: boolean;
  voices: SpeechSynthesisVoice[];
}

export const useSpeechSynthesis = (): SpeechSynthesisHook => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  const loadVoices = useCallback(() => {
    const availableVoices = speechSynthesis.getVoices();
    setVoices(availableVoices);
  }, []);

  const speak = useCallback((text: string) => {
    if ('speechSynthesis' in window) {
      // Stop any current speech
      speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(text);
      utteranceRef.current = utterance;

      // Configure voice for Indian English
      const indianVoice = voices.find(voice => 
        voice.lang.includes('en-IN') || 
        voice.name.toLowerCase().includes('indian') ||
        voice.name.toLowerCase().includes('ravi') ||
        voice.name.toLowerCase().includes('veena')
      );

      if (indianVoice) {
        utterance.voice = indianVoice;
      } else {
        // Fallback to any English voice
        const englishVoice = voices.find(voice => voice.lang.startsWith('en'));
        if (englishVoice) {
          utterance.voice = englishVoice;
        }
      }

      utterance.rate = 0.9; // Slightly slower for clarity
      utterance.pitch = 1.1; // Slightly higher for friendliness
      utterance.volume = 0.8;

      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);

      speechSynthesis.speak(utterance);
    }
  }, [voices]);

  const stop = useCallback(() => {
    if ('speechSynthesis' in window) {
      speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  }, []);

  // Load voices when component mounts and when voices change
  useState(() => {
    loadVoices();
    if (speechSynthesis.onvoiceschanged !== undefined) {
      speechSynthesis.onvoiceschanged = loadVoices;
    }
  });

  return { speak, stop, isSpeaking, voices };
};